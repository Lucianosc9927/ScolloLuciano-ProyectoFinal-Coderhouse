import { CartFooterInfo } from "../components/CartFooterInfo.js";
import { CartItem } from "../components/CartItem.js";

export const updateCart = (cart) => {

    const cartBody = document.querySelector('.cart__body');
    const cartFooter = document.querySelector('.cart__footer');

    cartBody.innerHTML = '';
    cartFooter.innerHTML = '';

    cart.forEach(cartItem => {
        cartBody.append(CartItem(cartItem));
    });   

    cartFooter.append(CartFooterInfo(cart));

    //Actualizo el carrito del local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    
};