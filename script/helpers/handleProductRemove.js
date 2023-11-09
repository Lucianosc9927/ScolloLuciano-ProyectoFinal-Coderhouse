import { Cart } from "./data.js";
import { updateCart } from "./updateCart.js";

export const handleProductRemove = (e) => {
        
    const productId = e.target.dataset.id;

    const productSelected = Cart.find(product => product.id === productId);

    const productSelectedIndex = Cart.findIndex(cartItem => cartItem.id === productId);

    if(productSelected.quantity - 1 === 0) {
        Cart.splice(productSelectedIndex, 1);        
    } else {
        productSelected.quantity -= 1;
    }

    updateCart(Cart);

    Toastify({

        text: "Producto eliminado del carrito!!",
        
        duration: 2000,
        style: {
            background: "red"
        }
        
        }).showToast();

};