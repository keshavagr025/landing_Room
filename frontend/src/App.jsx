import Navbar from './components/Navbar.jsx'
import './App.css'
import { Inovation } from './components/Inovation.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <div class='welcome'>
          Welcome to AttendyClass
        </div>
      <br />
        <h1>AI Powered Attendance System</h1>
        <br />
       <p>Revolutionizing the classroom with next-gen computer vision and voice biometrics. Trusted by educators for
            speed, accuracy, and security.</p>

            <div className='btn'>
              <button><a href="">Start AI Attendance</a></button>
              <br />
              <button>Explore Journey</button>
            </div>
      </main>

      <Inovation/>
    </>
  )
}

export default App
