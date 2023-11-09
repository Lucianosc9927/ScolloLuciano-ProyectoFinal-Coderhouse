import { CartFooterInfo } from "./CartFooterInfo.js";

export const CartFooter = (cart) => {

    const div = document.createElement('div');
    div.classList.add('cart__footer');


    div.append(CartFooterInfo(cart));


    return div;
};