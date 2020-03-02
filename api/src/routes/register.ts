import { Router } from "express";
const router = Router();

router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ status: "Ok!" });
});

export default router;
