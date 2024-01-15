const Products = [
    {id: 1, name: 'Product-1', price:100},
    {id: 2, name: 'Product-2', price:200},
    {id: 3, name: 'Product-3', price:300},
    ];
let products=document.querySelector(".products");
Products.forEach((e)=>{
    let id=e.id;
    let productName=e.name;
    let productPrice=e.price;
    console.log(id,productName,productPrice);
    let div=document.createElement("div");
    div.innerHTML=`
                  <p>${productName}</p>
                  <p>${productPrice}</p>
                  <div class="product-button">
                     <button class="plus">+</button>
                     <p class="product-count">0</p>
                     <button class="minus">-</button>
                  </div>
                    `
    div.classList.add("product");

    products.appendChild(div);
    let positiveValue=document.querySelectorAll("plus");
    console.log(positiveValue);
  
})
let noOfProduct=document.getElementsByClassName("product-count");
let count=Number.parseInt(noOfProduct);
let positiveValue=document.querySelectorAll("plus");
let negativeValue=document.querySelectorAll("minus");

positiveValue.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        if(count>=0){
            count++;
        }
    });

})
negativeValue.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        console.log("e");
        if(count>=0){
            count--;
        }
        else{
            alert("Enter the values above 0 !!!");
        }
    });

})

