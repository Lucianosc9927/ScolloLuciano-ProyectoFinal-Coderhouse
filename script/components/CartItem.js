import { handleProductRemove } from "../helpers/handleProductRemove.js";

export const CartItem = (cartItem) => {

    //Elemento html 
    const div = document.createElement('div');
    div.classList.add("cart__item");

    const { name, price, id, quantity } = cartItem;

    
    div.innerHTML = 
    `
    <div class="cart__item__info">
        <h3 class="cart__item__name">${name}</h3>
        <p class="cart__item__quantity">${quantity}</p>
        <p class="cart__item__price">$${price * quantity}</p>
    </div>
    <button class="cart__item__delete-from-cart" data-id="${id}">Eliminar</button>
    `;

    const btn = div.querySelector('.cart__item__delete-from-cart');

    btn.addEventListener('click', handleProductRemove);

    return div;
};