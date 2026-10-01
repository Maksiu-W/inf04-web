import { useState } from 'react'
import './App.css'
import photos from './data/photos.json'
import AddPhotoModal from './components/AddPhotoModal'
import CategoryBar from './components/CategoryBar'
import FiltersOffcanvas from './components/FiltersOffcanvas'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'

function App() {
const [zdjecia, setZdjecia] = useState(photos)

  return (
    <>
      <Navbar></Navbar>
    
      <header className='container py-4 py-lg-5'>
        <div className='row align-items-center g-3'>
          <div className='col-12 col-lg-8'>
            <h1 className='mb-2'>Galeria zdjęć</h1>
            <p className='lead text-body-secondary mb-0'>
              Zdjęcia z wypraw w góry, nad morze i po mieście.
              Wybierz kategoię, żeby zawęzić widok - albo powiększ zdjęcie, które ci się spodoba.
            </p>
          </div>
          <div className='col-12 col-lg-4'>
            <div className='d-flex flex-wrap gap-2 justify-content-lg-end'>
              <button type='button' className='btn btn-outline-secondary' data-bs-toggle='offcanvas' data-bs-target='#panelFiltrow'>
                Filtry
              </button>
              <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#dodajZdjecie'>
                Dodaj zdjęcie
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className='container'>
        <CategoryBar></CategoryBar>
        <Gallery zdjecia={zdjecia}></Gallery>
      </main>

      <Footer></Footer>
      <AddPhotoModal></AddPhotoModal>
      <FiltersOffcanvas></FiltersOffcanvas>
    </>
  )
}

export default App
