import Header from './components/Header/Header.jsx';
import HeroBanner from './components/HeroBanner/HeroBanner.jsx'; // 1. Importar el componente
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner /> {/* 2. Añadir el componente aquí */}
        {/* Más adelante aquí irán las otras secciones de la página */}
      </main>
      <Footer />
    </>
  )
}

export default App;