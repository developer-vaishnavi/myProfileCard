import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="profile">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function SkillList() {
  return (
    <div className="skillset">
      {skills.map((sk) => (
        <Skill skill={sk.skill} color={sk.color} level={sk.level} />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div style={{ backgroundColor: color }} className="skill">
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
      </span>
    </div>
  );
}
function Avatar() {
  return (
    <img
      src="photo/profilephoto.jpg"
      alt="profilePhoto"
      className="profile-photo"
    ></img>
  );
}
function Intro() {
  return (
    <div>
      <h2>Vaishnavi Sinha</h2>
      <p>
        As a front-end developer with expertise in HTML, CSS, JavaScript, and
        React, I'm passionate about crafting engaging and interactive user
        experiences on the web. Beyond coding, I find joy in the art of
        calligraphy, where I indulge in the beauty of handwritten letters and
        intricate strokes.
      </p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
