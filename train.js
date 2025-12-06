const products = [
    { name: "iPhone 14", category: "Electronics", price: 999, rating: 4.5, inStock: true },
    { name: "MacBook Pro", category: "Electronics", price: 199, rating: 4.8, inStock: false },
    { name: "Nike Shoes", category: "Fashion", price: 120, rating: 4.2, inStock: true },
    { name: "Coffee Maker", category: "Home", price: 89, rating: 4.0, inStock: true },
    { name: "Wireless Headphones", category: "Electronics", price: 199, rating: 4.6, inStock: true }
];
const priceRangeInput = document.getElementById("priceRange").addEventListener("input", () => {
    priceValue.textContent = priceRange.value;
    let filtredproductsContainer = "";
    let filteredProductsByPrice = products.filter(product => product.price == priceRange.value)
    for (item of filteredProductsByPrice) {
        filtredproductsContainer +=
            `
        <p>${item.name}</p>
        <p>${item.category}</p>
        <p>${item.price}</p>
        <p>${item.rating}</p>
        <p>${item.inStock}</p>
        `
    }
    productsContainer.innerHTML = filtredproductsContainer;
})
if (categoryFilter.value == "") {
    let filteredproductContainer = "";
    for (item of products) {
        filteredproductContainer +=
            `
          <p>${item.name}</p>
          <p>${item.category}</p>
          <p>${item.price}</p>
          <p>${item.rating}</p>
          <p>${item.inStock}</p>
          `
    }
    productsContainer.innerHTML = filteredproductContainer;

}
categoryFilter.addEventListener("change", () => {
    if (categoryFilter.value == "") {
        let filteredproductContainer = "";
        for (item of products) {
            filteredproductContainer +=
                `
          <p>${item.name}</p>
          <p>${item.category}</p>
          <p>${item.price}</p>
          <p>${item.rating}</p>
          <p>${item.inStock}</p>
          `
        }
        productsContainer.innerHTML = filteredproductContainer;
        return;

    }
    let filteredproductContainer = "";
    let filtredProductsByCategorie = products.filter(product => product.category == categoryFilter.value)
    for (item of filtredProductsByCategorie) {
        filteredproductContainer +=
            `
          <p>${item.name}</p>
          <p>${item.category}</p>
          <p>${item.price}</p>
          <p>${item.rating}</p>
          <p>${item.inStock}</p>
          `
    }
    productsContainer.innerHTML = filteredproductContainer;
})
const productSearchInput = document.getElementById("productSearch").addEventListener('keyup', () => {
    let searchedProduct = products.find(product => product.name == productSearch.value)
    if (searchedProduct === undefined) {
        productsContainer.innerHTML = "";
        return;
    }
    productsContainer.innerHTML =
        `
      <p>${searchedProduct.name}</p>
      <p>${searchedProduct.category}</p>
      <p>${searchedProduct.price}</p>
      <p>${searchedProduct.rating}</p>
      <p>${searchedProduct.inStock}</p>
      `
})
