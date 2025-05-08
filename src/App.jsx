import Navbar from './Nav'
import MenuFood from './Menu'
import MenuBeverage from './MenuBeverage'
import Home from './Home'
import Reservation from './Reservation'
import Order from './Order'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Modules'

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu-Food" element={<MenuFood />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Menu-Beverage" element={<MenuBeverage />} />
      </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default App
