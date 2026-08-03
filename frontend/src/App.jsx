import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { HeroSection } from './components/HeroSection/HeroSection';
import { FeaturesSection } from './components/FeaturesSection/FeaturesSection';
import { LiveDemoSection } from './components/LiveDemoSection/LiveDemoSection';
import { TechStack } from './components/TechStack';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <FeaturesSection />

        <LiveDemoSection />

        <TechStack />

        {/* Simple Call to Action Section */}
        <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
          <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(99, 102, 241, 0.1)' }}>
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              Ready to Upgrade Your Classroom?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Join thousands of educators who have eliminated manual attendance.
              Setup takes less than 5 minutes.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Get Started for Free
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '3rem 2rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-muted)', marginTop: '4rem' }}>
        <p>&copy; {new Date().getFullYear()} Attendy: AI-Powered Attendance. All rights reserved.</p>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Contact Support</a>
        </div>
      </footer>
    </>
  );
}

export default App;
