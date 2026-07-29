import React from 'react'
import Card from 'react-bootstrap/Card'
// import './TeacherJourney.css'

const journeySteps = [
  {
    number: '1',
    title: 'Teacher Login',
    text: 'Teachers sign in securely to access their personal classroom dashboard and teaching tools.',
    image: '/src/assets/step-login.png',
  },
  {
    number: '2',
    title: 'Teacher Dashboard',
    text: 'From the dashboard, they monitor classes, attendance, announcements and student progress.',
    image: '/src/assets/step-dashboard.png',
  },
  {
    number: '3',
    title: 'Course Management',
    text: 'Creating new subjects and managing curriculum with AI-assisted tools.',
    image: '/src/assets/step-course-management.png',
  },
  {
    number: '4',
    title: 'Face AI Recognition System',
    text: 'Students can get attendance using face screening powered by AI.',
    image: '/src/assets/step-face-ai.png',
  },
  {
    number: '5',
    title: 'Voice Recognition System',
    text: 'Students can get attendance with voice recording and AI verification.',
    image: '/src/assets/step-voice-ai.png',
  },
  {
    number: '6',
    title: 'Attendance Record System',
    text: 'View attendance records and analytics stored securely with Supabase.',
    image: '/src/assets/step-attendance-record.png',
  }
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
    <section className='Student-journey-section'>
      <div className='Student-journey-header'>
        <h1>The Student&apos;s Journey</h1>
        <p>
          A clean two-column flow: the left side explains the login and dashboard steps, and the right side highlights the teacher-facing cards.
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
              {step.image && (
                <div className='step-image-wrapper'>
                  <img src={step.image} alt={step.title} className='step-image' />
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
