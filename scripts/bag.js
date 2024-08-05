// Define a constant for the convenience fees applied to the total payment
const CONVENIENCE_FEES = 5;

// Array to store the objects of items in the bag, which will be filled from local storage or another source
let bagItemObjects;

// The onLoad function is called when the script is loaded
// It initializes the state by loading bag items and displaying the relevant UI elements
onLoad();

function onLoad() {
  // Load the detailed information of items in the bag
  loadBagItemObjects();
  // Display the items in the bag on the page
  displayBagItems();
  // Display the summary of the bag, including total cost, discounts, etc.
  displayBagSummary();
}

// Function to calculate and display the summary of the bag's contents
function displayBagSummary() {
  // Select the HTML element where the summary will be displayed
  let bagSummaryElement = document.querySelector('.bag-summary');
  
  // Calculate the total number of items in the bag
  let totalItem = bagItemObjects.length;
  
  // Initialize variables to hold the total MRP (maximum retail price) and total discount
  let totalMRP = 0;
  let totalDiscount = 0;

  // Iterate through each item in the bag to calculate total MRP and total discount
  bagItemObjects.forEach(bagItem => {
    // Add the item's original price to the total MRP
    totalMRP += bagItem.original_price;
    // Calculate the discount for this item and add it to the total discount
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  // Calculate the final amount to be paid, including convenience fees
  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  // Set the inner HTML of the bag summary element to display the calculated values
  bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
      <!-- Display the total number of items in the bag -->
      <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
      
      <!-- Display the total MRP -->
      <div class="price-item">
        <span class="price-item-tag">Total MRP</span>
        <span class="price-item-value">₹${totalMRP}</span>
      </div>
      
      <!-- Display the total discount -->
      <div class="price-item">
        <span class="price-item-tag">Discount on MRP</span>
        <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
      </div>
      
      <!-- Display the convenience fee -->
      <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">₹${CONVENIENCE_FEES}</span>
      </div>
      
      <hr>
      
      <!-- Display the final total amount to be paid -->
      <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">₹${finalPayment}</span>
      </div>
    </div>
    <!-- Button to place the order -->
    <button class="btn-place-order">
      <div class="css-xjhrni">PLACE ORDER</div>
    </button>
  `;
}

// Function to load the objects of items in the bag from stored item IDs
function loadBagItemObjects() {
  // Log the current bag items (item IDs) for debugging
  console.log(bagItems);
  
  // Map the stored item IDs to their corresponding objects from the items array
  bagItemObjects = bagItems.map(itemId => {
    // Iterate through the items array to find the item with the matching ID
    for (let i = 0; i < items.length; i++) {
      // If the current item's ID matches the itemId, return the item object
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  
  // Log the loaded bag item objects for debugging
  console.log(bagItemObjects);
}

// Function to display the items in the bag on the page
function displayBagItems() {
  // Select the container element where the bag items will be displayed
  let containerElement = document.querySelector('.bag-items-container');
  
  // Initialize a variable to store the HTML content for all bag items
  let innerHTML = '';
  
  // Generate HTML for each item in the bag and add it to the innerHTML variable
  bagItemObjects.forEach(bagItem => {
    innerHTML += generateItemHTML(bagItem);
  });
  
  // Set the innerHTML of the container element to display the bag items
  containerElement.innerHTML = innerHTML;
}

// Function to remove an item from the bag by its ID
function removeFromBag(itemId) {
  // Filter out the item with the specified ID from the bag items array
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
  
  // Update the stored bag items in local storage with the new bag items array
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  
  // Reload the bag item objects to reflect the changes
  loadBagItemObjects();
  
  // Update the UI to reflect the changes in the bag items
  displayBagIcon();
  displayBagItems();
  displayBagSummary();
}

// Function to generate HTML for a single bag item
function generateItemHTML(item) {
  return `
    <div class="bag-item-container">
      <div class="item-left-part">
        <!-- Display the image of the item -->
        <img class="bag-item-img" src="../${item.image}" alt="${item.item_name}">
      </div>
      <div class="item-right-part">
        <!-- Display the company name of the item -->
        <div class="company">${item.company}</div>
        <!-- Display the name of the item -->
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
          <!-- Display the current price of the item -->
          <span class="current-price">$ ${item.current_price}</span>
          <!-- Display the original price of the item -->
          <span class="original-price">$ ${item.original_price}</span>
          <!-- Display the discount percentage -->
          <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
        </div>
        <div class="return-period">
          <!-- Display the return period of the item -->
          <span class="return-period-days">${item.return_period} days</span> return available
        </div>
        <div class="delivery-details">
          <!-- Display the estimated delivery date of the item -->
          Delivery by <span class="delivery-details-days">${item.delivery_date}</span>
        </div>
      </div>
      <!-- Button to remove the item from the bag -->
      <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
    </div>`;
}