const cantCartItems = ()=>{
    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
    const cantCart = document.getElementById('cantCart');
    const cantCartModal = document.getElementById('cantCartModal');

    if(cartLocalStorage){
        let cantObjetos = Object.keys(cartLocalStorage).length;
        cantCart.textContent = cantObjetos;
        cantCartModal.textContent = cantObjetos;
    }    
}

export default cantCartItems