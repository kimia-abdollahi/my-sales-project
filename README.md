# sales

# Product Management API

This project is a Product Management API that allows users to create, read, update, and delete product data. It also logs all actions performed on the products (such as creating, updating, or deleting) in a logging system for tracking purposes.

## Features

- Create new products
- View a list of products
- View details of a specific product
- Update product information
- Soft delete products
- Log actions for creating, updating, or deleting products


### User Management
- Register new users
- Log in users with secure JWT authentication
- View user profile
- Update user information
- Admin-only access to delete users


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

## Product Management
1. Create a New Product
   - **Method**: POST
   - **Endpoint**: /api/products/
   - **Headers**:
     ```json
     {
       "Content-Type": "application/json"
     }
     ```
   - **Request Body**:
     ```json
     {
       "name": "test Product",
       "price": 100,
       "category": "category-id",
       "createdBy": "test user"
     }
     ```
   - **Response**: Returns the newly created product's details.

2. Soft Delete a Product
   - **Method**: DELETE
   - **Endpoint**: /api/products/:id
   - **Response**: A confirmation message indicating the product was soft deleted.

3. Get All Products
   - **Method**: GET
   - **Endpoint**: /api/products/
   - **Response**: Returns a list of all products.

4. Get a Single Product
   - **Method**: GET
   - **Endpoint**: /api/products/:id
   - **Response**: Returns details of the product with the given ID.

5. Update Product Information
   - **Method**: PUT
   - **Endpoint**: /api/products/:id
   - **Request Body**:
     ```json
     {
       "name": "updated test Product",
       "price": 200,
       "category": "category-id",
       "createdBy": "test user"
     }
     ```
   - **Response**: Returns the updated product details.

## User Management

1. Register a New User
   - **Method**: POST
   - **Endpoint**: /api/users/register
   - **Request Body**:
     ```json
     {
       "name": "Test User",
       "email": "test@example.com",
       "password": "password123"
     }
     ```
   - **Response**: Confirmation message for successful registration.

2. Log in a User
   - **Method**: POST
   - **Endpoint**: /api/users/login
   - **Request Body**:
     ```json
     {
       "email": "test@example.com",
       "password": "password123"
     }
     ```
   - **Response**: Returns a JWT token for authentication.

3. View User Profile
   - **Method**: GET
   - **Endpoint**: /api/users/profile
   - **Headers**: Authorization: Bearer <token>
   - **Response**: Returns the authenticated user's profile.

4. Update User Information
   - **Method**: PUT
   - **Endpoint**: /api/users/update
   - **Headers**: Authorization: Bearer <token>
   - **Request Body**:
     ```json
     {
       "name": "Updated Name",
       "email": "updated@example.com"
     }
     ```
   - **Response**: Returns the updated user details.

5. Admin: Delete a User
   - **Method**: DELETE
   - **Endpoint**: /api/users/:id
   - **Headers**: Authorization: Bearer <admin-token>
   - **Response**: Confirmation message for successful deletion.

## Category Management

1. Create a New Category
   - **Method**: POST
   - **Endpoint**: /api/categories/
   - **Request Body**:
     ```json
     {
       "name": "New Category",
       "description": "Category description",
       "parentId": "parent-category-id"
     }
     ```
   - **Response**: Returns the newly created category's details.

2. Get All Categories
   - **Method**: GET
   - **Endpoint**: /api/categories/
   - **Response**: Returns a list of all categories.

3. Get a Single Category
   - **Method**: GET
   - **Endpoint**: /api/categories/:id
   - **Response**: Returns details of the category with the given ID.

4. Update Category Information
   - **Method**: PUT
   - **Endpoint**: /api/categories/:id
   - **Request Body**:
     ```json
     {
       "name": "Updated Category",
       "description": "Updated description"
     }
     ```
   - **Response**: Returns the updated category details.

5. Delete a Category
   - **Method**: DELETE
   - **Endpoint**: /api/categories/:id
   - **Response**: A confirmation message indicating the category was deleted.

## Action Management

1. Create a New Action
   - **Method**: POST
   - **Endpoint**: /api/actions/create
   - **Headers**: Authorization: Bearer <admin-token>
   - **Request Body**:
     ```json
     {
       "name": "New Action",
       "description": "Action description"
     }
     ```
   - **Response**: Returns the newly created action's details.

2. Get All Actions
   - **Method**: GET
   - **Endpoint**: /api/actions/
   - **Headers**: Authorization: Bearer <token>
   - **Response**: Returns a list of all actions.

## Privilege Management

1. Create a New Privilege
   - **Method**: POST
   - **Endpoint**: /api/privileges/create
   - **Headers**: Authorization: Bearer <admin-token>
   - **Request Body**:
     ```json
     {
       "name": "New Privilege",
       "actions": ["action-id-1", "action-id-2"]
     }
     ```
   - **Response**: Returns the newly created privilege's details.

2. Get All Privileges
   - **Method**: GET
   - **Endpoint**: /api/privileges/
   - **Headers**: Authorization: Bearer <token>
   - **Response**: Returns a list of all privileges.

## Order Management

1. Create a New Order
   - **Method**: POST
   - **Endpoint**: /api/orders/create
   - **Headers**: Authorization: Bearer <token>
   - **Request Body**:
     ```json
     {
       "items": ["item1", "item2"],
       "address": "123 Test Street"
     }
     ```
   - **Response**: Returns the newly created order's details.

2. Get All Orders
   - **Method**: GET
   - **Endpoint**: /api/orders/
   - **Headers**: Authorization: Bearer <token>
   - **Response**: Returns a list of orders for the authenticated user.

## Business Management

1. Create a New Business
   - **Method**: POST
   - **Endpoint**: /api/businesses/
   - **Headers**:
     ```json
     {
       "Content-Type": "application/json",
       "Authorization": "Bearer <your_token>"
     }
     ```
   - **Request Body**:
     ```json
     {
       "name": "Test Business",
       "description": "This is a test business"
     }
     ```
   - **Response**: Returns the newly created business's details.

2. Get All Businesses
   - **Method**: GET
   - **Endpoint**: /api/businesses/
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <your_token>"
     }
     ```
   - **Response**: Returns a list of all businesses.

3. Update Business Information
   - **Method**: PUT
   - **Endpoint**: /api/businesses/:id
   - **Headers**:
     ```json
     {
       "Content-Type": "application/json",
       "Authorization": "Bearer <your_token>"
     }
     ```
   - **Request Body**:
     ```json
     {
       "name": "Updated Business",
       "description": "Updated description"
     }
     ```
   - **Response**: Returns the updated business details.

4. Delete a Business
   - **Method**: DELETE
   - **Endpoint**: /api/businesses/:id
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <your_token>"
     }
     ```
   - **Response**: A confirmation message indicating the business was deleted.

## Customer Management

1. Create a New Customer
   - **Method**: POST
   - **Endpoint**: /api/customers/
   - **Headers**:
     ```json
     {
       "Content-Type": "application/json",
       "Authorization": "Bearer <your_token>"
     }
     ```
   - **Request Body**:
     ```json
     {
       "name": "Test Customer",
       "email": "customer@example.com",
       "phone": "1234567890",
       "address": "123 Test Street"
     }
     ```
   - **Response**: Returns the newly created customer's details.

2. Get All Customers
   - **Method**: GET
   - **Endpoint**: /api/customers/
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <your_token>"
     }
     ```
   - **Response**: Returns a list of all customers.

3. Update Customer Information
   - **Method**: PUT
   - **Endpoint**: /api/customers/:id
   - **Headers**:
     ```json
     {
       "Content-Type": "application/json",
       "Authorization": "Bearer <your_token>"
     }
     ```
   - **Request Body**:
     ```json
     {
       "name": "Updated Customer",
       "email": "updated@example.com",
       "phone": "0987654321",
       "address": "456 Updated Street"
     }
     ```
   - **Response**: Returns the updated customer details.

4. Delete a Customer
   - **Method**: DELETE
   - **Endpoint**: /api/customers/:id
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <your_token>"
     }
     ```
   - **Response**: A confirmation message indicating the customer was deleted.


/node_modules       # Installed dependencies
/models             # Database models (e.g., productModel.js and logModel.js)
/controllers        # API controllers
/routes             # API routes
/middlewares        # Custom middleware (e.g., authMiddleware.js)
/app.js             # Server entry point
/.gitignore         # Files to be ignored by git
README.md           # Project documentation



