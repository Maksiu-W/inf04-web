import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const data = [
    {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}
  ]

function App() {
  const [category, setCategory] = useState({
    flowers: true,
    animals: true,
    cars: true
  })

  const [photos, setPhotos] = useState(data)

  const handleCheckboxChange = (e) => {
    const {name, checked} = e.target

    setCategory(prevCategories => ({
      ...prevCategories,
      [name]: checked
    }))

  }
    
  const filteredData = photos.filter(photo => {
    return(
      (photo.category === 1 && category.flowers) || (photo.category === 2 && category.animals) || (photo.category === 3 && category.cars)
    )
  })

  const handleDownloadClick = (id) => {
    setPhotos(prevPhoto => 
      prevPhoto.map(photo =>
        photo.id === id ? {...photo, downloads: photo.downloads + 1} : photo
      )
    )
  }

  return (
    <>
      <div className="container d-flex flex-column">
        <h1 className="h1 m-3">Kategorie zdjęć</h1>
        <div className="container d-flex">
          <div className="form-check form-switch m-3">
            <input className="form-check-input" type="checkbox" name="flowers" id="flowers" checked={category.flowers} onChange={handleCheckboxChange}/>
            <label className="form-check-label" htmlFor="flowers">Kwiaty</label>
          </div>
          <div className="form-check form-switch m-3">
            <input className="form-check-input" type="checkbox" name="animals" id="animals" checked={category.animals} onChange={handleCheckboxChange}/>
            <label className="form-check-label" htmlFor="animals">Zwierzęta</label>
          </div>
          <div className="form-check form-switch m-3">
            <input className="form-check-input" type="checkbox" name="cars" id="cars" checked={category.cars} onChange={handleCheckboxChange}/>
            <label className="form-check-label" htmlFor="cars">Samochody</label>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {filteredData.map(photo => (
                <div className="col-4 mb-3" key={photo.id}>
                    <img src={`/assets/${photo.filename}`} style={{margin: "5px", borderRadius: "20px"}} alt={photo.alt}></img>
                    <h4 className="h4">Pobrań: {photo.downloads}</h4>
                    <button className="btn btn-success" onClick={() => handleDownloadClick(photo.id)}>Pobierz</button>
                </div>
            ))}
          </div>
        </div>
        
      </div>
      
    </>
  )
}

export default App
