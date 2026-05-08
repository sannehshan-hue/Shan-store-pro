const products = [
  {
    name:"Gaming Laptop",
    price:95000,
    image:"https://via.placeholder.com/250"
  },
  {
    name:"Smartphone",
    price:35000,
    image:"https://via.placeholder.com/250"
  },
  {
    name:"Headphones",
    price:5000,
    image:"https://via.placeholder.com/250"
  }
];

let cart = [];

const box = document.getElementById("products");

products.forEach(p=>{
  box.innerHTML += `
    <div class="card">
      <img src="${p.image}" width="100%">
      <h3>${p.name}</h3>
      <p>KES ${p.price}</p>
      <button onclick='addToCart("${p.name}",${p.price})'>Add To Cart</button>
    </div>
  `;
});

function addToCart(name,price){
  cart.push({name,price});
  alert(name + " added to cart");
}

function openCart(){
  alert("Cart items: " + cart.length);
}