# React 10 Payment Cycles Backend
Welcome to the backend repository for React 10 Payment Cycles! This project is responsible for managing and operating payment cycles in a web application. It provides a robust API for creating, reading, updating, and deleting payment cycles, as well as user authentication and server configuration.

# Features
Server and Database Configuration

Server setup with Express.
MongoDB connection using Mongoose.
Routes and Authentication

Routes protected by JWT authentication.
Open routes for login, signup, and token validation.
Payment Cycle Services

CRUD operations for payment cycles.
Payment cycles count.
Summary aggregating credits and debts.

# Project Structure
src/loader.js: Initializes the server, configures the database, and sets up routes.
src/config/database.js: Configures the MongoDB connection.
src/config/routes.js: Defines protected and open routes.
src/api/billingCycle/billingCycleService.js: Defines CRUD operations and aggregations for payment cycles.

# Technologies Used
JavaScript: Main language of the project.
Node.js: JavaScript runtime for server-side programming.
Express: Framework for building the server and managing routes.
Mongoose: Library for MongoDB object modeling.
JWT: Secure authentication with JSON Web Tokens.

# How to Run the Project
Clone the repository:

git clone https://github.com/giovanne-aquino/react-10-payment-cycles-backend.git
Install dependencies:

cd react-10-payment-cycles-backend
npm install
Configure MongoDB and start the server:

npm start
Access the API at http://localhost:3000/api and open routes at http://localhost:3000/oapi.
