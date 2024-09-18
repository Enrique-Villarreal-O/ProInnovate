const productsContainer = document.getElementById('products-container');

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProducts(products) {
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.title;

    const title = document.createElement('h2');
    title.textContent = product.title;

    const price = document.createElement('p');
    price.textContent = `Precio: $${product.price}`;

    const category = document.createElement('p');
    category.textContent = `Categoría: ${product.category}`;

    const description = document.createElement('p');
    description.textContent = product.description.substring(0, 100) + '...';

    const timer = document.createElement('p');
    timer.className = 'timer';

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Comprar';

    card.append(img, title, price, category, description, timer, buyButton);

    startTimer(timer, buyButton);

    return card;
}

function startTimer(timerElement, button) {
    const duration = Math.floor(Math.random() * (180 - 60 + 1) + 60); // 60 a 180 segundos
    let timeLeft = duration;

    const timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `Tiempo restante: ${minutes}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            button.disabled = true;
            timerElement.textContent = 'Tiempo agotado';
        }
        timeLeft--;
    }, 1000);
}

fetchProducts();
