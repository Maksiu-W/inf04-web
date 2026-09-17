const express = require("express")
const path = require('path')
const methodOverride = require("method-override")

const app = express()

const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride('_method'))

var numbers = [14, 67, 9];

let shoppingList = [
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

next_id = shoppingList.length + 1

// app.get("/numbers/", (req, res) => {
//   const order = req.query.order;
//   var data = [...numbers];
//   if (order == "asc") {
//     res.send(data.sort((a, b) => a - b));
//   } else if (order == "desc") {
//     res.send(data.sort((a, b) => a - b).toReversed());
//   } else {
//     res.send(numbers);
//   }
// });

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

app.get("/Shopping/new-item", (req, res) => {
    res.render("add-item.ejs")
})

app.post("/Shopping", (req, res) => {
    data = req.body
    console.log(data)
    console.log("ID: " + next_id)
    console.log("Name: " + data.name)
    console.log("Quantity: " + data.quantity)
    const obj = 
    {
        id: next_id,
        name: data.name,
        quantity: parseInt(data.quantity)
    }

    next_id++
    shoppingList.push(obj)

    res.redirect("/Shopping")
})

// przy użyciu splice

// app.delete("/shopping/:id", (req, res) => {
//     const id = parseInt(req.params.id)

//     const index = shoppingList.findIndex(item => item.id == id)

//     if(index == -1)
//     {
//       console.log("Nie znaleziono przedmiotu!")
//     }

//     shoppingList.splice(index,1)

//     res.redirect("/shopping")
// })

// przy użyciu filter

app.delete("/Shopping/:id", (req, res) => {
  const id = req.params.id

  shoppingList = shoppingList.filter(item => item.id != id)

  res.redirect("/Shopping")
})

app.get("/Shopping/edit-item", (req, res) => {
  res.render("edit-item.ejs")
})

app.put("/Shopping/:id", (req, res) => {
    const id = parseInt(req.params.id)
    let data = req.body

    foundItem = shoppingList.find(item => {
      return item.id == id
    })

    if(foundItem == undefined){
      return res.send("Nie znaleziono przedmiotu!")
    }

    foundItem.name = data.name
    foundItem.quantity = parseInt(data.quantity)

    res.redirect("/shopping")
})

app.get("/Shopping", (req, res) => {
  res.render('shopping', {shoppingList})
});

app.get("/Shopping/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Shopping with ${name}`);
});

app.get("/Shopping/shop", (req, res) => {
  const shop = req.query.shop;
  res.send(`Going to the  ${shop}`);
});

app.get("/", (req, res) => {
  res.send("Hello from /");
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
