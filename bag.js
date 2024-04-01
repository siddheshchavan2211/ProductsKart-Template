



function cartitemss() {
  const cartsection = document.querySelector(".carticons");
  cartsection.addEventListener("click", () => {
    
    let cartHTML =`<div class="cart">
    <div class="myorder">
        <div class="takeout">
            <h3 class="order">My Order</h3>
            <h5 class="tout">Take Out</h5>
        </div>
        <button class="cancel" onClick="toggleCartVisibility()">X</button>
    </div>
    <div class="item-add-remove">
    <ul class="cart-itemss">
  `;
      bagitemss.forEach(products => {
          cartHTML += generatehtml(products);
      });
       let subtotal=0;
       let tax=0.1;
        let finaltotal=0;
        
        bagitemss.forEach(products => {
          subtotal += products.price;
       
        });
      
         tax =subtotal+tax;
         finaltotal=subtotal+tax;
       cartHTML+=`</ul></div>
      
        
        <div class="priceview">
            <div class=price-distri-main >
                <div>
                    <div class=price-distri>
                        <p class="first-cell">Subtotal</p>
                        <p class="last-cell">${subtotal.toFixed(2)}</p>
                    </div>
                    <div class=price-distri>
                        <p class="first-cell">Tax (10%)</p>
                        <p class="last-cell2">${tax.toFixed(2)}</p>
                    </div>
                        <div colspan="2">
                            <div class="dash-line"></div>
                        </div>
                    </div>
                    <div class=price-distri>
                        <p class="first-cell">Total</p>
                        <p class="last-cell3">${finaltotal.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <button class="printbills">Print Bills</button>
        </div>
    `;
  
      cartsection.innerHTML =cartHTML;
  });
}

function loadcartitems() {
  bagitemss = addtocart.map(productID => {
      for (let i = 0; i < products.length; i++) {
          if (productID == products[i].id) {
              return products[i];
          }
      }
  });
  console.log(bagitemss);
}

function generatehtml(products) {
  let cartItemsHTML =`
      <li>
          <div class="cart-image-details">
              <div class="cart-image">
                  <img src="${products.image}" alt="" />
              </div>
              <div class="carmore">
                  <div class="carttitle">
                      <h3>${products.title}</h3>
                      <svg
                          class="choco"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                      >
                          <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                      </svg>
                  </div>
                  <div class="cartpriceviw">
                      <strong>$${products.price}</strong>
                      <div class="quantity">
                      <button class="remove" onclick="decrementCount()">-</button>
                        <span class="count">0</span>
                        <button class="add" onclick="incrementCount()">+</button>

                      </div>
                  </div>
              </div>
          </div>
      </li>
      
`;

return cartItemsHTML;
}
function generatehtml2(){
  
}
function toggleCartVisibility() {
    const cartItems = document.querySelector(".cart");
    cartItems.style.display = 'none';
  alert('0');
    
 }
let count = 0;
const countElement = document.querySelector('.count');

function incrementCount() {
    count++;
    countElement.textContent = count;
}

function decrementCount() {
    if (count > 0) {
        count--;
        countElement.textContent = count;
    }
}
