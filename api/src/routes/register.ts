import { Router } from "express";
import { registerschema } from "./../validation";
import { User } from "./../models";
import { login } from "./../auth";
import { guest } from "./../middleware";
const router = Router();

router.post("/register", guest, async (req, res) => {
  await registerschema.validateAsync(req.body, { abortEarly: false });
  const { name, email, password } = req.body;
  const found = await User.exists({ email });
  if (found) {
    throw new Error("Invalid Email");
  }
  const user = await User.create({ email, name, password });
  login(req, user.id);
  res.json({ status: "Ok!" });
});

export default router;
