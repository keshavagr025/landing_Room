import React, { useState } from 'react';
import './Features.css';
import { CiCamera } from "react-icons/ci";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { LuTrainTrack } from "react-icons/lu";
import { ImQrcode } from "react-icons/im";
import { FaRegFaceLaughBeam } from "react-icons/fa6";
import { IoPodiumOutline } from "react-icons/io5";

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('teachers');

  const teacherFeatures = [
    { icon: <CiCamera />, title: 'Face Recognition', description: 'Automatically identify present students with our highly-accurate dlib-based facial scanning.' },
    { icon: <MdOutlineRecordVoiceOver />, title: 'Voice Biometrics', description: 'Mark attendance seamlessly via deep learning-based voice embeddings.' },
    { icon: <LuTrainTrack />, title: 'Automated Insights', description: 'Track real-time attendance logs and export detailed reports in a single click.' }
  ];

  const studentFeatures = [
    { icon: <ImQrcode />, title: 'Simple Enrollment', description: 'Join classes instantly by entering a 4-digit code or scanning a dynamically generated QR Code.' },
    { icon: <FaRegFaceLaughBeam />, title: 'Secure Biometrics', description: 'Your facial and voice embeddings are securely processed and matched via SVC.' },
    { icon: <IoPodiumOutline />, title: 'Track Progress', description: 'View beautiful charts and historical records of your attendance across all enrolled subjects.' }
  ];

  const currentFeatures = activeTab === 'teachers' ? teacherFeatures : studentFeatures;

  return (
    <section id="features" className="features-section">
      <div className="section-header">
        <h2 className="gradient-text">Built for Modern Education</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          Whether you're managing a 500-student lecture hall or attending a specialized seminar,
          Attendy provides the tools you need.
        </p>
      </div>

      <div className="tab-container">
        <button
          className={`tab-btn ${activeTab === 'teachers' ? 'active' : ''}`}
          onClick={() => setActiveTab('teachers')}
        >
          For Teachers
        </button>
        <button
          className={`tab-btn ${activeTab === 'students' ? 'active' : ''}`}
          onClick={() => setActiveTab('students')}
        >
          For Students
        </button>
      </div>

      <div className="features-grid animate-fade-in" key={activeTab}>
        {currentFeatures.map((feature, idx) => (
          <FeatureCard
            key={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};
