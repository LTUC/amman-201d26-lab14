
/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}
let remove =document.getElementById('cart')
// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  
  // table=remove('tr');

  remove.innerHTML='';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart





  // TODO: Find the table body
  

  // TODO: Iterate over the items in the cart

  // TODO: Create a TR


  
  let tbody = document.createElement('tbody');
  table.appendChild(tbody);
 
  function showCart() {
  
    for (let i=0;i<Product.allProducts.length;i++){
      let row=document.createElement('tr');
      tbody.appendChild(row);
      let elementTd1=document.createElement('td');
      row.appendChild(elementTd1);
      elementTd1.textContent='delete link';
      let elementTd2=document.createElement('td');
      row.appendChild(elementTd2);
      elementTd2.textContent=cart.items[i].quantity;
      let elementTd3 =document.createElement('td');
      row.appendChild(elementTd3);
      elementTd3.textContent=cart.items[i].product;
      // console.log(cart.items[i].quantity);
      
    }
 




  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}
//




function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

  cart.removeItem(event.target.id);
  cart.saveToLocalStorage();
  event.stopPropagation();
  clearCart();
  showCart();
  

}

// This will initialize the page and draw the cart on screen
renderCart();





