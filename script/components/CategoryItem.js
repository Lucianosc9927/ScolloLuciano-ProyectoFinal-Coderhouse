import { handleCategorySelection } from "../helpers/handleCategorySelection.js";

export const CategoryItem = (category) => {

    const div = document.createElement('div');
    div.classList.add('category__item');
    div.setAttribute('data-id', `${category}`);

    div.innerHTML = 
    `
    <p class="category__selector">${category}</p>
    `;

    
    div.addEventListener('click', handleCategorySelection);


    return div;

};