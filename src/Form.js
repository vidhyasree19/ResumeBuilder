import React,{useState} from 'react'

import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate=useNavigate();
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    
    const [degree, setDegree] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [college, setCollege] = useState('');
    const [startingYear, setStartingYear] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [skills, setSkills] = useState('');
    const [objective,setObjective]=useState('');
    const [experiences, setExperiences] = useState([{ companyName: '', startYear: '', endYear: '', present: false, summary: '' }]);
    const [projects, setProjects] = useState([{ title: '', summary: '' }]);
    const [certifications, setCertifications] = useState([{ name: '', issuingOrganization: '', issueDate: '' }]);
    const [place, setPlace] = useState('');
    const [signature, setSignature] = useState('');
    const [photo, setPhoto] = useState(null); 


    const handleExperienceChange = (index, key, value) => {
      const newExperiences = experiences.map((experience, i) => 
        i === index ? { ...experience, [key]: value } : experience
      );
      
      if (key === 'present' && !value) {
        newExperiences[index].endYear = '';
      }
      setExperiences(newExperiences);
  };
    
      const addExperience = () => {
        setExperiences([...experiences, { companyName: '', startYear: '', endYear: '', present: false, summary: '' }]);
      };
      const handleProjectChange = (index, key, value) => {
        const newProjects = projects.map((project, i) => 
          i === index ? { ...project, [key]: value } : project
        );
        setProjects(newProjects);
      };
    
      const addProject = () => {
        setProjects([...projects, { title: '', summary: '' }]);
      };
    
      const handleCertificationChange = (index, key, value) => {
        const newCertifications = certifications.map((certification, i) =>
          i === index ? { ...certification, [key]: value } : certification
        );
        setCertifications(newCertifications);
      };
    
      const addCertification = () => {
        setCertifications([...certifications, { name: '', issuingOrganization: '', issueDate: '' }]);
      };
      const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]); 
      };
      const handleEducationChange = (key, value) => {
        switch (key) {
            case 'degree':
                setDegree(value);
                break;
            case 'specialization':
                setSpecialization(value);
                break;
            case 'college':
                setCollege(value);
                break;
            case 'startingYear':
                setStartingYear(value);
                break;
            case 'graduationYear':
                setGraduationYear(value);
                break;
            default:
                break;
        }
    };

    
      const handleSubmit = (e) =>{
       e.preventDefault();
       if (!firstname || !lastname || !email ) {
        alert('Please fill out all required fields.');
        return;
    }
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
       const data = {
        firstname,
        lastname,
        email,
        objective,
        college,
        skills,
        experiences,
        projects,
        certifications,
        place,
        signature,
        photo,
        degree,
        specialization,
        startingYear,
        graduationYear
      };
      
       navigate('/preview', { state: data });
      }
      const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleFirstName = (e) => {
      const inputValue = e.target.value;
      
      
      if (/^[A-Za-z\s]+$/.test(inputValue) || inputValue === '') {
        
        setFirstName(inputValue);
      }
    };
    const handleLastName = (e) => {
      const inputValue = e.target.value;
      
      
      if (/^[A-Za-z\s]+$/.test(inputValue) || inputValue === '') {
        
        setLastName(inputValue);
      }
    };

  return (
    <form className='form-container' onSubmit={handleSubmit} >
      <h2>Resume Builder</h2>
      <div className='personal-info'>
        <h3>Personal Information</h3>
        <div className='form-inputs'>
          <label>First Name:</label>
          <input 
            type="text" 
            placeholder='Enter Firstname' 
            id='firstname' 
            value={firstname} 
            
            onChange={handleFirstName} 
            pattern="[A-Za-z/s]+"
          />
          <label>Last Name:</label>
          <input 
            type="text" 
            placeholder='Enter Lastname' 
            id='lastname' 
            value={lastname} 
            pattern="[A-Za-z/s]+"
            onChange={handleLastName} 
          />
          <label>Email:</label>
          <input 
            type="email" 
            placeholder='Enter Email' 
            id='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        
        
       <div className="photo-container">
        <label >Photo:</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handlePhotoChange} 
            
          />
          </div>
       
        <div className='career-obj'>
        <h3>Career Objective/Summary:</h3>
        <textarea
            placeholder='Enter Career Objective'
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
        ></textarea>
        </div>

        <div className="education">
                <h3>Education</h3>
                <h4>Graduation Details</h4>
                <label>Choose your degree:</label>
                <select
                    className="degree-options"
                    value={degree}
                    onChange={(e) => handleEducationChange('degree', e.target.value)}
                >   <option>--</option>
                    <option>BTech</option>
                    <option>BBA</option>
                    <option>BCA</option>
                    <option>BE</option>
                </select>
                <label>Choose your specialization:</label>
                <select
                    className="specialization-options"
                    value={specialization}
                    onChange={(e) => handleEducationChange('specialization', e.target.value)}
                >   <option>--</option>
                    <option>CSE</option>
                    <option>EEE</option>
                    <option>ECE</option>
                    <option>IT</option>
                    <option>MECH</option>
                    <option>CIVIL</option>
                    <option>CAD</option>
                </select>
                <label>Enter College Name:</label>
                <input
                    type="text"
                    id="college-name"
                    value={college}
                    placeholder="Enter college name"
                    onChange={(e) => handleEducationChange('college', e.target.value)}
                />
                <label>Starting year:</label>
                <select
                    className="starting-year"
                    value={startingYear}
                    onChange={(e) => handleEducationChange('startingYear', e.target.value)}
                >   <option>--</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                </select>
                <label>Graduation year:</label>
                <select
                    className="graduation-year"
                    value={graduationYear}
                    onChange={(e) => handleEducationChange('graduationYear', e.target.value)}
                >   <option>--</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                </select>
            </div>


    </div>
    <div className='technical-skills'>
        <h3>Technical Skills</h3>
        <label>List your skills:</label>
        <textarea 
          placeholder='Enter your technical skills' 
          value={skills} 
          onChange={(e) => setSkills(e.target.value)} 
        ></textarea>
      </div>
      <div className='experience'>
        <h3>Experience</h3>
        {experiences.map((experience, index) => (
          <div key={index} className='experience-section'>
            <label>Company Name:</label>
            <input 
              type="text" 
              placeholder='Enter Company Name' 
              value={experience.companyName} 
              onChange={(e) => handleExperienceChange(index, 'companyName', e.target.value)} 
            />
            <label>Starting Year:</label>
            <input 
              type="text" 
              placeholder='Enter Starting Year' 
              value={experience.startYear} 

              onChange={(e) => handleExperienceChange(index, 'startYear', e.target.value)} 
              
            />
            <label>Ending Year:</label>
            <input 
              type="text" 
              placeholder='Enter Ending Year' 
              value={experience.endYear} 

              onChange={(e) => handleExperienceChange(index, 'endYear', e.target.value)} 
              disabled={experience.present}
              pattern="\d{4}"
            />
            <label>
              <input 
                type="checkbox" 
                checked={experience.present} 
                onChange={(e) => handleExperienceChange(index, 'present', e.target.checked)}
              />
              Present
            </label>
            <label>Summary:</label>
            <textarea 
              placeholder='Enter your experience summary' 
              value={experience.summary} 
              onChange={(e) => handleExperienceChange(index, 'summary', e.target.value)}
            ></textarea>
          </div>
        ))}
        <button type="button" onClick={addExperience}>Add Another Experience</button>
      </div>
      <div className='projects'>
        <h3>Projects</h3>
        {projects.map((project, index) => (
          <div key={index} className='project-section'>
            <label>Project Title:</label>
            <input 
              type="text" 
              placeholder='Enter Project Title' 
              value={project.title} 
              onChange={(e) => handleProjectChange(index, 'title', e.target.value)} 
            />
            <label>Project Summary:</label>
            <textarea 
              placeholder='Enter Project Summary' 
              value={project.summary} 
              onChange={(e) => handleProjectChange(index, 'summary', e.target.value)}
            ></textarea>
          </div>
        ))}
        <button type="button" onClick={addProject}>Add Another Project</button>
      </div>
      <div className='certifications'>
        <h3>Certifications</h3>
        {certifications.map((certification, index) => (
          <div key={index} className='certification-section'>
            <label>Certification Name:</label>
            <input 
              type="text" 
              placeholder='Enter Certification Name' 
              value={certification.name} 
              onChange={(e) => handleCertificationChange(index, 'name', e.target.value)} 
            />
            <label>Issuing Organization:</label>
            <input 
              type="text" 
              placeholder='Enter Issuing Organization' 
              value={certification.issuingOrganization} 
              onChange={(e) => handleCertificationChange(index, 'issuingOrganization', e.target.value)} 
            />
            <label>Issue Date:</label>
            <input 
              type="date" 
              placeholder='Enter Issue Date' 
              value={certification.issueDate} 
              onChange={(e) => handleCertificationChange(index, 'issueDate', e.target.value)} 
            />
          </div>
        ))}
        <button type="button" onClick={addCertification}>Add Another Certification</button>
      </div>
      <div className='additional-info'>
        <h3>Additional Information</h3>
        <div className='place'>
          <label>Place:</label>
          <input 
            type="text" 
            placeholder='Enter Place' 
            value={place}
            onChange={(e) => setPlace(e.target.value)} 
          />
        </div>
        <div className='signature'>
          <label>Signature (Name):</label>
          <input 
            type="text" 
            placeholder='Enter Your Name'
            value={signature} 
            onChange={(e) => setSignature(e.target.value)} 
          />
        </div>
      </div>
      
      <div>
        <button type='submit' >Submit</button>
      </div>
      </form>
  )
}

export default Form;
