import Project from './Project'

export default function Portfolio() {
    // fill in the required data, image file should be in the assets folder and name should match exactly including extension
  const projects = [
    {
      name: "project 1",
      description: "HTML/JS/CSS",
      link: "https://heroku.com",
      repo: "https://github.com/p1",
      image: "cat.jpeg",
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
        link: "https://heroku.com",
        repo: "https://github.com/p1",
        image: "cat.jpeg",
    },
    {
        name: "project 4",
        description: "HTML/JS/CSS",
        link: "https://heroku.com",
        repo: "https://github.com/p1",
        image: "cat.jpeg",
    },
    {
        name: "project 5",
        description: "HTML/JS/CSS",
        link: "https://heroku.com",
        repo: "https://github.com/p1",
        image: "cat.jpeg",
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