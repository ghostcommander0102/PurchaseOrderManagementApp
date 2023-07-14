# Purchase Order Management App

This is a simple web application built with React and Express that allows employees to submit and manage purchase orders. The application includes a front-end web interface for submitting purchase order details and a back-end API service for processing the submissions.

## Features

- Employees can submit purchase orders by providing the date, vendor name, and uploading a CSV file containing purchase order items.
- The CSV file should contain the following required information for each item: Model Number, Unit Price, and Quantity.
- The back-end API validates the submitted data and stores the purchase order information in the preferred storage.
- The front-end displays a success message upon successful submission or shows validation errors if any.
- The application handles parsing the CSV file and relaying validation errors from the back-end to the front-end.

## Technologies Used

- Front-end:
  - React
  - Create React App
  - HTML
  - CSS

- Back-end:
  - Express
  - Multer (for file uploads)
  - csv-parser (for parsing CSV files)

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Install the dependencies for the back-end:

    ```bash
    cd backend
    npm install

3. Install the dependencies for the front-end:

    ```bash
    cd frontend
    npm install

### Running the Application

1. Start the back-end server:

    ```bash
    cd backend
    npm start

2. Start the front-end development server:

    ```bash
    cd frontend
    npm start
