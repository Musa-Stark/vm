import express from "express";
import "dotenv/config";

const app = express();
app.set("trust proxy", true);
const PORT = process.env.PORT;

app.get("/api/v1/health", (req, res) => {
  console.log(req.headers)
  res.json({
    success: true,
    message: "All systems running on an branch 2.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Health: GET http://localhost:${PORT}/api/v1/health`);
});
