import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage.jsx'; // 1. Importar HomePage

function App() {
  return (
    <>
      <Header />
      <main>
        <HomePage /> {/* 2. Renderizar la página de inicio aquí */}
      </main>
      <Footer />
    </>
  )
}

export default App;