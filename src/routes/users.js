import { Router } from "express";
const router = Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/list", function (req, res, next) {
  res.send([
    {
      name: "Akshay",
    },
    {
      name: "Anand",
    },
    {
      name: "Janak",
    },
  ]);
});

router.get("/anand", function (req, res, next) {
  res.send({
    name: "Anand",
  });
});

router.get("/akshay", function (req, res, next) {
  res.send({
    name: "Akshay",
  });
});

export default router;
