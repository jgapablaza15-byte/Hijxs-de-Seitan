let productsArray = [];

document.addEventListener('DOMContentLoaded', () => {
    const listProducts = document.querySelector('.row');
    listProducts.addEventListener('click', getDataElements);
});

function getDataElements(e) {
    if (e.target.classList.contains('btn-agregar')) {
        const card = e.target.closest('.card');
        selectData(card);
    }
}

function selectData(card) {
    const productObj = {
        title: card.querySelector('h3').textContent,
        img: card.querySelector('img').src,
        price: Number(
            card.querySelector('.precio span').textContent.replace('$', '')
        ),
        quantity: 1
    };

    productsArray = [...productsArray, productObj];

productsHtml();
}


function productsHtml(){ 
    productsArray.forEach(prod => {
         const{ img, tittle, price, quatify, id} = prod:

         const tr = document.createElement('tr');
         const tdImg = document.createElement('id');
         const prodImg = document.createElement ('img');
         proding src = img;
         tdImg appendchild(proding);
        
         tr.append(tdImg);

         console.log (tr);
    })
}