# Netflix Clone

Welcome to the **Netflix Clone** repository. This project is a frontend replica of Netflix's user interface, developed to enhance proficiency with modern web development technologies.

---

<img>![image](https://user-images.githubusercontent.com/86529890/147870057-071de4f8-7385-4b00-a7d0-b534ed102280.png)
</img>

---

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Environment Variables](#environment-variables)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

---

## Introduction

This project is a Frontend application that replicates Netflix's streaming platform. It utilizes React for the frontend, Firebase for authentication and data storage, the TMDB API for movie data, and Stripe for payment processing.

---

## Features

- **User Authentication:** Secure sign-in and sign-up functionality using Firebase Authentication.
- **Movie Browsing:** Fetch and display movies using the TMDB API.
- **Subscription Management:** Integrate Stripe for handling subscription payments.
- **Responsive Design:** Ensure compatibility across various devices and screen sizes.

---

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Firebase:** Platform for authentication and real-time database services.
- **TMDB API:** Source for movie and TV show data.
- **Stripe:** Payment processing platform for managing subscriptions.
- **Redux:** State management library for JavaScript applications.
- **Axios:** Promise-based HTTP client for making API requests.
- **Styled Components:** Library for styling React components.

---

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

---

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rugg07/Netflix-clone.git
   cd Netflix-clone
   ```

2. **Install dependencies:**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add the environment variables as specified above.

---

## Usage

To start the development server, run:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add feature name"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-name
   ```

5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for checking out this project! Your feedback is invaluable. 
