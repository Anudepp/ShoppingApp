# Shopping App

Welcome to the Shopping App! This project is a simple web application to simulate a shopping experience. Users can view items, add them to their bag, and view a summary of their bag contents.

## Project Structure

The project consists of the following files and directories:

### 1. HTML Files

- **`index.html`**: The main HTML file for the home page.
- **`bag.html`**: The HTML file for the shopping bag page.

### 2. CSS Files

- **`css/index.css`**: Contains styles for the home page.
- **`css/bag.css`**: Contains styles for the shopping bag page.

### 3. JavaScript Files

- **`data/items.js`**: Contains a list of items available for purchase.
- **`scripts/index.js`**: JavaScript for the home page.
- **`scripts/bag.js`**: JavaScript for the shopping bag page.

## Getting Started

To get this project up and running on your local machine, follow these steps:

1. **Clone the Repository:**
# Project Overview

## Opening the Project in Your Browser

- Open `index.html` or `bag.html` in your web browser to view the home page or shopping bag page.

## Functionality

### Home Page

- **Display Items**: Items are dynamically loaded from `data/items.js` and displayed on the home page.

### Shopping Bag Page

- **View Bag Items**: Displays items added to the shopping bag.
- **View Bag Summary**: Shows the total price, discounts, and convenience fees.
- **Add/Remove Items**: Users can add items to the bag from the home page and remove items from the shopping bag page.

## Code Overview

### HTML

- `index.html`: Includes links to CSS files for styling and scripts for functionality. It also defines the structure of the home page.
- `bag.html`: Similar structure to `index.html`, but for the shopping bag page.

### CSS

- `index.css`: Contains styles for the home page, including layout and design elements.
- `bag.css`: Styles for the shopping bag page, focusing on the layout and details of the bag summary and items.

### JavaScript

- `items.js`: Defines an array of item objects with properties such as `id`, `image`, `company`, `item_name`, `original_price`, `current_price`, and methods to calculate discounts and delivery dates.
- `index.js`: Handles the display of items on the home page and manages the addition of items to the shopping bag.
- `bag.js`: Manages the display of items in the shopping bag, calculates the bag summary, and handles item removal.

## Contributing

If you’d like to contribute to this project, please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project’s coding standards and passes all tests.
