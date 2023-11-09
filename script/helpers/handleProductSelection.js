import { Cart, Products } from "./data.js";
import { updateCart } from "./updateCart.js";
import { getProducts } from "./getProducts.js";

export const handleProductSelection = (e) => {

    //Producto seleccionado
    const productId = e.target.dataset.id;
    let productSelected;
    
    //Si el producto existe lo voy a buscar el carrito
    if(Cart.some(product => product.id === productId)) {
        productSelected = Cart.find(product => product.id === productId);
        productSelected.quantity += 1;
    } else {
        // const products = getProducts();
        //Si no existe me lo traigo del array de productos
        const productSelected = Products.find(product => product.id === productId);
        Cart.push(productSelected);
    }

    //Actualizo el carrito del local storage    
    localStorage.setItem('cart', JSON.stringify(Cart));
    
    //Actualizo el carrito del DOM
    updateCart(Cart);

    Toastify({

        text: "Producto agregado al carrito!!",
        
        duration: 2000,
        style: {
            background: "green"
        }
        
        }).showToast();

};