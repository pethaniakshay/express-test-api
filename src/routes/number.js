import { Router } from "express";
const router = Router();

router.get("/number/:number", function (req, res, next) {
  const number = req.params.number;
  res.send({
    number,
    random: Math.floor(Math.random() * 1000 + 1),
  });
});

router.get("/number", function (req, res, next) {
  const number = req.query.number;
  res.send({
    number,
    random: Math.floor(Math.random() * 1000 + 1),
  });
});

export default router;
