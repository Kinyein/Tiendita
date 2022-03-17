

const catchIdProducts = (urlProducts, urlPopular)=>{
    document.addEventListener('click',(e)=>{
        if(e.target.classList.contains('imgProduct')){
            let id = e.target.id
            showDetail(urlProducts,id)

        }else if(e.target.classList.contains('imgPopularProduct')){
            let id = e.target.id
            showDetail(urlPopular,id)
        }
    })
}

const showDetail = async(url,id)=>{
    const productDetail = document.querySelector('.productDetail');
    const product = await fetch(url+id);
    const data = await product.json();
    
    const {name, img, price} = data;

    productDetail.innerHTML = `
        <img src="${data.img}" alt="">
        <div class="infoTextProduct">
            <h1 class="titleProduct">${data.name}</h1>
            <h5 class="price">&#36;${data.price} /Kg</h5>
            <p class="iva">Precioscon IVA incluido</p>
            <p class="iva">Peso aproximado por pieza, puede variar de acuerdo al peso real</p>
            
                                <label for="madurez">Selecciona la madurez que deseas</label>
                                <select name="madurez" id="selectMadurez">
                                    <option value="elegir" selected disabled>Por elegir</option>
                                    <option value="maduro">Maduro (Para hoy)</option>
                                    <option value="maduro">Normal (3-5 días)</option>
                                    <option value="maduro">Verde (7 días)</option>
                                </select>
                                <div class="cantidadProduct">
                                <div class="selectCant">
                                    <button id="menos" class="menos"><i class="fa-solid fa-minus"></i></button>
                                    <p id="cantProduct" class="cantProduct">1</p>
                                    <button id="mas" class="mas"><i class="fa-solid fa-plus"></i></button>
                                </div>
                                <button class="add" id="${data.id}">Agregar</button>
                            </div>
                            
        </div>
        
    `
    let productSelectedToLocSto = {id, name, img, price}
    localStorage.setItem('productSelected', JSON.stringify(productSelectedToLocSto))
}

export default catchIdProducts

