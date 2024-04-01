let addtocart=[];
let bagitemss=[];
let products;
const sliderBtn = document.querySelector(".slider");
const pagelays = document.querySelector(".mainpg");

document.addEventListener("DOMContentLoaded", function () {
  const asidecElement = document.querySelector("#asideid");
  const mainpgElement = document.querySelector(".mainpg");

  sliderBtn.addEventListener("click", function () {
    sliderBtn.textContent = sliderBtn.textContent === ">" ? "<" : ">";
    if (sliderBtn.textContent === ">") {
      asidecElement.style.marginLeft = "";
      mainpgElement.style.marginLeft = "";
    } else {
      asidecElement.style.marginLeft = "0px";
      mainpgElement.style.marginLeft = "220px";
      
    }
  });
});

const items = () => {
  const itemdata = document.querySelector(".item-cards");
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
       products=data;
      let allProductsHTML = "";
     
      products.forEach((product) => {
        // product=product;
        let productimage = product.image;
        let productprice = product.price;
        let producttitle = product.title.split("").slice(0, 15).join("");
        cartitemss(productimage, producttitle, productprice);

        allProductsHTML += ` <div class="item-card" onClick="additemsincart(${product.id})">
                                    <div class="items-api">
                                       
                                        <img src="${productimage}" alt="">
                                        </div>
                                        <div>
                                            <div class="item-api2">
                                                <strong>${producttitle}</strong>
                                                    <p class="price">$${productprice}</p>
                                         </div>   
                                    </div>
                                </div>`;
      });
      itemdata.innerHTML = allProductsHTML;
  loadcartitems();
    
    });
};
items();
function additemsincart(productID){
  addtocart.push(productID);
  cartitemcount();
  loadcartitems();
}
function cartitemcount(){
  let cartcount=document.querySelector('.number');
  cartcount.innerText=addtocart.length;
  
}