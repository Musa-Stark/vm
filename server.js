import express from "express";

const app = express();

app.get("/api/v1/health", (req, res) => {
  res.json({
    success: true,
    message: "All systems running on an optimal protocol.",
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
  console.log("Health: GET http://localhost:3000/api/v1/health")
});
