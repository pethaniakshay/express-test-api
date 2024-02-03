import { Router } from "express";
const router = Router();

router.get("/", function (req, res, next) {
  res.send({
    message: "Hello Time Experiments!",
  });
});

export default router;
