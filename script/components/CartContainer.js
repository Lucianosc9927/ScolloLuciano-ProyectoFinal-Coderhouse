import { CartBody } from "./CartBody.js";
import { CartFooter } from "./CartFooter.js";
 


export const CartContainer = (cart) => {

    //Seccion Carrito
    const section = document.createElement('section');
    section.classList.add('cart__section');


    section.append(CartBody(cart));
    section.append(CartFooter(cart));


    return section;

};