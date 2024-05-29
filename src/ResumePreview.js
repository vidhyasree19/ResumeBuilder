import React from 'react';
import { useLocation } from 'react-router-dom';
import './Resume.css' 

const ResumePreview = () => {
  const location = useLocation();
  const data = location.state || {}; 

  const {
    firstname = '',
    lastname = '',
    email = '',
    objective = '',
    college = '',
    skills = '',
    experiences = [],
    projects = [],
    certifications = [],
    place = '',
    signature = '',
    photo = null,
    degree = '',
    specialization = '',
    startingYear = '',
    graduationYear = ''
  } = data;

  const photoURL = photo ? URL.createObjectURL(photo) : null;

 
  const isDataEntered =
    firstname ||
    lastname ||
    email ||
    objective ||
    college ||
    skills ||
    experiences.length > 0 ||
    projects.length > 0 ||
    certifications.length > 0 ||
    place ||
    signature ||
    photo;

  
  if (!isDataEntered) {
    return null;
  }

  return (
    <div className="resume-container">
      <h1>{firstname} {lastname}</h1>
      {photoURL && <img src={photoURL} alt="Profile" className="profile-photo" />}
      <p><strong>Email:</strong> {email}</p>

      {objective && (
        <div className="resume-section">
          <h2>Career Objective</h2>
          <p><strong>{objective}</strong></p>
        </div>
      )}

      {degree && (
        <div className="resume-section">
          <h2>Education</h2>
          <p><strong>Degree:</strong> {degree}</p>
          <p><strong>Specialization:</strong> {specialization}</p>
          <p><strong>College:</strong> {college}</p>
          <p><strong>Starting Year:</strong> {startingYear}</p>
          <p><strong>Graduation Year:</strong> {graduationYear}</p>
        </div>
      )}

      {skills && (
        <div className="resume-section">
          <h2>Technical Skills</h2>
          <p>{skills}</p>
        </div>
      )}

      {experiences.length > 0 && (
        <div className="resume-section">
          <h2>Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-section">
              <p><strong>Company Name:</strong> {exp.companyName}</p>
              <p><strong>Start Year:</strong> {exp.startYear}</p>
              <p><strong>End Year:</strong> {exp.present ? 'Present' : exp.endYear}</p>
              <p><strong>Summary:</strong> {exp.summary}</p>
            </div>
          ))}
        </div>
      )}

      {projects.length > 0 && (
        <div className="resume-section">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="project-section">
              <p><strong>Title:</strong> {project.title}</p>
              <p><strong>Summary:</strong> {project.summary}</p>
            </div>
          ))}
        </div>
      )}

      {certifications.length > 0 && (
        <div className="resume-section">
          <h2>Certifications</h2>
          {certifications.map((cert, index) => (
            <div key={index} className="certification-section">
              <p><strong>Name:</strong> {cert.name}</p>
              <p><strong>Issuing Organization:</strong> {cert.issuingOrganization}</p>
              <p><strong>Issue Date:</strong> {cert.issueDate}</p>
            </div>
          ))}
        </div>
      )}

      {place && signature && (
        <div className="resume-section">
          <h2>Declaration</h2>
          <div className="declaration-section">
            <div>
              <p><strong>Place:</strong> {place}</p>
            </div>
            <div>
              <p><strong>Signature:</strong> {signature}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
