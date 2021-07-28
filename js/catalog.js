/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  let selectElement = document.getElementById('items');

  //TODO: Add an <option> tag inside the form's select for each product



  for (let i = 0; i < Product.allProducts.length; i++) {
    let option1 = document.createElement('option');
    option1.setAttribute("value", Product.allProducts[i].name);
    let option2 = document.createTextNode(Product.allProducts[i].name);
    option1.appendChild(option2);
    selectElement.appendChild(option1)

  let select1 = document.getElementById('items');


  for (let i = 0; i < Product.allProducts.length; i++) {
    let option1 = document.createElement('option');
    option1.value = Product.allProducts[i].name
    option1.textContent = Product.allProducts[i].name
    select1.appendchild(option1);

  }






}

//TODO: Add an <option> tag inside the form's select for each product

}

//TODO: Add an <option> tag inside the form's select for each product
const selectElement = document.getElementById('items');
for (let i in Product.allProducts) {

}


// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
 event.addEventListener('submit',submit)
  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();


}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {

  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart



  // let e = document.getElementById("catalog");
  // e = event.target.quantity.value;




  // let cartItems = localStorage.getItem('items');

  // cartItems.push(newItem);

  // localStorage.setItem('items', Items);
  // let cartItems = localStorage.getItem('items');

  

  cart.addItem(event.target.items.value,event.target.quantity.value);


  console.log(event.target.items.value,event.target.quantity.value);

}

// TODO: Update the cart count in the header nav with the number of items in the Cart

function updateCounter() {
  document.getElementById('itemCount').textContent = cart.items.length ;
  console.log(cart.items.length);



}

function updateCounter() { }


// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  let cartContent = document.getElementById('cartContents');
  let pEl = document.createElement('p');
  pEl.textContent = `  ${event.target.quantity.value}  of ${event.target.items.value}`;
  cartContent.appendChild(pEl);
  console.log(event.target.quantity.value);


}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.

populateForm();
