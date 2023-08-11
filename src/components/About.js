export default function About() {
    return(
        <div>
            <h2>About Me</h2>
            <img           
            src={require(`../Assets/portfolio-pic.jpg`)}
          alt="Portfolio" heigth="200px" width="200px"/>
            <h5>Hello!<br></br>
            My name is Jessica Yun. Welcome to my portfolio!<br></br> 
            I am currently a student enrolled in the UC Berkeley Coding Bootcamp.<br></br>
            Please take a took at some of my projects and my resume!
            </h5>
        </div>
    )
}