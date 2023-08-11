import Project from './Project'

export default function Portfolio() {
    // fill in the required data, image file should be in the assets folder and name should match exactly including extension
  const projects = [
    {
      name: "project 1",
      description: "HTML/JS/CSS",
      link: "https://jssoyoung.github.io/Javascript-Fundamentals-Quiz/",
      repo: "https://github.com/jssoyoung/Javascript-Fundamentals-Quiz",
      image: "javascript-quiz-screenshot.png",
    },
    {
      name: "project 2",
      description: "NRG Stack",
      link: "https://jssoyoung.github.io/Leafy-locators/",
      repo: "https://github.com/jssoyoung/Leafy-locators",
      image: "Leafy-locators.png",
    },
    {
        name: "project 3",
        description: "HTML/JS/CSS",
        link: "https://jssoyoung.github.io/Daily-Planner/",
        repo: "https://github.com/jssoyoung/Daily-Planner",
        image: "planner-screenshot.png",
    },
    {
        name: "project 4",
        description: "HTML/JS/CSS",
        link: "https://morning-reef-32833.herokuapp.com/",
        repo: "https://github.com/jssoyoung/Note-Taker",
        image: "Note-taker.png",
    },
    {
        name: "project 5",
        description: "HTML/JS/CSS",
        link: "https://ancient-taiga-70908-d990270dd0d3.herokuapp.com/",
        repo: "https://github.com/jssoyoung/Text-Editor",
        image: "Text-Editor.png",
    },
    {
        name: "project 6",
        description: "Handlebars/JS/CSS",
        link: "https://lit-retreat-91915-8f068b8cfb99.herokuapp.com/",
        repo: "https://github.com/jssoyoung/Pet-locators",
        image: "pet-locators.png",
    },
  ];
    return(
    <div>
      <div className="d-flex">
        {projects.map((project) => (
          <Project project={project} key={"project=" + project.name} />
        ))}
      </div>
    </div>
    )
}