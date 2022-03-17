const productContainer = document.getElementById('productContainer');
const productsRelacionados = document.getElementById('productsRelacionados');


const showProducts = async (url)=>{
    const products = await fetch(url);
    const data = await products.json();
    localStorage.setItem('products', JSON.stringify(data))

    data.map(prod=>{
        const {id, name, oldPrice, price, img} = prod

        productContainer.innerHTML += `
            <div class="productCard">
            <img src="${img}" alt="name" id="${id}" data-bs-toggle="modal" data-bs-target="#infoProduct" class="imgProduct">
            <div class="textProduct">
                <h5 class="Newprice">&#36;${price} /Kg</h5>
                <h5 class="oldPrice">&#36;${oldPrice} /Kg</h5>
                <p class="titleProduct">${name}</p>
            </div>
            <button class="add" id="${id}">Agregar</button>
    </div>
        `;
        productsRelacionados.innerHTML += `
    <div class="productCard">
                                    <img src="${img}" alt="${name}" id="${id} width="200">
                                    <div class="textProduct">
                                        <h5 class="Newprice">${price}</h5>
                                        <h5 class="originalPrice">${oldPrice}</h5>
                                        <p class="titleProduct">${name}</p>
                                    </div>
                                    <button class="add" id="${id}">Agregar</button>
                                </div>
    `;

    })
    
}

export default showProducts;