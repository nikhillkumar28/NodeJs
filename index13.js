import express from "express";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());

const users = [];

app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (users.find(u => u.email === email)) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    users.push({ email, password: hashPassword });

    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ message: "Server error during signup" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const found = users.find((user) => user.email === email);

    if (!found) {
      return res.status(401).json({ message: "User not found" });
    }

    const chkPassword = await bcrypt.compare(password, found.password);
    
    if (chkPassword) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error during login" });
  }
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(8080, () => console.log("Server running on 8080"));