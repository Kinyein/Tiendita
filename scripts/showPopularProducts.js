const popularContainer = document.getElementById('popularContainer');


const showPopularProducts = async (url)=>{
    const popular = await fetch(url);
    const popularData = await popular.json();
    localStorage.setItem('popular', JSON.stringify(popularData))

    popularData.map(prod=>{
        const {id, name, price, img} = prod

        popularContainer.innerHTML += `
            <div class="popularProduct">
                <img src="${img}" alt="${name}" id="${id}" data-bs-toggle="modal" data-bs-target="#infoProduct" class="imgPopularProduct">
                <div class="textProduct">
                    <h5 class="price">&#36;${price} /Kg</h5>
                    <p class="titleProduct">${name}</p>
                </div>
                <button class="add" id="${id}">Agregar</button>
            <div/>
        `
    })
}

export default showPopularProducts;