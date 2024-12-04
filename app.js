const express = require('express');
const bodyParser = require('body-parser');
const referralRoutes = require('./src/routes/referralRoutes');
const leaseRoutes = require('./src/routes/leaseRoutes');
const maintenanceRoutes = require('./src/routes/maintenanceRoutes');

const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src', 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Routes
app.use('/', referralRoutes);
// Use the lease routes
app.use('/', leaseRoutes);

// Use the maintenance routes
app.use('/', maintenanceRoutes);


// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
