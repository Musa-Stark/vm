import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.get("/api/v1/health", (req, res) => {
  res.json({
    success: true,
    message: "All systems running on an optimal protocol.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Health: GET http://localhost:${PORT}/api/v1/health`);
});
