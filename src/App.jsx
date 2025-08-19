import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Reportar from "./components/Reportar"
import MisReportes from "./components/MisReportes"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/reportar" element={<Reportar />}></Route>
        <Route path="/misReportes/:_id" element={<MisReportes />}></Route>
        <Route path="/misReportes/" element={<MisReportes />}></Route>
      </Routes>
    </>
  )
}

export default App
