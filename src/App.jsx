import './App.css'
import Navbars from './components/Navbars'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TransformerPaper from './pages/TransformerPaper/TransformerPaper'
import UnetPaper from './pages/UnetPaper/UnetPaper'
import StableDiffusion from './pages/StableDiffusion/StableDiffusion'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import React, { useState } from 'react'


function App() {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => setDarkTheme((prev) => !prev);

    return (
        <Router>
            <Navbars darkTheme={darkTheme} toggleTheme={toggleTheme} />
            <div className={darkTheme ? "app-root dark-theme" : "app-root"}>
                <div style={{ display: "flex" }}>
                    <Sidebar darkTheme={darkTheme} />
                    <div style={{ flex: 1, padding: "1rem" }}>
                        <Routes>
                            <Route path="/transformer-paper" element={<TransformerPaper />} />
                            <Route path="/unet-paper" element={<UnetPaper />} />
                            <Route path="/stable-diffusion" element={<StableDiffusion />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            {/* Add more routes as needed */}
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App
