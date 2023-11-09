import { CartItem } from "./CartItem.js";

export const CartBody = (cart) => {

    //Contenedor de los productos
    const div = document.createElement('div');
    div.classList.add('cart__body');

    //Carrito almacenado en el local
    const localStorageCart = JSON.parse(localStorage.getItem('cart'));
    
    //Si hay productos en el local los pusheo los productos a mi carrito
    if(localStorageCart) {
        localStorageCart.forEach(product => {
            cart.push(product);
        });
    }

    //Los agrego al contenedor    
    cart.forEach(product => {
        div.append(CartItem(product));
    });

    return div;
};

