const pokemomname = document.querySelector(".pokemom_name")
const pokemomnunber = document.querySelector(".pokemom_nunber")
const pokemomimage = document.querySelector(".pokemom_image")

const form = document.querySelector(".form")
const input = document.querySelector(".input__search")

const fetchpokemom = async (pokemom) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemom}`
  )
  const data = await APIResponse.json()
  return data
}

const renderPokemom = async (pokemom) => {
  const data = await fetchpokemom(pokemom)

  pokemomname.innerHTML = data.name
  pokemomnunber.innerHTML = data.id
  pokemomimage.src =
    data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
      "front_default"
    ]
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  renderPokemom(input.value);
})
