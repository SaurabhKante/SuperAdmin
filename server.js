const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require('./models/UsersModel');
const Admin = require("./models/Admin");
const sendMail = require("./Controllers/sendMail")

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with the origin of your React app
    credentials: true,
  })
);

const port = 8800;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

async function initializeDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/SuperAdminDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database initialization successful.");
  } catch (err) {
    console.error("Error initializing the database:", err);
  }
}

app.get("/createUser", sendMail);

app.post('/createUser', async (req, res) => {
  try {
    // Extract only the fields that are present in your schema
    const {
      schoolname,
      address,
      schoolphone,
      schoolemail,
      classFrom,
      classTo,
      board,
      adminname,
      adminphone,
      planDuration,
      password,
      username,
    } = req.body;
    console.log(username);

    // Create a new user object with the extracted fields
    const newUser = new User({
      school: {
        name: schoolname,
        address: address,
        phone: schoolphone,
        email: schoolemail,
        class: { from: classFrom, to: classTo },
        board: board,
      },
      admin: { name: adminname, phone: adminphone },
      plan: { duration: planDuration },
      username: username,
      password: password,
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post("/admin", async (req, res) => {
  console.log("Admin login request received");
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ admin: username });

    if (!admin) {
      console.log("Admin not found");
      return res.status(404).json({ error: "Admin not found" });
    }

    if (admin.password === password) {
      res.status(200).json({ message: "Admin login successful" });
    } else {
      res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/admin", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/collection", async (req, res) => {
  try {
    // Find all users in the database
    const users = await User.find({}, { school: 1, plan: 1, _id: 0 });

    // Extract school and plan details from each user and add a unique key
    const collectionData = users.map((user, index) => ({
      key: index, // Add a unique key
      school: user.school,
      plan: user.plan,
    }));

    res.status(200).json(collectionData);
  } catch (error) {
    console.error("Error fetching collection data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


(async () => {
    await initializeDatabase();
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })();