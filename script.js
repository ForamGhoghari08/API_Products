// API FETCH (ASYNC AWAIT)

  const getData = async () => {

  let request = await fetch("https://fakestoreapi.com/products");

  let response = await request.json();

  const productList = document.getElementById("product-list");

  // UI MAKER (MAP METHOD)

  response.map((product) => {

    const productDiv = document.createElement("div");
    
    productDiv.className = "col";

    productDiv.innerHTML = `
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">Price: $${product.price}</p>
          <p class="card-text">${product.description}</p>
        </div>
      </div>
    `;

    productList.append(productDiv);
  });
};

// FUNCTION CALLING
getData();
