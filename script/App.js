import { Cart, categories } from "./helpers/data.js";
import { ProductContainer } from "./components/ProductContainer.js";
import { CartContainer } from "./components/CartContainer.js";
import { CategoryContainer } from "./components/CategoryContainer.js";
import { getProducts } from "./helpers/getProducts.js";


export const App = () => {

    const root = document.querySelector('#root');

    root.append(CategoryContainer(categories));
    root.append(ProductContainer(getProducts())); 
    root.append(CartContainer(Cart));
    
};