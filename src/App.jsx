import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />
      </main>
    </div>
  )
}

export default App
