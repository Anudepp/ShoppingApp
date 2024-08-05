// Declare a variable to store items added to the bag
let bagItems;

// Function that runs when the page is loaded
onLoad();

function onLoad() {
  // Retrieve bag items from local storage and parse them, or initialize as an empty array
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  
  // Display items on the home page
  displayItemsOnHomePage();
  
  // Update the bag icon to reflect the number of items in the bag
  displayBagIcon();
}

// Function to add an item to the bag
function addToBag(itemId) {
  // Add the item ID to the bagItems array
  bagItems.push(itemId);
  
  // Save the updated bag items back to local storage
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  
  // Update the bag icon
  displayBagIcon();
}

// Function to update the bag icon based on the number of items in the bag
function displayBagIcon() {
  // Get the element that displays the number of items in the bag
  let bagItemCountElement = document.querySelector('.bag-item-count');
  
  // If there are items in the bag, display the count; otherwise, hide the count
  if (bagItems.length > 0) {
    console.log('I am here');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

// Function to display all available items on the home page
function displayItemsOnHomePage() {
  // Get the container element where items will be displayed
  let itemsContainerElement = document.querySelector('.items-container');
  
  // If the container element does not exist, exit the function
  if (!itemsContainerElement) {
    return;
  }
  
  // Initialize a variable to store the HTML content for all items
  let innerHtml = '';
  
  // Loop through each item and create HTML content for it
  items.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">$ ${item.current_price}</span>
          <span class="original-price">$ ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`;
  });
  
  // Set the innerHTML of the container element to the generated HTML content
  itemsContainerElement.innerHTML = innerHtml;
}