import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h2 className="projects__title">My projects</h2>
      <div className="projects__gallery">
        <div className="projects__feature">Meal Planner</div>
        <div className="projects__feature">
          <h3 className="projects__name">
            BrainStation/EA Industry Partner Hackathon
          </h3></div>
        <div className="projects__feature">Coding Exercises</div>
      </div>
    </div>
  );
}
