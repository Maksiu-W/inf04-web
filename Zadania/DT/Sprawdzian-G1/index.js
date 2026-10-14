const express = require('express')

const app = express()

let movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    reviews: [
      { id: 101, author: "Jan", rating: 5, text: "Świetny film!" },
      { id: 102, author: "Anna", rating: 4, text: "Bardzo dobry, polecam." }
    ]
  },
  {
    id: 2,
    title: "The Matrix",
    genre: "Sci-Fi",
    year: 1999,
    reviews: [
      { id: 103, author: "Piotr", rating: 5, text: "Klasyk gatunku." }
    ]
  },
  {
    id: 3,
    title: "The Godfather",
    genre: "Drama",
    year: 1972,
    reviews: []
  }
];

app.get("/api/movies", (req, res) => {
    const {genre, sortBy} = req.query

    let result = [...movies]

    if(genre)
    {
        result = result.filter(m => m.genre == genre)
    }

    if(sortBy == 'rating')
    {
        result = result.sort((a, b) => {

            let AvgA = 0
            let AvgB = 0

            AvgA = a.reviews.length != 0 ? (a.reviews.reduce((suma, recenzja) => suma + recenzja.rating, 0) / a.reviews.length) : 0
            AvgB = b.reviews.length != 0 ? (b.reviews.reduce((suma, recenzja) => suma + recenzja.rating, 0) / b.reviews.length) : 0

            return AvgB - AvgA
        })
    }

    res.status(200).json(result)
})

app.get("/api/movies/:id", (req, res) => {
    const {id} = req.params

    let result = [...movies]

    let movie = result.find(m => m.id === parseInt(id))

    if(movie)
    {
        res.status(200).json(movie)
    }
    else
    {
        res.status(404).send("Nie istnieje film o podanym id!")
    }
})

app.post("/api/movies", (req, res) => {
    const {title, genre, year} = req.body

    if(title && genre && year)
    {
        let id = Date.now()
        let reviews = []

        let movie = {id: id, title: title, genre: genre, year: year, reviews: reviews}

        movies.push(movie)

        res.status(201).send("Dodano film!")
    }
    else
    {
        res.status(400).send("Nie wypełniono wymaganych pól!")
    }
})

app.put("/api/movies/:id", (req, res) => {
    const {id} = req.params
    const {title, genre, year} = req.body

    let result = [...movies]

    let movie = result.find(m => m.id === parseInt(id))

    if(movie)
    {
        if(title)
        {
            movie.title = title
        }
        if(genre)
        {
            movie.genre = genre
        }
        if(year)
        {
            movie.year = year
        }

        res.status(200).send("Zaktualizowano film!")
    }
    else
    {
        res.status(404).send("Brak filmu o podanym id!")
    }
})

app.post("/api/movies/:id/reviews", (req, res) => {
    const {id} = req.params
    const {author, rating, text} = req.body

    let result = [...movies]

    if(id && author && rating && text && rating <= 5 && rating >=1)
    {
        let movie = result.find(m => m.id === parseInt(id))
        if(movie)
        {
            let reviewId = Date.now()
            let review = {id: reviewId, author: author, rating: rating, text: text}

            movie.reviews.push(review)

            res.status(201).send("Dodano recenzję!")
        }
        else
        {
            res.status(404).send("Brak filmu o podanym id!")
        }
    }
    else
    {
        res.status(400).send("Niepełne/Niepoprawne dane!")
    }
})

app.delete("/api/movies/:id/reviews/:reviewId", (req, res) => {
    const {id, reviewId} = req.params

    let result = [...movies]

    const movie = result.find(m => m.id === parseInt(id))
    
    if(movie)
    {
        let review = movie.reviews.find(r => r.id === parseInt(reviewId))

        if(review)
        {
            movie.reviews = movie.reviews.filter(r => r.id != parseInt(reviewId))

            res.sendStatus(204)
        }
        else
        {
            res.status(404).send("Brak recenzji o podanym id!")
        }
    }
    else
    {
        res.status(404).send("Brak filmu o podanym id!")
    }
})

app.listen(3000, () => {
    console.log("Serwer nasłuchuje na porcie 3000...")
})