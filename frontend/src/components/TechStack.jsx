import React from 'react'
import Card from 'react-bootstrap/Card'
import './TechStack.css'

const stackItems = [
  {
    icon: '⚛️',
    title: 'React',
    description: 'Build fast, interactive UI components with declarative rendering.',
  },
  {
    icon: '🚀',
    title: 'Vite',
    description: 'Enjoy instant hot updates and a modern frontend build pipeline.',
  },
  {
    icon: '🧩',
    title: 'React Bootstrap',
    description: 'Use accessible UI components that look great on any device.',
  },
  {
    icon: '🎨',
    title: 'Custom CSS',
    description: 'Simple, clean styling for a polished landing page experience.',
  },
]

export const TechStack = () => {
  return (
    <section className='techstack'>
      <div className='techstack-header'>
        <h1>Tech Stack</h1>
        <p>Core tools used in this project to deliver a polished, responsive frontend.</p>
      </div>
      <div className='techcards'>
        {stackItems.map((item) => (
          <Card key={item.title} className='tech-card'>
            <Card.Body>
              <div className='tech-icon'>{item.icon}</div>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  )
}
