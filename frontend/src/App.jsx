import Navbar from './components/Navbar.jsx'
import './App.css'
import { Inovation } from './components/Inovation.jsx'
import { Hero } from './components/Hero.jsx'
import { TeacherJourney } from './components/TeacherJourney.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Inovation />
      <TeacherJourney/>
    </>
  )
}

export default App
