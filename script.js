// Get elements
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let title = document.getElementById("title");
let date = document.getElementById("datemin");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");
let tbody = document.getElementById("tbody");

// Function to calculate total
function getTotal() {
    if (price.value !== '') {
        var result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = '#1de31d';
    } else {
        total.innerHTML = '';
        total.style.background = '#b80000';
    }
}

// Array to store products
let products = [];

// Function to create a product
submit.onclick = function() {
    let newProduct = {
        id: products.length + 1,
        count: count.value,
        title: title.value,
        date: date.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        category: category.value
    };

    // Check if count is greater than 1, and add multiple items
    if (newProduct.count > 1) {
        for (let i = 0; i < newProduct.count; i++) {
            products.push(newProduct);
        }
    } else {
        products.push(newProduct);
    }

    // Clear inputs after creating the product
    clearInputs();

    // Display the products in the table
    displayProducts();
}

// Function to clear input fields
function clearInputs() {
    title.value = '';
    count.value = '';
    date.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    category.value = '';
}

// Function to display products in the table
function displayProducts() {
    tbody.innerHTML = ''; // Clear the table body
    for (let i = 0; i < products.length; i++) {
        let row = `<tr>
                    <td>${i}</td>
                    <td>${products[i].count}</td>
                    <td>${products[i].date}</td>
                    <td>${products[i].title}</td>
                    <td>${products[i].price}</td>
                    <td>${products[i].taxes}</td>
                    <td>${products[i].ads}</td>
                    <td>${products[i].discount}</td>
                    <td>${products[i].total}</td>
                    <td>${products[i].category}</td>
                    <td><button onclick="deleteProduct(${i})">Delete</button></td>
                </tr>`;
        tbody.innerHTML += row;
    }
}

//delete
function deleteProduct(i){
    products.splice(i,1);
    newProduct.splice(i,1);
    
}