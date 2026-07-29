import Navbar from './components/Navbar.jsx'
import './App.css'
import { Inovation } from './components/Inovation.jsx'
import { Hero } from './components/Hero.jsx'
import { TeacherJourney } from './components/TeacherJourney.jsx'
import { TechStack } from './components/TechStack.jsx'
import { Student } from './components/Student.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Inovation />
      <TeacherJourney/>
      <TechStack/>
      <Student/>
    </>
  )
}

export default App
