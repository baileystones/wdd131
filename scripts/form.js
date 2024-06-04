const selectOptions = document.querySelector("#product-name");

const products = [
    {
      id: fc-1888,
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: fc-2050,
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: fs-1987,
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: ac-2000,
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: jj-1969,
      name: "warp equalizer",
      avgRating: 5.0
    }
  ];


products.forEach(product => {
    const newOption = document.createElement("option");
    newOption.value = product.id;
    newOption.textContent = product.name;
  
    selectOptions.appendChild(newOption);
});