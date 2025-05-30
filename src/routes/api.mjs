import express from "express";

const apiRouter = express.Router();

// Khai báo routes
apiRouter.get("/", (req, res) => {
  res.json({ name: "ABc" });
});

export default apiRouter;
