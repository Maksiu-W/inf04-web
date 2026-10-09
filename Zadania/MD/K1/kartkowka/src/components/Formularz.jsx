import { useState } from "react"
import kluby from "../wariant28"

function Formularz(){
    const [imieNazwisko, setImieNazwisko] = useState("")
    const [numer, setNumer] = useState("")

    const handleSubmit = (event) => {
      event.preventDefault()

      console.log("Imię i nazwisko: " + imieNazwisko)

      const index = parseInt(numer, 10) - 1
      if(kluby[index]){
        console.log("Wybrany klub: " + kluby[index])
      } 
      else{
        console.log("Nieprawidłowy numer klubu piłkarskiego!")
      }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='col-12 col-md-6 col-lg-4'>
            <div className='mb-3'>
                <label className='form-label'>Imię i nazwisko: </label>
                <input type='text' className='form-control' value={imieNazwisko} onChange={(e) => setImieNazwisko(e.target.value)}></input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Numer klubu piłkarskiego: </label>
                <input type='number' className='form-control' value={numer} onChange={(e) => setNumer(e.target.value)}></input>
            </div>
            <button type='submit' className='btn btn-primary'>Zatwierdź wybór</button>
            </form>
        </>
    );
}

export default Formularz