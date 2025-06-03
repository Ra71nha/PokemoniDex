const pokemomname = document.querySelector(".pokemom_name")
const pokemomnunber = document.querySelector(".pokemom_nunber")
const pokemomimage = document.querySelector(".pokemom_image")

const form = document.querySelector(".form")
const input = document.querySelector(".input__search")
const buttonPrev = document.querySelector(".btn-prev")
const buttonNext = document.querySelector(".btn-next")

let searchpokemom = 1;

const fetchpokemom = async (pokemom) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemom}`
  )

  if (APIResponse.status === 200) {
    const data = await APIResponse.json()
    return data
  }
}

const renderPokemom = async (pokemom) => {
  pokemomname.innerHTML = "Loading..."
  pokemomnunber.innerHTML = ""

  const data = await fetchpokemom(pokemom)

  if (data) {
    pokemomimage.style.display = 'block';
    pokemomname.innerHTML = data.name
    pokemomnunber.innerHTML = data.id
    pokemomimage.src =
      data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
        "front_default"
      ]
      searchpokemom = data.id;
  } else {
    pokemomimage.style.display = 'none';
    pokemomname.innerHTML = "Not found :c"
    pokemomnunber.innerHTML = ""
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault()

  renderPokemom(input.value.toLowerCase())
  input.value = ""
})

buttonPrev.addEventListener("click", () => { 
  if (searchpokemom > 1) {
  searchpokemom -= 1;
  renderPokemom(searchpokemom);
  }
})

buttonNext.addEventListener("click", () => {
  searchpokemom += 1;
  renderPokemom(searchpokemom);
})

renderPokemom(searchpokemom)
