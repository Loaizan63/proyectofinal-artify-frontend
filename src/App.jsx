import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Reportar from "./components/Reportar"
import MisReportes from "./components/MisReportes"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="app-surface">
      <Header />
      <main className="main-shell">
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/reportar" element={<Reportar />}></Route>
          <Route path="/misReportes/:_id" element={<MisReportes />}></Route>
          <Route path="/misReportes/" element={<MisReportes />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
