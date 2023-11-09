# books_API
# The purpose of this API is to perform CRUD operations on a books collections in MongoDB
# This API consists following endpoints:
1. **/book/get**: 
   This method is to get Books from Books Collection in mongoDb Atlas.
   URL: localhost:8090/book/get
   method : GET
2. **/book/add**: 
   This method is to add a Book in Books Collection in mongoDb Atlas.
   URL: localhost:8090/book/add
   method : POST
   Request Body :
     {
     "title": "Book 1",
     "author": "Someone",
     "summary": "test summary"
     }
4. **/book/modify/:id**: 
   This method is to modify a Book in Books Collection in mongoDb Atlas.
   URL: localhost:8090/book/modify/:id
   method : POST
   request Body :
   {
     "title": "Book 1",
     "author": "Someone",
     "summary": "test summary"
   }
6. **/book/delete/:id**: 
   This method is to delete a Book in Books Collection in mongoDb Atlas.
   URL: localhost:8090/book/delete/:id
   method : DELETE


# How to setup Books_API in your local environment

1. Clone this repository,
2. Books collection has already been created in mongoDB Atlas using a test account, connection string is stored in .env file.
3. If user needs to connect to a new/different cluster, user need to change the connection string (CONN_STRING) in .env file.
4. After cloning the repository, to start app locally run the below commands.
   a. npm i
   b. nodemon app.js
6. To test the APIs import the collection available in the repository (Book API.postman_collection.json) in Postman.
   
