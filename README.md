# CouchStay Gallery

CouchStay Gallery is a gallery application designed to showcase images for rental real estate listings.

## Features

- Developed using React with Styled components and CSS-modules.
- Integrates with a MySQL database.
- Provides a testing suite with Jest & Enzyme.
- Capable of serving multiple entries from a database.

## Technologies Used

- React
- Styled Components
- CSS-modules
- Jest
- Enzyme
- Express
- MySQL
- Babel
- Webpack

## Setup and Configuration

### Database Configuration

1. The default setup uses MySQL with username `root` and no password. Modify the `server/index.js` to match your setup.
2. Initialize the database using:  mysql -u root -p < schema.sql
3. > Note: The username in the example is 'root'. Modify this if your system user and password settings differ.

### Seeding the Database

1. The seeding script `seed.js` populates your database. Execute it by running: node seed.js

2. By default, the script generates 100 entries. Adjust this in `seed.js` near the bottom of the file.
3. Ensure the database configuration in `seed.js` matches your local settings. Adjust settings at the top of the `seed.js` file.

### Starting the Development Server

Ensure there are no conflicts with the default port 3061, as the Express server runs on this port.

Use the following commands for development:
- Run tests: `npm test`
- Start webpack: `npm start`
- Start the server: `npm run dev-server`

> For accuracy, always reference the `package.json` file.

## Application Structure

- The app mounts to `AppGallery` and the modal to `modalGallery` in the HTML.
- Files are compiled via Babel and bundled using Webpack into `bundle.js` located in the `client/dist` folder.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.


