import React from 'react'
import Card from 'react-bootstrap/Card'

export const TechStack = () => {
  return (
    <section className='techstack'>
        <h1>TechStack</h1>
        <div className='cards'>
            
            <Card className="card-feature">
                <Card.Body>
                        <div className="icon-box">📸</div>
                         <Card.Title className="feature-title">
                            React
                        </Card.Title>
                </Card.Body>
            </Card>
        </div>
    </section>
  )
}
