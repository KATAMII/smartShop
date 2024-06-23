# SMART-SHOP PRODUCTS API
## Overview
This project is a RESTful API built using Express.js and PostgreSQL to manage a collection of products. The API allows clients to perform CRUD (Create, Read, Update, Delete) operations on the products stored in a PostgreSQL database.

Provided Data
The PostgreSQL table named products contains the following fields:

productThumbnail: URL of the product's thumbnail image.
productTitle: Title of the product.
productDescription: Description of the product.
productCost: Cost of the product.
onOffer: A boolean indicating whether the product is on offer or not (true means the product is on offer and false means the product is not on offer).

## Instructions
Setting up the Project
- Initialize a new Node.js project
  ```` npm init -y ````


- Install the necessary dependencies

bash 

````npm install express pg dotenv````  

- If you want to use nodemon for automatically restarting the server during development:

bash

`````npm install nodemon`````

## Set up PostgreSQL
Ensure PostgreSQL is installed and running on your machine.

1. Create a new database for this project
2. Implement the Endpoints
```index.js``` ```db.config.js``` ```routes```

## Running the Project
#### Start the PostgreSQL server (ensure it's running).

Run the ```index.js```

```npm run start:watch```

#### Use an API client (like Insomnia or Postman) to interact with the API endpoints:

- Get all products: GET http://localhost:3000/products
- Get a single product by title: GET http://localhost:3000/products/{producttitle}
Create a new product: POST http://localhost:3000/products
- Update a product by title: PATCH http://localhost:3000/products/{producttitle}
- Delete a product by title: DELETE http://localhost:3000/products/{producttitle}   


#### Example Requests
1.Create a Product  
````POST http://localhost:3000/products````

