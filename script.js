const productsDiv = document.querySelector('.products');
const count = document.querySelector('h1 span');

const cartArr = [];

count.innerHTML = cartArr.length;

function reload(arr) {
    productsDiv.innerHTML = '';

    for (let item of arr) {
        // elements
        const product = document.createElement('div');
        const product__info = document.createElement('div');
        const rates = document.createElement('div');
        const priceDiv = document.createElement('div');
        const rateDiv = document.createElement('div');
        const countDiv = document.createElement('div');
        const price = document.createElement('span');
        const rate = document.createElement('span');
        const count = document.createElement('span');
        const image = document.createElement('img');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        const addToFavorite = document.createElement('button');

        // innerHtml
        title.innerHTML = item.title.split(' ').slice(0, 3).join(' ') + '...';
        description.innerHTML = item.description.split(' ').slice(0, 15).join(' ') + '...';
        price.innerHTML = item.price;        
        rate.innerHTML = item.rating.rate;        
        count.innerHTML = item.rating.count;
        addToFavorite.innerHTML = 'В избранное';
        priceDiv.innerHTML += priceSvg();
        rateDiv.innerHTML += ratingSvg();
        countDiv.innerHTML += countSvg();

        // attr
        product.classList.add('product');
        image.src = './81fPKd-2AYL 1.png';
        product__info.classList.add('product__info');
        rates.classList.add('rates');

        // 1
        priceDiv.append(price);
        rateDiv.append(rate);
        countDiv.append(count);

        // 2
        rates.append(priceDiv, rateDiv, countDiv);

        // 3
        product__info.append(title, description, rates, addToFavorite);
    
        // 4
        product.append(image, product__info);

        // 5
        productsDiv.append(product);
    }
}

reload(productsArr);

const productsContainer = document.getElementById('products-container')
const showFive = document.getElementById('show-five')
const showAll= document.getElementById('show-all')

function displayProducts(productsToShow) {
    productsContainer.innerHTML = ''
    productsToShow.forEach(product => {
        const productElement = document.createElement('div')
        productElement.classList.add('product')
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product__info">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>Цена: $${product.price}</p>
                <p>Рейтинг: ${product.rating && product.rating.rate ? product.rating.rate : 'Нет данных'} (${product.rating && product.rating.count ? product.rating.count : '0'} отзывов)</p>
                <button>Добавить в корзину</button>
            </div>
        `;
        productsContainer.appendChild(productElement)
    });
}
showFive.onclick = () => {
    displayProducts(productsArr.slice(0, 5));
}
showAll.onclick = () => {
    displayProducts(productsArr)
}
displayProducts(productsArr.slice(0, 5))

const openModal = document.getElementById('open-modal')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('close-modal')

openModal.onclick = () => {
    modal.classList.add('show');
}

closeModal.onclick = () => {
    modal.classList.remove('show')
}

