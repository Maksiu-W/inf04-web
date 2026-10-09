import kluby from './wariant28'
import "bootstrap/dist/css/bootstrap.min.css";
import Pozycja from './components/Pozycja';
import Formularz from './components/Formularz';

function App() {
  return (
    <>
      <div className='container mt-4'>
        <h2 className='mb-4'>
          Liczba klubów piłkarskich: {kluby.length}
        </h2>

        <ol className='mb-4'>
          {kluby.map((klub, index) => (
            <Pozycja key={index} nazwa={klub}></Pozycja>
          ))}
        </ol>

        <Formularz />
      </div>
    </>
  )
}

export default App