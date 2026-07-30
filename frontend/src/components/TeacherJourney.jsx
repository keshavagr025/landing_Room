import React from 'react'
import Card from 'react-bootstrap/Card'
import './TeacherJourney.css'

const journeySteps = [
  {
    number: '1',
    title: 'Teacher Login',
    text: 'Log in to access your personalized classroom tools and attendance dashboard.',
    visual: '🧑‍🏫',
  },
  {
    number: '2',
    title: 'Dashboard Access',
    text: 'Open the teacher dashboard to manage lessons, attendance, and student progress.',
    visual: '📊',
  },
  {
    number: '3',
    title: 'Course Setup',
    text: 'Create lessons, assign subjects, and organize materials for each class.',
    visual: '📚',
  },
  {
    number: '4',
    title: 'AI Attendance',
    text: 'Use face and voice recognition to record attendance automatically and securely.',
    visual: '🤖',
  },
  {
    number: '5',
    title: 'Review Records',
    text: 'Check attendance history and analytics to support student follow-up.',
    visual: '🗂️',
  },
]

const teacherCards = [
  {
    icon: '👩‍🏫',
    title: 'Class Overview',
    text: 'See the full class roster, lesson plans, and real-time session details in one view.',
  },
  {
    icon: '📊',
    title: 'Attendance Insights',
    text: 'Track attendance trends and quickly identify students needing extra support.',
  },
  {
    icon: '🔔',
    title: 'Announcements',
    text: 'Share class updates, reminders, and alerts with students and parents instantly.',
  },
  {
    icon: '📁',
    title: 'Course Materials',
    text: 'Upload and organize teaching resources directly from the dashboard.',
  },
  {
    icon: '🧠',
    title: 'AI Attendance',
    text: 'Use face and voice AI systems to automate attendance and reduce manual work.',
  },
]

export const TeacherJourney = () => {
  return (
    <section className='teacher-journey-section'>
      <div className='teacher-journey-header'>
        <h1>The Teacher&apos;s Journey</h1>
        <p>
          A clean two-column flow: the left side explains the login and dashboard steps, and the right side highlights the teacher-facing cards.
        </p>
      </div>

      <div className='teacher-journey-grid'>
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

        <div className='journey-teacher-cards'>
          {teacherCards.map((card) => (
            <Card className='journey-teacher-card' key={card.title}>
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
