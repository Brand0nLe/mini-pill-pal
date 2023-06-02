# Mini Pill Pal - IN DEVELOPMENT

Mini Pill Pal is a one-page desktop application built with React.js, TypeScript, and Tailwind CSS. It helps users keep track of their medications by providing reminders, medication details, refill tracking, and profile management. The application utilizes the FDA Drug Label API to fetch accurate and up-to-date drug information, including names, strengths, dosage forms, and more.

## Features (Currently planned and subject to change)

- Profile section with the option to upload a profile picture
- Medication form for entering medication details, including name, strength, and directions
- Alerts and reminders for upcoming medication schedules
- Refill tracker to manage pill count and track when refills are needed
- Login functionality to securely store user information and associate it with their session/local storage

## Deployment

The application is deployed on Azure and can be accessed using the following link:
[Live Demo Coming Soon](https://your-azure-app-url.com)
Please note that the application is currently in production and may undergo changes and updates.

## Technologies Used

- React.js
- TypeScript
- Local Storage
- Session Storage
- Tailwind CSS
- FDA Drug Label API

## Setup

To run this project, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install` in the project directory.
3. Obtain an API key from the FDA Drug Label API by following the instructions in their documentation.
4. Create a new file named `.env` in the root directory of the project.
5. In the `.env` file, add the following line and replace `YOUR_API_KEY` with your actual FDA Drug Label API key: REACT_APP_FDA_API_KEY=YOUR_API_KEY
6. Start the development server by running `npm start`.
7. Open `http://localhost:3000` in your web browser to view the site.

> **Note:** Make sure to keep your API key confidential and do not commit the `.env` file to any public repositories. The `.env` file is already added to the `.gitignore`, so it won't be uploaded to the repository.

## FDA Drug Label API

The FDA Drug Label API provides access to drug label information, including names, strengths, dosage forms, and more. To use this API in the Medication Reminder App, you need to obtain an API key from the FDA.

To get started with the FDA Drug Label API:

1. Visit the [FDA Drug Label API Documentation](https://urlgoeshere) to learn more about the API and its capabilities.
2. Follow the instructions provided in the documentation to obtain an API key.
3. Once you have obtained the API key, update the `.env` file with the API key as described in the Setup section above.

For more details on using the FDA Drug Label API, refer to the [FDA Drug Label API Documentation](https://urlgoeshere).

## Disclaimer

This project, Mini Pill Pal, is a personal and educational endeavor. It utilizes the FDA Drug Label API to fetch drug information, but the app itself is not affiliated with or endorsed by the FDA. This project is purely for the purpose of practicing and developing my skills in front-end development, with a focus on React.js and TypeScript. It is also an exercise in learning to integrate and use third-party APIs. All medication information is provided by the FDA Drug Label API, and this application claims no ownership or responsibility for this data.

As this is a personal project to develop my skills, there are no plans for commercial use.

## Contact

If you have any questions or would like to know more about my project, feel free to reach out to me.

- Email: [brandonctle.dev@gmail.com](mailto:brandonctle.dev@gmail.com)
- LinkedIn: [https://www.linkedin.com/in/brandonctle](https://www.linkedin.com/in/brandonctle/)
- Portfolio: [https://brandonle.azurewebsites.net](https://brandonle.azurewebsites.net/)

Thank you for your interest in Mini Pill Pal!
