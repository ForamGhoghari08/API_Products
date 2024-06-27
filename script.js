
// API FETCH (ASYNC AWAIT)
const getData = async () => {

  let request = await fetch("https://fakestoreapi.com/products");

  let response = await request.json();

  const productList = document.getElementById("product-list");

// UI MAKER (MAP METHOD)

  response.map((product) => {
    const productDiv = document.createElement("div");

    productDiv.className = "product";

    productDiv.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}">
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
        `;

    productList.append(productDiv);
  });
};

// FUNCTION CALLING

getData();
