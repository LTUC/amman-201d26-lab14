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

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tbody.textContent='';
}
let tbody = document.getElementsByTagName("tbody");
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

 
  for (let i=0;i<this.items.length;i++){
    let dataRow=document.createElement('tr');
    tbody.appendChild(dataRow);
    let tdElement1=document.createElement('td');
    dataRow.appendChild(tdElement1);
    tdElement1.textContent='delete link';
    let tdElement2=document.createElement('td');
    dataRow.appendChild(tdElement2);
    tdElement2.textContent='quantity';
    let tdElement3=document.createElement('td');
    dataRow.appendChild(tdElement3);
    tdElement3.textContent='item';


  }
 

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  Cart.prototype.removeItem.call(this);
  //this.item.splice(indexOf(item),1);
  // TODO: Save the cart back to local storage
  loadCart();
  // TODO: Re-draw the cart table
  showCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
