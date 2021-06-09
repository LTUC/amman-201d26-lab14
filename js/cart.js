/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;


function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  //console.log(cart)
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)

function clearCart() {
  // let tr = document.getElementsByTagName('tbody');
  // tr.deleteRow();
  

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  //let parent=document.getElementById('cart')
  for (let j = 0; j < 20; j++) {
  
  let rowTableBody=document.createElement('tr')
  table.appendChild(rowTableBody);
  let tdElement1=document.createElement('td')
  rowTableBody.appendChild(tdElement1);
  tdElement1.textContent= `X`
  let tdElement2=document.createElement('td')
  rowTableBody.appendChild(tdElement2);
  tdElement2.textContent= cart.items[j].product;
  let tdElement3=document.createElement('td')
  rowTableBody.appendChild(tdElement3);
  tdElement3.textContent= cart.items[j].quantity;
  }


}

  
 
 

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR



function removeItemFromCart(event) {

  if (event.target.textContent='X')
  //   {cart.removeItem()
  //   }
  {cart.removeItem(event.target.name);
    console.log(event.target.name)
  }
  //localStorage.setItem('cart',JSON.stringify(cart.items));

   //renderCart();
}





  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table


  
  





// This will initialize the page and draw the cart on screen
renderCart();
