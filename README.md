# Workshop 3 2024 - Frontend Part

This project is a simple frontend application for a login and signup system. It's built with vite.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Build the project with `npm run build`.
4. Run the project with `npm run dev`.

## Instructions

There are missing pieces in the code that you need to fill in. Look for the TODO comments with explanations in the relevant places. Make sure to complete the code according to the requirements, as we will use them to check your implementation.

Remember to test your app thoroughly to ensure it works as expected.

You also need to deploy your app using GitHub Pages, don't forget that part!

## User Flow

1. When the app is opened for the first time, the user will land on the login page.
2. When the user is already logged in, the user will land on the main page.
3. If the user logged out, the user will land on the login page.

### Login Page

1. When the user presses the login button, a call to the login API will be made with the provided username and password.
2. If the login is successful, the user will be redirected to the main page.
3. If the login fails due to wrong credentials, a proper error message will be displayed.
4. If the login fails due to a server error, a proper error message will be displayed.
5. When the user presses the sign-up button, they will be redirected to the sign-up page.
6. When a call is made, a loader will be presented until the call is completed.

### Sign-up Page

1. When the user fills in the sign-up form and presses the sign-up button, a call to the sign-up API will be made with the provided information.
2. If the sign-up is successful, the user will be redirected to the login page.
3. If the sign-up fails due to invalid information, a proper error message will be displayed.
4. If the sign-up fails due to a server error, a proper error message will be displayed.
5. When a call is made, a loader will be presented until the call is completed.

### Main Page

1. The main page will display the username.
2. If the user logs out, they will be redirected back to the login page.
