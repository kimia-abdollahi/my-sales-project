# sales

# Product Management API

This project is a Product Management API that allows users to create, read, update, and delete product data. It also logs all actions performed on the products (such as creating, updating, or deleting) in a logging system for tracking purposes.

## Features

- Create new products
- View a list of products
- Update product information
- Soft delete products
- Log actions for creating, updating, or deleting products

## Installation and Setup

1. Clone the repository:

   git clone https://github.com/myladima/sales.git

2. Navigate to the project directory:
    cd your-repository

3. Install the required dependencies:
    npm install

4. Set up environment variables (e.g., MONGO_URI for connecting to the database).

5. Start the server:
    npm start
    The API should now be accessible at http://localhost:5000.


API Usage
1. Create a New Product
Method: POST

Endpoint: /api/product/

Request Body:
    {
  "name": "Laptop",
  "description": "High-end gaming laptop",
  "price": 1500,
  "category": "605c72ef153207001f83f8f",  // Category ID
  "attributes": [
    { "key": "RAM", "value": "16GB" },
    { "key": "CPU", "value": "Intel i7" }
  ],
  "images": ["image1.jpg", "image2.jpg"],
  "createdBy": "Kimia"
}

Response: Returns the newly created product's details.


2. Soft Delete a Product
Method: DELETE
Endpoint: /api/product/:id
Response: A confirmation message indicating the product was soft deleted.
3. Get All Products
Method: GET
Endpoint: /api/product/
Response: Returns a list of all products.
4. Get a Single Product
Method: GET
Endpoint: /api/product/:id
Response: Returns details of the product with the given ID.
5. Update Product Information
Method: PUT

Endpoint: /api/product/:id

Request Body:
    {
    "name": "Updated Laptop",
    "description": "Updated high-end gaming laptop",
    "price": 1600,
    "attributes": [
        { "key": "RAM", "value": "32GB" },
        { "key": "CPU", "value": "Intel i9" }
    ]
    }

Response: Returns the updated product details.


/node_modules       # Installed dependencies
/models             # Database models (e.g., productModel.js and logModel.js)
/controllers        # API controllers
/routes             # API routes
/server.js          # Server entry point
/.gitignore         # Files to be ignored by git
README.md           # Project documentation



