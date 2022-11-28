var express = require("express");
var router = express.Router();
let recipes = [];

/* GET home page. */
router.get("/", function (req, res, next) {
  const lastRecipe = recipes[recipes.length - 1];
  res.render("index", {
    name: lastRecipe.name,
    ing: lastRecipe.ingredients,
    ins: lastRecipe.instructions
  });
});

router.get("/recipe/:food", (req, res) => {
  let food = {
    name: req.params.food,
    instructions: [],
    ingredients: []
  };
  recipes.push(food);
  res.json(food);
});

module.exports = router;
