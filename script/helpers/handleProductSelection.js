import { Cart, Products } from "./data.js";
import { updateCart } from "./updateCart.js";

export const handleProductSelection = (e) => {
    

    //Producto seleccionado
    const productId = e.target.dataset.id;
    let productSelected;
    
    //Si el producto existe lo voy a buscar el carrito
    if(Cart.some(product => product.id === productId)) {
        productSelected = Cart.find(product => product.id === productId);
        productSelected.quantity += 1;
    } else {
        //Si no existe me lo traigo del array de productos
        fetch('/script/helpers/products.json')
        .then(res => {
            if(!res.ok) {
                throw new Error('Hubo un problema al traer los datos');
            }
            return res.json();
        })
        .then(data => {
            const productSelected = data.find(product => product.id === productId);
            Cart.push(productSelected);
            updateCart(Cart);

        })
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