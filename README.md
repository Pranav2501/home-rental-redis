# Home Rental Management System

The **Home Rental Management System** is a Node.js application that helps property owners efficiently manage their rental properties and tenants. This web-based application offers functionality to track property listings, tenant applications, lease agreements, maintenance requests, and tenant referrals. It leverages **Redis Stack Server** for high-speed data operations, ensuring optimal performance for key features.

The application is built using **Express** for server-side logic and **EJS** templates for the front-end interface.

## Features
- **Tenant Referrals**: Track and manage referrals where current tenants can refer new tenants, earning rewards like rent discounts.
- **Lease Agreements**: Manage active leases, with details such as start and end dates for each lease.
- **Maintenance Requests**: Allow tenants to submit maintenance requests for properties they rent.
- **Redis Integration**: Use Redis as an in-memory data store for storing and managing active leases, maintenance requests, and tenant referrals.

## Prerequisites

### Software Requirements
1. **Node.js**: Version 14.x or later.
2. **npm**: Version 6.x or later (comes with Node.js).
3. **Redis Stack Server**: Redis version with extended features.
4. **RedisInsight**: To visualize and interact with your Redis data.

### Installation Instructions

#### Installing Node.js and npm
Follow the official instructions to install Node.js and npm:
- [Node.js Download Page](https://nodejs.org/)

#### Installing Redis Stack Server and RedisInsight

1. **Download and Install Redis Stack**
   - Visit the [Redis Stack Downloads Page](https://redis.io/download).
   - Follow the instructions to install **Redis Stack Server** on your machine.

   To start the Redis Stack server, use the following command:
   ```bash
   redis-stack-server
   ```
   By default, the Redis server runs on port `6379`.

2. **Install RedisInsight** (Optional but recommended for visualization)
   - Visit the [RedisInsight Page](https://redis.com/redis-enterprise/redis-insight/).
   - Follow the instructions to download and install RedisInsight.
   - Start RedisInsight and connect to your local Redis instance (typically `localhost:6379`).

## Project Setup

### Cloning the Repository
To get started with the project, clone the repository using the following command:

```bash
git clone https://github.com/Pranav2501/home-rental-redis.git
```
Replace `<repository-url>` with the actual URL of the Git repository.

### Navigating to the Project Directory
After cloning the repository, navigate into the project directory:

```bash
cd home-rental-redis
```

### Installing Dependencies
Install the required Node.js dependencies using npm:

```bash
npm install
```
This will install all dependencies listed in the `package.json` file, including **Express**, **body-parser**, **EJS**, and **redis**.

## Running the Application

### Step 1: Start Redis Stack Server
Ensure that the Redis Stack Server is running locally before starting the application:

```bash
redis-stack-server
```

### Step 2: Run the Node.js Server
To start the application server, run the following command:

```bash
node app.js
```
By default, the application will be accessible at `http://localhost:3000`.

## Project Structure
- **app.js**: Main entry point for the application.
- **src/controllers/**: Contains the business logic for handling CRUD operations for referrals, leases, and maintenance requests.
- **src/routes/**: Defines routes for different functionalities (referrals, leases, maintenance requests).
- **src/services/**: Redis connection client configuration.
- **src/views/**: EJS template files for rendering the front-end user interface.
- **src/public/**: Contains static files, such as stylesheets.

## Usage

### Accessing the Application
Open your web browser and navigate to [http://localhost:3000](http://localhost:3000). You will see the **Home Rental Management System** dashboard with the following features:
- **Navigation Bar**: Navigate between **Lease Agreements**, **Maintenance Requests**, and **Tenant Referrals**.
- **Tenant Referrals**: Manage tenant referrals, allowing you to add, update, or delete referrals.
- **Lease Agreements**: View and manage leases between tenants and properties.
- **Maintenance Requests**: Track maintenance requests submitted by tenants.

## Screenshots
- **Dashboard**: Provides a summary of referrals, leases, and maintenance requests.
- **Forms**: Easy-to-use forms to create, update, and delete data records.

## Contributing
If you wish to contribute to the project, please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Create a new pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

## Contact
For any questions or support, please contact:
- **Name**: Pranav Raj Sowrirajan Balaji
- **Email**: [your-email@example.com](mailto:your-email@example.com)

