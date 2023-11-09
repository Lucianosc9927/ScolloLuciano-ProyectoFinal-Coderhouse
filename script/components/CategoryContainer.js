import { CategoryItem } from "./CategoryItem.js";


export const CategoryContainer = (categories) => {

    const section = document.createElement('section');
    section.classList.add('category__section');


    categories.forEach(category => {
        section.append(CategoryItem(category));
    });




    return section;
};