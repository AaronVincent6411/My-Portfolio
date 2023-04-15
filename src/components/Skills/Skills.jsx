import React from "react";
import './Skills.css';

function Skills() {

  const skillsData = [
    { skillName: 'JavaScript', proficiencyLevel: 80 },
    { skillName: 'HTML/CSS', proficiencyLevel: 90 },
    { skillName: 'React', proficiencyLevel: 70 },
    { skillName: 'Node.js', proficiencyLevel: 60 },
    { skillName: 'Git', proficiencyLevel: 80 },
  ];

  const skillsBars = skillsData.map((skill, index) => (
    <div className="skill-bar-container" key={index}>
      <div className="skill-name">{skill.skillName}</div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{ width: `${skill.proficiencyLevel}%` }}
        />
      </div>
      <div className="skill-level">{skill.proficiencyLevel}%</div>
    </div>
  ));

  return(
    <div className="skills-rectangle-1">
      <h3>
        Skills
      </h3>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className='Skills-CPP'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className='Skills-Python'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className='Skills-C'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='Skills-React'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className='Skills-Java'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className='Skills-Flutter'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" className='Skills-Pytorch'/>
      <div className="skills-bars">{skillsBars}</div>
    </div>
  );
}

export default Skills