export const CartFooterInfo = (cart) => {

    const div = document.createElement('div');
    div.classList.add('cart__footer__info');

    let cartTotal = 0;
    let totalItems = 0;

    cart.forEach(cartItem => {
        cartTotal += cartItem.price * cartItem.quantity;

        totalItems += cartItem.quantity;
    });

    div.innerHTML =
    `
    <p class="cart__footer__subtotal">Subtotal: ${cartTotal}</p>
    <p class="cart__footer__quantity">Cantidad de productos en el carrito: ${totalItems}</p>
    `;

    return div;

};