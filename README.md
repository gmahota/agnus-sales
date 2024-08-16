# Project Overview

This project is a web application built with a client-server architecture. The backend server is developed using Express.js, while the frontend client is powered by Next.js. The application manages various entities such as users, profiles, customers, companies, products, projects, documents, and orders, which are represented using Prisma models.

## Table of Contents

- Project Overview
- Installation
- Usage
- API Endpoints
- License

## Installation

1. **Clone the repository:**
   - git clone [https://github.com/gmahota/agnus-sales.git](https://github.com/gmahota/agnus-sales.git)

2. **Install dependencies:**
   - cd server
   - pnpm install

3. **Set up the database:**
   - Update the `.env` file with your database connection details and run the following command to migrate the database:
   - npx prisma migrate dev

4. **Start the development server:**
   - npm run dev

## Usage

Once the server is running, you can access the client-side application at `http://localhost:3000` and interact with the API at `http://localhost:5000/api`.

## API Endpoints

### User
- GET /api/users: Retrieve a list of all users.
- POST /api/users: Create a new user.

### Customer
- GET /api/customers: Retrieve a list of all customers.
- POST /api/customers: Create a new customer.

### Order
- GET /api/orders: Retrieve a list of all orders.
- POST /api/orders: Create a new order.

### Document
- GET /api/documents: Retrieve a list of all documents.
- POST /api/documents: Create a new document.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
