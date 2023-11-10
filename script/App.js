import { Cart, categories } from "./helpers/data.js";
import { ProductContainer } from "./components/ProductContainer.js";
import { CartContainer } from "./components/CartContainer.js";
import { CategoryContainer } from "./components/CategoryContainer.js";

export const App = () => {


    fetch('./script/helpers/products.json')
        .then(res => {
            if(!res.ok) {
                throw new Error('Hubo un problema al traer los datos');
            }
            return res.json();
        })
        .then(data => {
            root.append(ProductContainer(data)); 
        })


    const root = document.querySelector('#root');

    root.append(CategoryContainer(categories));
    root.append(CartContainer(Cart));
    
};
