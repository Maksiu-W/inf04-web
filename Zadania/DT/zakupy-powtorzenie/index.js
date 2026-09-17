const express = require("express");

const app = express();

const port = 3000;

var numbers = [14, 67, 9];

const shoppingList = [
  {
    id: 1,
    name: "Apple",
    quantity: 6,
  },
  {
    id: 2,
    name: "Banana",
    quantity: 2,
  },
];

app.get("/numbers/", (req, res) => {
  const order = req.query.order;
  var data = [...numbers];
  if (order == "asc") {
    res.send(data.sort((a, b) => a - b));
  } else if (order == "desc") {
    res.send(data.sort((a, b) => a - b).toReversed());
  } else {
    res.send(numbers);
  }
});

app.get("/Shopping-List", (req, res) => {
  res.send(shoppingList);
});

app.get("/Shopping-List/:ID", (req, res) => {
  var isFound = false;
  const id = req.params.ID;
  shoppingList.forEach((object) => {
    if (object.id == id) {
      res.send(object);
      isFound = !isFound;
    }
  });
  if (!isFound) {
    res.send("Nie znaleziono produktu!");
  }
});

app.post("/Shopping-List", (req, res) => {
    const obj = 
    {
        id: 3,
        name: orange,
        quantity: 4
    }

    shoppingList.push(obj)
})

app.get("/", (req, res) => {
  res.send("Hello from /");
});

app.get("/shopping", (req, res) => {
  res.send("Shopping");
});

app.get("/shopping/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Shopping with ${name}`);
});

app.get("/shopping/shop", (req, res) => {
  const shop = req.query.shop;
  res.send(`Going to the  ${shop}`);
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
