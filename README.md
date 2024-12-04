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
    The API should now be accessible at http://localhost:5000


API Usage
1. Create a New Product
Method: POST

Endpoint: /api/products/

Request Body:
{
  "name": "test Product",
  "price": 100,
  "category": "64b87e0feecf5e3a6c73b123",
  "createdBy": "User123"
}
Response: Returns the newly created product's details.

2. Soft Delete a Product
Method: DELETE
Endpoint: /api/products/:id
Response: A confirmation message indicating the product was soft deleted.
3. Get All Products
Method: GET
Endpoint: /api/products/
Response: Returns a list of all products.
4. Get a Single Product
Method: GET
Endpoint: /api/products/:id
Response: Returns details of the product with the given ID.
5. Update Product Information
Method: PUT

Endpoint: /api/products/:id

Request Body:
{
  "name": "updated test Product",
  "price": 200,
  "category": "64b87e0feecf5e3a6c73b123",
  "createdBy": "User123"
}

Response: Returns the updated product details.


/node_modules       # Installed dependencies
/models             # Database models (e.g., productModel.js and logModel.js)
/controllers        # API controllers
/routes             # API routes
/server.js          # Server entry point
/.gitignore         # Files to be ignored by git
README.md           # Project documentation



