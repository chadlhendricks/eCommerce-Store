let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        title: "Shuriken",
        category: "Throwables",
        price: 9.99,
        img: "https://m.media-amazon.com/images/I/41dNlkmH7oL.jpg",
      },
      {
        title: "Demon Wind Shuriken",
        category: "Throwables",
        price: 9.99,
        img: "data:image/jpeg;base64,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",
      },
      {
        title: "Kunai",
        category: "Melee",
        price: 9.99,
        img: "https://m.media-amazon.com/images/I/513BuqQyKzL.jpghttps://i.postimg.cc/Vv9CzTNk/peach.jpg",
      },
      {
        title: "Explosive Kunai",
        category: "Bombs",
        price: 9.99,
        img: "https://i.pinimg.com/originals/48/c6/fd/48c6fd541a87a03bef8aabd3b84d536e.jpg",
      },
      {
        title: "Katana",
        category: "Melee",
        price: 9.99,
        img: "https://m.media-amazon.com/images/I/71mPvJJOQiL.jpghttps://i.postimg.cc/43TbRzPP/Kiwi-Fruit.jpg",
      },
      {
        title: "Smoke Bombs",
        category: "Bombs",
        price: 9.99,
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd34dnw-7e59970e-f26a-4223-a774-d13ad09615f1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGQzNGRudy03ZTU5OTcwZS1mMjZhLTQyMjMtYTc3NC1kMTNhZDA5NjE1ZjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.uET_RSEx2m4wcXZ6Z9s9CnVyz_lDr8XQI1ueCylLYCc",
      },
      
    ];

let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// READ
function readProducts(products) {
  document.querySelector("#products").innerHTML = "";
  products.forEach((product, position) => {
    document.querySelector("#products").innerHTML += `
      <div class="card">
        <img src="${product.img}" class="card-img-top" alt="${product.title}">
        <div class="card-body" style="background-color: transparent;">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">R${product.price}</p>
          <div class="d-flex mb-3">
            <input type="number" class="form-control" value=1 min=1 id="addToCart${position}">
            <button type="button" class="btn btn-secondary ms-3" onclick="addToCart(${position})"><i class="fas fa-cart-plus"></i></button>
          </div>
          
          
          
          </div>
          <div class="d-flex justify-content-end card-footer">
            <button type="button" class="btn btn-primary w-50" data-bs-toggle="modal" data-bs-target="#editProduct${position}" >
              Edit
            </button>
            <button type="button" class="btn btn-danger w-50 ms-3" onclick="deleteProduct(${position})" >
              Delete
            </button>
          </div>
      </div>






      <div
                class="modal fade"
                id="editProduct${position}"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Edit ${product.title}
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="editTitle${position}" class="form-label">Title</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editTitle${position}"
                          id="editTitle${position}"
                          value="${product.title}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editCategory${position}" class="form-label">Category</label>
                        <select
                          class="form-select"
                          name="editCategory${position}"
                          id="editCategory${position}"
                        >
                          <option value="Melee">Melee</option>
                          <option value="Throwables">Throwables</option>
                          <option value="Bombs">Bombs</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="editPrice${position}" class="form-label">Price</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editPrice${position}"
                          id="editPrice${position}"
                          value="${product.price}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editImg${position}" class="form-label">Image URL</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editImg${position}"
                          id="editImg${position}"
                          value="${product.img}"
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        onclick="updateProduct(${position})"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
    `;
  });
}

readProducts(products);
showCartBadge();

// CREATE
function createProduct() {
  let title = document.querySelector("#addTitle").value;
  let category = document.querySelector("#addCategory").value;
  let price = document.querySelector("#addPrice").value;
  let img = document.querySelector("#addImg").value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products.push({
      title,
      category,
      price,
      img,
    });
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

// UPDATE
function updateProduct(position) {
  let title = document.querySelector(`#editTitle${position}`).value;
  let category = document.querySelector(`#editCategory${position}`).value;
  let price = document.querySelector(`#editPrice${position}`).value;
  let img = document.querySelector(`#editImg${position}`).value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products[position] = {
      title,
      category,
      price,
      img,
    };
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

// DELETE
function deleteProduct(position) {
  let confirmation = confirm(
    "Are you sure you want to delete the selected product?"
  );

  if (confirmation) {
    products.splice(position, 1);
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  }
}

// ADD TO CART
function addToCart(position) {
  let qty = document.querySelector(`#addToCart${position}`).value;
  let added = false;
  cart.forEach((product) => {
    if (product.title == products[position].title) {
      alert(
        `You have successfully added ${qty} ${products[position].title} to the cart`
      );
      product.qty = parseInt(product.qty) + parseInt(qty);
      added = true;
    }
  });
  if (!added) {
    cart.push({ ...products[position], qty });
    alert(
      `You have successfully added ${qty} ${products[position].title} to the cart`
    );
  }

  showCartBadge();

  localStorage.setItem("cart", JSON.stringify(cart));
}

// Update Cart Badge
function showCartBadge() {
  document.querySelector("#badge").innerHTML = cart ? cart.length : "";
}

// SORT BY CATEGORY
function sortCategory() {
  let category = document.querySelector("#sortCategory").value;

  if (category == "All") {
    return readProducts(products);
  }

  let foundProducts = products.filter((product) => {
    return product.category == category;
  });

  readProducts(foundProducts);
  console.log(foundProducts);
}

// SORT BY NAME

function sortName() {
  let direction = document.querySelector("#sortName").value;

  let sortedProducts = products.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction == "descending") sortedProducts.reverse();
  console.log(sortedProducts);
  readProducts(products);
}

// SORT BY PRICE

function sortPrice() {
  let direction = document.querySelector("#sortPrice").value;

  let sortedProducts = products.sort((a, b) => a.price - b.price);

  console.log(sortedProducts);

  if (direction == "descending") sortedProducts.reverse();
  readProducts(sortedProducts);
}
