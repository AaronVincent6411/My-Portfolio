import React from "react";
import "./Skills.css";
import leadicon from '/src/assets/leadership-icon.png'

function Skills() {
  const skillsData = [
    {
      skillName: "Python",
      proficiencyLevel: 90,
      imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      skillName: "Leadership",
      proficiencyLevel: 90,
      imageSrc: leadicon,
    },
    {
      skillName: "C++",
      proficiencyLevel: 80,
      imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      skillName: "React",
      proficiencyLevel: 80,
      imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      skillName: "C",
      proficiencyLevel: 70,
      imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      skillName: "Flutter",
      proficiencyLevel: 70,
      imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      skillName: "Java",
      proficiencyLevel: 60,
      imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      skillName: "Pytorch",
      proficiencyLevel: 60,
      imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    },
  ];

  const skillsBars = skillsData.map((skill, index) => (
    <div className="skill-bar-container" key={index}>
      <img className="skill-icon" src={skill.imageSrc} alt={skill.skillName} />
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

  return (
    <div className="skills-rectangle-1">
      <h3>Skills</h3>
      <div className="skills-bars">{skillsBars}</div>
    </div>
  );
}

export default Skills;
