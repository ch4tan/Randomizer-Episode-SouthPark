import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import NavContext from './Components/Context';
import { useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import NavBar from './layouts/Header';
import Footer from './layouts/Footer'
import ErrorNotFound from './Pages/404';

function App() {
  const [darkmode, setDarkMode] = useState(true);

  return (
    <>
      <BrowserRouter>
        <NavContext.Provider value={{ darkmode, setDarkMode }}>
          <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<ErrorNotFound />} />
            </Routes>
          <Footer />
        </NavContext.Provider >
      </BrowserRouter>
    </>
  )
}

export default App
