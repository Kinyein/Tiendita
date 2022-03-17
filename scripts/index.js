import showProducts from "./showProducts.js";
import showPopularProducts from "./showPopularProducts.js";
import catchIdProducts from "./detailProduct.js";
import addCart from "./addCart.js";
import showCarrito from "./showCarrito.js";
import cantCartItems from "./cantItemsCart.js";

const urlProducts = 'http://localhost:4000/productos/'
const urlPopular = 'http://localhost:4000/populares/'

document.addEventListener('DOMContentLoaded', () => {
    showProducts(urlProducts);
    showPopularProducts(urlPopular);
    showCarrito();
    cantCartItems();
})

catchIdProducts(urlProducts, urlPopular)


document.addEventListener('click', async (e) => {
    catchIdProducts(urlProducts, urlPopular)

    if (e.target.classList.contains('add')) {
        //     let productSelected = JSON.parse(localStorage.getItem('productSelected'))
        // const {name,img,price} = productSelected;
        console.log('add')

        if (e.target.id < 7) {
            let idProd = e.target.id;
            console.log(idProd);
            const product = await fetch(urlProducts + idProd);
            const data = await product.json();
            const { id, name, img, price } = data;

            addCart(id, name, img, price)
        } else {
            let idProd = e.target.id;
            console.log(idProd);
            const popular = await fetch(urlPopular + idProd);
            const data = await popular.json();
            const { id, name, img, price } = data;

            addCart(id, name, img, price)
        }
        cantCartItems();
    }
})