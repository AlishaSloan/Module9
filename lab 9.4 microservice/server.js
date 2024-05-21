const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my microservice app." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`Server is running on port${PORT}.`);
});

const microserviceRoutes = require('../routes/microserviceRoutes');
app.use('/api', microserviceRoutes);