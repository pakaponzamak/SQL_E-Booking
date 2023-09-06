
```markdown
# Health and Money Training E-Booking Application

![E-Booking Application](e-booking-screenshot.png)

The Health and Money Training E-Booking Application is a comprehensive web-based platform that allows users to book healthcare services and enroll in financial training courses.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Registration and Authentication**: Secure user accounts with registration and login functionality.

- **Healthcare Service Booking**: Users can browse available healthcare services, schedule appointments with healthcare providers, and view their medical history.

- **Money Training Courses**: Users can enroll in financial training courses, view course materials, and track their progress.

- **Admin Dashboard**: Administrators have access to a dashboard for managing services, courses, and user bookings.

- **Responsive Design**: A user-friendly interface that adapts to various screen sizes.

- **Tailwind CSS**: Stylish and customizable UI with the power of Tailwind CSS.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/): Make sure Node.js is installed on your machine.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/e-booking-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd e-booking-app
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Database Setup

### XAMPP and MySQL

1. Download and install [XAMPP](https://www.apachefriends.org/index.html) if not already installed.

2. Start the Apache and MySQL services in XAMPP.

3. Open phpMyAdmin by navigating to `http://localhost/phpmyadmin` in your web browser.

4. Create a new database for your E-Booking application.

5. Import the database schema provided in the `database-schema.sql` file included with this project to create the necessary tables and structure.

6. Update the database configuration in your project to connect to your MySQL database.


## Usage

To start the application, run the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please follow our [contributing guidelines](CONTRIBUTING.md) to get started.

1. Fork the project.

2. Create your feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m 'Add some feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature/your-feature
   ```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```
