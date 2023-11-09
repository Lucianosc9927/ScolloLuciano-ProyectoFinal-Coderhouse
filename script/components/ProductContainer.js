import { Product } from "./Product.js";

export const ProductContainer = (products) => {


    const section = document.createElement('section');
    section.classList.add('products__section');


    products.forEach(product => {
        section.append(Product(product));
    });



    return section;


};  