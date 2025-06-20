const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const UserRouter = require("./Routers/user");
const ContactRouter = require("./Routers/contact");
const AdminRouter = require("./Routers/admin");




// Middleware
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "https://aaditya-hub.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/user", UserRouter);
app.use("/contact", ContactRouter);
app.use("/admin", AdminRouter);





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
