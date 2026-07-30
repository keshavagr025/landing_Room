import React from 'react'
import Card from 'react-bootstrap/Card'
import './Student.css'

const journeySteps = [
  {
    number: '1',
    title: 'Student Login',
    text: 'Sign in to access classroom resources, schedules, and attendance details.',
    visual: '🧑‍🎓',
  },
  {
    number: '2',
    title: 'Join Lesson',
    text: 'Join class sessions and stay connected with assignments and teacher notes.',
    visual: '🏫',
  },
  {
    number: '3',
    title: 'Automatic Attendance',
    text: 'Attendance is captured using secure AI-powered face or voice recognition.',
    visual: '📡',
  },
  {
    number: '4',
    title: 'Progress Review',
    text: 'View attendance history and performance feedback in your dashboard.',
    visual: '📈',
  },
]

const studentCards = [
  {
    icon: '👩‍🏫',
    title: 'Class Overview',
    text: 'See the full class roster, upcoming lessons, and live attendance status in one place.',
  },
  {
    icon: '📊',
    title: 'Attendance Insights',
    text: 'Track daily attendance trends and easily identify students who need follow-up.',
  },
  {
    icon: '💬',
    title: 'Announcements',
    text: 'Publish quick messages to students and parents directly from your dashboard.',
  },
  {
    icon: '💬',
    title: 'Announcements',
    text: 'Publish quick messages to students and parents directly from your dashboard.',
  },
  {
    icon: '💬',
    title: 'Announcements',
    text: 'Publish quick messages to students and parents directly from your dashboard.',
  },
]

export const Student = () => {
  return (
    <section className='student-journey-section'>
      <div className='student-journey-header'>
        <h1>The Student&apos;s Journey</h1>
        <p>
          Students move from login to class participation, then attendance tracking and progress review.
        </p>
      </div>

      <div className='student-journey-grid'>
        <div className='journey-steps'>
          {journeySteps.map((step) => (
            <div className='journey-step-card' key={step.number}>
              <div className='step-label'>
                <div className='step-number'>{step.number}</div>
                <h2>{step.title}</h2>
              </div>
              <p>{step.text}</p>
              {step.visual && (
                <div className='step-visual-wrapper'>
                  <div className='step-visual'>{step.visual}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='journey-student-cards'>
          {studentCards.map((card) => (
            <Card className='journey-student-card' key={card.title}>
              <Card.Body>
                <div className='journey-card-icon'>{card.icon}</div>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
