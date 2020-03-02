import { Router } from "express";
const router = Router();

router.post("/register", (req, res) => {
  res.json({ status: "Ok!" });
});

export default router;
