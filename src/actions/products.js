import { UPDATE_PRODUCTS,UPDATE_PRODUCT_DESCRIPTION,ADD_NEW_PRODUCT,INCREASE_QUANTITY,DECREASE_QUANTITY,DELETE_PRODUCT,SORT_PRODUCTS } from './actionTypes';
export function fetchProducts() {
    return (dispatch) => {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            url = 'http://my-json-server.typicode.com/deepak-singh343/productdb/db'
        fetch(proxyUrl + url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch(updateProducts(data.Products));
            })
    };
}
export function updateProducts(products) {
    return {
        type: UPDATE_PRODUCTS,
        products
    }
}

export function updateProductDescription(product,index) {
    return {
        type: UPDATE_PRODUCT_DESCRIPTION,
        product,
        index
    }
}
export function addNewProduct(product){
    return {
        type:ADD_NEW_PRODUCT,
        product
    }
}
export function increaseQuantity(product,index){
    return {
        type:INCREASE_QUANTITY,
        product,
        index
    }
}
export function decreaseQuantity(product,index){
    return {
        type:DECREASE_QUANTITY,
        product,
        index
    }
}
export function deleteProduct(product)
{
    return{
        type:DELETE_PRODUCT,
        product
    }
}
export function sortProducts(products)
{
    return{
        type:SORT_PRODUCTS,
        products
    }
}