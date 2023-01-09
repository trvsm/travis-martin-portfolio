import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h2 className="projects__title">My projects</h2>
      <div className="projects__gallery">
        <div className="projects__feature projects__feature--meal">
          <h3 className="projects__name">Meal Planner</h3>
          <p className="projects__description">
            View & select recipes, compile a shopping list. React, Express, Node
          </p>
        </div>
        <a
          href="https://github.com/trvsm/ea-industry-frontend"
          target={"blank"}
          className="projects__feature projects__feature--ea"
        >
          <h3 className="projects__name">
            BrainStation/EA Industry Partner Hackathon
          </h3>
          <p className="projects__description">
            24 Hour hackathon. Mission: encourage adoption of the EA App. React
            SPA
          </p>
        </a>
        <a
          href="https://github.com/trvsm/coding-exercises"
          target={"blank"}
          className="projects__feature projects__feature--exercise"
        >
          <h3 className="projects__name">Coding Exercises</h3>
          <p className="projects__description">
            Daily notes & Exercises, JavaScript
          </p>
        </a>
      </div>
    </div>
  );
}
