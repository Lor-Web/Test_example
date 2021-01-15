let shadow = document.querySelector('.shadow');
let popUp = document.querySelector('.popUp');

async  function getResponse() {
    let response = await fetch('product.json');
    let content = await response.json();
    let card = document.querySelector('.content');

    for (key in content) {
       card.innerHTML += `    
       <div class = "card">
        <img src="${content[key].img}" alt="Фото" class="card-img">
        <span class="card-name">${content[key].name}</span>
        <span class="price">${content[key].price}</span>
        <button id = "cardBtn" class="card-button">Купить</button>
        </div>
       `
    }

    let btn = document.querySelectorAll('#cardBtn')
    
    btn.forEach(el => el.addEventListener('click', () => {
        shadow.classList.toggle('shadow-active');
        popUp.classList.toggle('popUp-active');   
    }))
    
}

getResponse()

shadow.addEventListener('click', () => {
    shadow.classList.toggle('shadow-active')
    popUp.classList.toggle('popUp-active');   
})
