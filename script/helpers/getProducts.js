export const getProducts = () => {

    const url = '/script/helpers/products.json';

    const products = [];

    fetch(url) 
    .then(res => {
        if(!res.ok) {
            throw new Error('No se han podido obterner los datos');
        }
        return res.json();
    })
    .then(data => {
        data.forEach(product => {
            products.push(product);
        })
    })
    .catch(error => console.log('Hubo un error: ', error));

    return products;

}