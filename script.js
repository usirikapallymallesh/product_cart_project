const Products = [
  { id: 1, name: "Product-1", price: 100 },
  { id: 2, name: "Product-2", price: 200 },
  { id: 3, name: "Product-3", price: 300 },
];

let products = document.querySelector(".products");
let cartItemList = document.querySelector(".cart-container");
let totalPrice = document.querySelector(".price");
let para = document.querySelector(".item-not-added");

function changeQuantity(e, count) {
  e.target.parentNode.children[1].innerText = count;
  let productName = e.target.parentNode.parentNode.children[0].innerText;
  Products.forEach((prod) => {
    if (prod.name === productName) {
      prod.count = count;
    }
  });
  cartItemList.innerHTML = "";
  let total = 0;

  Products.forEach((ele) => {
    if (ele.count > 0) {
      let div = document.createElement("div");
      div.innerHTML = `
            <div >${ele.name}</div>
            <div class="price">
                <div>${ele.count}</div>
                <div>x</div>
                <div>${ele.price}</div>
            </div>`;
      div.classList.add("product");
      cartItemList.appendChild(div);

      total += ele.count * ele.price;
      totalPrice.innerHTML = `${total}`;
    }
  });
}

products.addEventListener("click", (e) => {
  let count = 0;

  if (e.target.innerText === "+") {
    para.style.display = "none";
    count = Number(e.target.parentNode.children[1].innerText);
    count++;
    changeQuantity(e, count);
  } else if (e.target.innerText === "-") {
    count = Number(e.target.parentNode.children[1].innerText); //intersting point
    if (count > 0) {
      count--;
      changeQuantity(e, count);
    } else {
      alert("you can't remove this item");
    }
  }
});

// to load total on screen
function showProducts() {
  Products.forEach((e) => {
    let div = document.createElement("div");
    div.innerHTML = `
                        <p>${e.name}</p>
                        <p>${e.price}</p>
                        <div class="product-button">
                           <button class="plus">+</button>
                           <p class="product-count">0</p>
                           <button class="minus">-</button>
                        </div>
                          `;
    div.classList.add("product");
    products.appendChild(div);
  });
}

window.onload = showProducts();
