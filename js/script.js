// const product=[
//     {id: 1,name:"Rose Bouquet",price:499,image:"rose1.jpg"},
//     {id: 2,name:"Pink Rose Bouquet",price:299,image:"rose2.jpg"},
//     {id: 3,name:" White Rose Bouquet",price:699,image:"rose3.webp"},
//     {id: 4,name:" Wedding Rose Bouquet",price:599,image:"rose4.webp"},
// ];
// const productList=document.getElementById("product-list");
// let cart=JSON.parse(localStorage.getItem("cart")) || [];


// // productList.forEach(product =>{
// //     const col=document.createElement("div");
// //     col.className="col-md-4 mt-3";
// //     col.innerHTML=`
// //     <div class="card">
// //     <img src="${product.image}"class="card-img-top"height="400">
// //         <div class="card-body">
// //         <h5 class="card-title">${product.name}</h5>
// //         <p class="card-text">Rs${product.price}</p>
// //         <button class="btn btn-success"onclick="addToCart(${product.id})">Add to Cart</button>
// // </div>
// // </div>
// // `;
// // productList.appendChild(col);
// // });
// function addToCart(id){
//     const product=productList.firstElementChild(p=>p.id===id);
//     cart.push(product);
//     localStorage.setItem("cart",JSON.stringify(cart));
//     alert(`${product.name}added to cart`);
// }
const product = [
    { id: 1, name: " Exotic Red Roses Bouquet", price: 499, image: "rose1.jpg" },
    { id: 2, name: "Enternal red Roses Bouquet", price: 299, image: "rose2.jpg" },
    { id: 3, name: "Classic Red Roses Bouquet", price: 699, image: "rose3.webp" },
    { id: 4, name: " Fresh dohonest Roses Bouquet", price: 599, image: "rose4.webp" },
    { id: 5, name: "White Roses Bouquet", price: 799, image: "rose5.webp" },
    { id: 6, name: "Mini lavender Roses Bouquet", price: 699, image: "rose6.webp" },
];

const productList = document.getElementById("product-list");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

product.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-4 mt-3";
    col.innerHTML = `
        <div class="card">
            <img src="${product.image}" class="card-img-top" height="400">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Rs ${product.price}</p>
                <button class="btn btn-success" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
    productList.appendChild(col);
});

function addToCart(id) {
    const selectedProduct = product.find(p => p.id === id);
    cart.push(selectedProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${selectedProduct.name} added to cart`);
}
