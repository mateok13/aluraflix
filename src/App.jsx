import { useEffect } from 'react'
import Banner from './components/Banner'
import ListarCategorias from './components/Card/ListarCategorias'
import './App.css'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <div className='listaCategorias'>
        <ListarCategorias url={"/categorias"} />
      </div>
    </>
  )
}

export default App