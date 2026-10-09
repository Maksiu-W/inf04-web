import { useState } from 'react'
import kluby from './wariant28'
import './App.css'

function Pozycja({nazwa})
{
  return <li>{nazwa}</li>
}

function App() {
  const [imieNazwisko, setImieNazwisko] = useState("")
  const [numer, setNumer] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log("Imię i nazwisko:" + imieNazwisko)

    const index = parseInt(numer, 10) - 1
    if(kluby[index]){
      console.log("Wybrany klub: " + kluby[index])
    } 
    else{
      console.log("Nieprawdidłowy numer klubu piłkarskiego!")
    }
  }

  return (
    <>
      
    </>
  )
}

export default App
