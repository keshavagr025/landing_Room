import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Inovation = () => {
    return (
        <div className='heading'>
            <h1>Innvovation Features</h1>
            <div className="card-container">
                <Card className="feature-card">
                    <Card.Body>
                        <div className="icon-box">📸</div>

                        <Card.Title className="feature-title">
                            AI Face Analysis
                        </Card.Title>

                        <Card.Text className="feature-text">
                            Advanced neural networks recognize every student's face from a
                            single class photo, making attendance instant and accurate.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="feature-card">
                    <Card.Body>
                        <div className="icon-box">🎤</div>

                        <Card.Title className="feature-title">
                            Sequential Voice ID
                        </Card.Title>

                        <Card.Text className="feature-text">
                            Students say "Present" one-by-one, and our AI matches their
                            voice for secure attendance.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="feature-card">
                    <Card.Body>
                        <div className="icon-box">📱</div>

                        <Card.Title className="feature-title">
                            QR-Driven Roster
                        </Card.Title>

                        <Card.Text className="feature-text">
                            Course codes generate unique QR access for instant student
                            enrollment.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}
