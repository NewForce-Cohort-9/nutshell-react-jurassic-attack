import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageGallery } from './components/images/ImageGallery'


function App() {
  const [count, setCount] = useState(0)

  return <Routes>
    <Route path="/images" element={<ImageGallery />} />
  </Routes>
}

export default App
