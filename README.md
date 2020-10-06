
CouchBNB Gallery

This is a Gallery APP meant to showcase images for a rental real estate listing.
The project is developed on React using Styled components,and CSS-modules.
Testing suite is provided using Jest & Enzyme.

The App can serve multiple entries from a database.
Currently the database is mysql with username root and no password.
Please be sure to configure the server/index.js to match your setup.

to set up the database, copy and paste `mysql -u root -p < schema.sql` to create the database and schema file on your local machine. please note that the user name in this example is 'root' and no password is passed in. Please make sure to modify if your system user and password settings are different on your machine.

There is a seeing script to seed your database and it is seed.js just run node seed.js in the command prompt in the root directory to run.
Currently the seeding file is set to generate 100 entries by default you can change this in the seed.js near the bottom of the file.
makesure the database config in the seeding sript matches your local settings. This can be modified at the top of the seed.js.

The express is used to run the server. This file is set to server the gallery by default on localhost port: 3061. Please make sure there are no port conflicts.

to start development please see the following commands

npm test - "jest --collectCoverage",
npm start -    "webpack -d --watch",
npm run dev-server - "nodemon server/index.js"
please reference the package.json for accuracy.

The app is set to mount to AppGallery and the modal mounts to modalGallery in the HTML file.
FIles are compiled via bable and webpack to bundle.js located in the client/dist folder.
