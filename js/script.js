const pokemomname = document.querySelector(".pokemom_name")
const fetchpokemom = async (pokemom) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemom}`
  )
  const data = await APIResponse.json();
  return data;
}

const renderPokemom = async (pokemom) => {
  const data = await fetchpokemom(pokemom)

  pokemomname.innerHTML = data.name;
}

renderPokemom('90')
