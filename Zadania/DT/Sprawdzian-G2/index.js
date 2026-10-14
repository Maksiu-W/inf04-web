const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const { error } = require('console')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

let vehicles = [
  {
    id: 1,
    brand: "Mercedes-Benz Sprinter",
    type: "Dostawczy",
    year: 2019,
    repairs: [
      { id: 101, mechanic: "Marek Kaczmarek", cost: 850, description: "Wymiana tarcz i klocków hamulcowych przód" },
      { id: 102, mechanic: "Anna Nowak", cost: 250, description: "Serwis klimatyzacji i odgrzybianie" },
      { id: 103, mechanic: "Piotr Wiśniewski", cost: 3200, description: "Regeneracja turbosprężarki" }
    ]
  },
  {
    id: 2,
    brand: "Skoda Octavia",
    type: "Osobowy",
    year: 2023,
    repairs: []
  },
  {
    id: 3,
    brand: "Volvo FH16",
    type: "Ciężarowy",
    year: 2017,
    repairs: [
      { id: 104, mechanic: "Tomasz Lewandowski", cost: 5500, description: "Wymiana kompletnego sprzęgła" },
      { id: 105, mechanic: "Krzysztof Zając", cost: 450, description: "Legalizacja i kalibracja tachografu" }
    ]
  },
  {
    id: 4,
    brand: "Renault Master",
    type: "Dostawczy",
    year: 2021,
    repairs: [
      { id: 106, mechanic: "Marek Kaczmarek", cost: 600, description: "Okresowa wymiana oleju i kompletu filtrów" }
    ]
  },
  {
    id: 5,
    brand: "MAN TGS",
    type: "Ciężarowy",
    year: 2015,
    repairs: [
      { id: 107, mechanic: "Piotr Wiśniewski", cost: 8900, description: "Naprawa siłownika układu hydraulicznego wywrotu" },
      { id: 108, mechanic: "Tomasz Lewandowski", cost: 4200, description: "Wymiana 4 opon na osi napędowej" },
      { id: 109, mechanic: "Krzysztof Zając", cost: 1100, description: "Wymiana zaworu osuszacza powietrza" }
    ]
  },
  {
    id: 6,
    brand: "Toyota Yaris Cross",
    type: "Osobowy",
    year: 2022,
    repairs: [
      { id: 110, mechanic: "Anna Nowak", cost: 120, description: "Wymiana piór wycieraczek i żarówek" }
    ]
  }
];

app.get("/api/vehicles", (req, res) => {
    const {type, sortBy} = req.query

    let result = [...vehicles]

    if(type)
    {
        result = result.filter(v => v.type === type)
    }
    if(sortBy)
    {
        result = result.sort((a, b) => {
            let sumA = a.repairs.length != 0 ? (a.repairs.reduce((s, r) => s + r.cost, 0)) : 0
            let sumB = b.repairs.length != 0 ? (b.repairs.reduce((s, r) => s + r.cost, 0)) : 0

            return sumB - sumA
        })
    }
    res.status(200).json(result)
})

app.get("/api/vehicles/:id", (req,res) => {
    const id = parseInt(req.params.id)

    let result = [...vehicles]

    let vehicle = result.find(v => v.id === id)

    if(vehicle)
    {
        res.status(200).json(vehicle)
    }
    else
    {
        res.status(404).json({error: "Brak pojazdu o podanym id!"})
    }
})

app.post("/api/vehicles", (req, res) => {
    const {brand, type, year} = req.body

    if(brand && type && year)
    {
        let id = Date.now()
        let repairs = []

        let vehicle = {id: id, brand: brand, type: type, year: year, repairs: repairs}

        vehicles.push(vehicle)

        res.status(201).json(vehicle)
    }
    else
    {
        res.status(400).json({error: "Brak wymaganych danych!"})
    }
})

app.put("/api/vehicles/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const {brand, type, year} = req.body

    let result = [...vehicles]

    let vehicle = result.find(v => v.id === id)

    if(vehicle)
    {
        if(brand)
        {
            vehicle.brand = brand
        }
        if(type)
        {
            vehicle.type = type
        }
        if(year)
        {
            vehicle.year = year
        }
        res.status(200).json({success: "Zaktualizowano dane!"})
    }
    else
    {
        res.status(404).json({error: "Brak pojazdu o podanym id!"})
    }
})

app.post("/api/vehicles/:id/repairs", (req, res) => {
    const id = parseInt(req.params.id)
    const cost = parseInt(req.body.cost)
    const {mechanic, description} = req.body

    let result = [...vehicles]

    let vehicle = result.find(v => v.id === id)

    if(vehicle)
    {
        if(cost && mechanic && description)
        {
            let rId = Date.now()
            let repair = {id: rId, mechanic: mechanic, cost: cost, description: description}

            vehicle.repairs.push(repair)

            res.status(201).json(repair)
        }
        else
        {
            res.status(400).json({error: "Brak wymaganych danych!"})
        }
    }
    else
    {
        res.status(404).json({error: "Brak pojazdu o podanym id!"})
    }
})

app.delete("/api/vehicles/:id/repairs/:repairId", (req, res) => {
    const id = parseInt(req.params.id)
    const repairId = parseInt(req.params.repairId)

    let result = [...vehicles]

    let vehicle = result.find(v => v.id === id)

    if(vehicle)
    {
        let repair = vehicle.repairs.find(r => r.id === repairId)

        if(repair)
        {
            vehicle.repairs = vehicle.repairs.filter(r => r.id != repair.id)

            res.sendStatus(204)
        }
        else
        {
            res.status(404).json({error: "Brak naprawy o podanym id!"})
        }
    }
    else
    {
        res.status(404).json({error: "Brak pojazdu o podanym id!"})
    }
})

app.listen(3000, () => {
    console.log("App is listening on port 3000..")
})