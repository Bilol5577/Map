const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const productList = Array.from(document.querySelectorAll('.product'));
const noResultMessage = document.getElementById('noResultMessage');

function searchProduct() {
    const searchValue = searchInput.value.toLowerCase().trim();

    const filteredProducts = productList.filter(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        return productName.includes(searchValue);
    });

    // Barcha mahsulotlarni yashirish
    productList.forEach(product => product.style.display = 'none');

    // Faqat filtrlangan mahsulotlarni ko'rsatish
    filteredProducts.forEach(product => product.style.display = 'block');

    // Agar natijalar bo'lmasa, xabarni ko'rsatish
    if (filteredProducts.length === 0) {
        noResultMessage.classList.remove('hidden');
    } else {
        noResultMessage.classList.add('hidden');
    }
}

searchButton.addEventListener('click', searchProduct);
