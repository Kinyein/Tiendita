const showCarrito = () => {
    let cartProducts = document.getElementById('cartProducts');
    let modalBody = document.getElementById('modalBody');
    let modalFooter = document.getElementById('modalFooter');

    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))

    if (cartLocalStorage === '' || cartLocalStorage === null) {
        modalBody.innerHTML = `
        <div class="emptyCart">
                            <img src="/img/emptyCart.png" alt="">
                            <h5>Tu canasta está vacía</h5>
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Agregar
                                Productos</button>
        `;

        modalFooter.innerHTML = ``;
    } else {
        let cant = 1;

        cartLocalStorage.map(prod => {

            const { id, name, img, price } = prod;
            cartProducts.innerHTML += `
            
            <div class="productsCart">
        
                <div class="imgTextProduct">
                    <img src="${img}" alt="" class="${name}">
                    <div class="cartProductText">
                        <p class="cartProducName">${name}</p>
                        <h5 class="cartProductPrice">&#36;${price}</h5>
                    </div>
                </div>
            
                <div class="cantidadProduct">
                    <div class="selectCant">
                        <button id="menos" class="menos"><i class="fa-solid fa-minus"></i></button>
                        <p id="cantProduct" class="cantProduct">1</p>
                        <button id="mas" class="mas"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
                <hr id="separador"/>
            </div>

            `
        })

        totalCart();


        aumentarCant(cant);

        let clearCart = document.getElementById('clearCart');

        clearCart.addEventListener('click', () => {
            const cantCart = document.getElementById('cantCart');
            cartProducts.innerHTML = ``;

            modalBody.innerHTML = `
                <div class="emptyCart">
                                    <img src="/img/emptyCart.png" alt="">
                                    <h5>Tu canasta está vacía</h5>
                                    <button type="button" class="btn btn-success" data-bs-dismiss="modal">Agregar
                                        Productos</button>
                `;

            modalFooter.innerHTML = ``;

            cantCart.textContent = 0;

            console.log('clear');
            localStorage.removeItem('cart')
        })
    }

}

const aumentarCant = (cant) => {
    const masButton = document.querySelectorAll('.mas');
    const menosButton = document.querySelectorAll('.menos');
    const cantProduct = document.querySelectorAll('.cantProduct')

    masButton.forEach(but => {
        but.addEventListener('click', () => {
            console.log('mas :)', cant++)
            // cantProduct.forEach(p=>{
            //     p.textContent = cant
            // })
        })
    })

    menosButton.forEach(but => {
        but.addEventListener('click', () => {
            console.log('menos :(', cant--)

        })
    })

    // menosButton.addEventListener('click',()=>{
    //     console.log('menos');
    //     cant--
    //     cantProduct.textContent = cant
    // })
}

const totalCart = ()=>{
    let totalPrices = []
    let totalPagarCart = document.getElementById('totalCart');
    let totalPagar = document.getElementById('total');
    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
    
    cartLocalStorage.map(p=>{
        const {price} = p
        console.log(price);
        
        totalPrices.push(price)
    })
    
    let total = totalPrices.reduce((previous, current) => current += previous);
    
    totalPagarCart.textContent = '$'+total;
    totalPagar.textContent = 'Pagar $'+total;
}

export default showCarrito