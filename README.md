# React Authentication App

This repository contains a simple React application with a login and signup form for learning purposes. The application demonstrates basic form handling, validation, and state management in React.

## Features

- Login Form
  - Email and password fields
  - Basic form validation
  - Submit and handle user login details
- Signup Form
  - Name, email, and password fields
  - Basic form validation
  - Submit and handle user registration details
- Responsive design
![Vite + React - Google Chrome 29-Sep-24 10_44_23 AM](https://github.com/user-attachments/assets/abfca157-1c56-45fc-b99d-85e76aeddf10)
![Vite + React - Google Chrome 29-Sep-24 10_44_15 AM](https://github.com/user-attachments/assets/d833787d-bdce-40e2-96da-036e8f7e1e5a)
## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and learning purposes.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v12 or higher)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/react-auth-app.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd react-auth-app
   ```

3. **Install dependencies**

   If you're using npm:

   ```bash
   npm install
   ```

   If you're using yarn:

   ```bash
   yarn install
   ```

4. **Start the development server**

   If you're using npm:

   ```bash
   npm start
   ```

   If you're using yarn:

   ```bash
   yarn start
   ```

   The application will run at `http://localhost:3000`.

## Folder Structure

- **/public** - Contains the `index.html` file and other static assets.
- **/src** - Contains the main application code.
  - **/components** - Reusable React components (LoginForm, SignupForm, etc.).
  - **/pages** - Pages for Login and Signup views.
  - **/App.js** - Main entry point for the React components.

## Usage

1. Open the browser and go to `http://localhost:3000`.
2. You can switch between the login and signup forms using the provided buttons.
3. Input validation will prevent form submission with empty fields.
4. Upon successful login/signup, mock actions are performed (no backend integration yet).

## Learning Objectives

- Understand how to create forms in React.
- Handle form inputs and validation using React state.
- Practice basic user authentication flows (login and signup).
- Learn how to use conditional rendering for different views (login/signup).

## Future Enhancements

- Add backend integration for authentication (e.g., using Firebase, Express, or another API).
- Add proper form validation with libraries like `Formik` or `React Hook Form`.
- Implement password recovery and reset functionality.
- Improve UI with CSS frameworks like `Bootstrap` or `Material-UI`.

## Contributing

Feel free to fork this repository, make changes, and submit pull requests for any enhancements or bug fixes.

## License

This project is open-source and available under the [MIT License](LICENSE).
