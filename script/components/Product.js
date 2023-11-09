import { handleProductSelection } from "../helpers/handleProductSelection.js";

export const Product = (product) => {

    const div = document.createElement('div');
    div.classList.add('product');

    const { name, price, thumbnail, id } = product;


    div.innerHTML = 
    `
    <div class="product__info">
        <img class="product__img" src='./assets/${thumbnail}' alt="Foto del producto ${name}">
        <h3 class="product__name">${name}</h3>
        <p class="product__price">$${price}</p>
    </div>
    <button class="product__add-to-cart" data-id="${id}">Agregar</button>
    `


    const btn = div.querySelector('.product__add-to-cart');

    btn.addEventListener('click', handleProductSelection);


    return div;

};