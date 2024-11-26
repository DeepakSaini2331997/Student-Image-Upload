#Add env file
#Description
Student Image Upload with Multer in Node.js
This project demonstrates two methods for handling student image uploads using Multer in a Node.js application. Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files.

Features
Store Image in Local Storage and Save Path in Database
In this method:

The uploaded image is saved to the local filesystem.
The file path is stored in the database for reference.
Store Image Directly in Database as Base64
In this method:

The uploaded image is converted to a Base64 string.
The Base64 string is saved directly in the database.
Both methods are implemented to provide a clear comparison of their usage and functionality
