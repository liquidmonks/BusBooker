# Bus Booker
> Your One-Stop Shop for Hassle-Free Bus Ticket Booking

![Bus Booker Demo](https://your-placeholder-url-for-gif-image.com/demo.gif)

## Table of Contents
- [Bus Booker](#bus-booker)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Tech Stack](#tech-stack)
  - [Installation and Setup](#installation-and-setup)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Live Demo](#live-demo)
  - [Authors](#authors)
  - [License](#license)

## Overview
Bus Booker is a simple and user-friendly web application that allows you to search, book, and manage bus tickets with ease. Say goodbye to the traditional hassles of bus ticket booking and embrace the convenience of Bus Booker.

## Tech Stack
- Tailwind CSS
- React JS
- Express JS
- Node JS
- Gatsby
- PostgreSQL
- JavaScript ES6

## Installation and Setup

### Prerequisites
Ensure you have the following installed on your machine before proceeding:
- Node.js (>=12.x)
- npm (>=6.x)
- PostgreSQL (>=12.x)

### Steps
1. Clone the repository
```bash
git clone https://github.com/your-username/bus-booker.git
cd bus-booker
```

2. Install dependencies
```bash
npm install
```

3. Set up the PostgreSQL database
```bash
# Create a database named 'busbooker'
createdb busbooker

# Import the schema
psql busbooker < schema.sql
```

4. Set up environment variables
```bash
# Copy the sample .env file
cp .env.example .env

# Edit the .env file with your database credentials and other configurations
nano .env
```

5. Start the development server
```bash
npm run dev
```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Live Demo
Check out the live demo of the application here: [https://your-placeholder-url-for-live-demo.com](https://your-placeholder-url-for-live-demo.com)

## Authors

- [@liquidmonks](https://www.github.com/liquidmonks)


![Logo](https://i.imgur.com/RXZyAtU.png)

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.