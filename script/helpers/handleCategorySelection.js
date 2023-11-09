import { Products } from "./data.js";
import { Product } from "./../components/Product.js";

export const handleCategorySelection = (e) => {

    const productsSection = document.querySelector('.products__section');
    productsSection.innerHTML = '';

    const categorySelected = e.currentTarget.dataset.id;

    const filteredProducts = Products.filter(product => product.category === categorySelected || categorySelected === 'todos'); 


    filteredProducts.forEach(product => {
        productsSection.append(Product(product));
    });

 
    const categories = document.querySelectorAll('.category__item');

    //Le borramos la categoria seleccionada al que la tenia
    categories.forEach(category => {
        category.classList.remove('category--selected');
    });

    //Se la aplicamos a la que fue seleccionada
    e.currentTarget.classList.add('category--selected');


};