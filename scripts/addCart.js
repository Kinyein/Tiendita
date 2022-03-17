const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
const carrito = []


const addCart = (id, name, img, price) => {
    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
    if (cartLocalStorage !== null) {
        cartLocalStorage.unshift({ id, name, img, price })
        localStorage.setItem('cart', JSON.stringify(cartLocalStorage));

    } else {
        carrito.unshift({ id, name, img, price });
        localStorage.setItem('cart', JSON.stringify(carrito));
        
    }
}
export default addCart
