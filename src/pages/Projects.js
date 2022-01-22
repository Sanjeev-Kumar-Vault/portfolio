import { FaGithub,FaVideo } from "react-icons/fa"
import { useState } from "react/cjs/react.development"
import { Project } from "../data/Project"
const Projects = () =>{
     // eslint-disable-next-line
    const [cards,setCards]=useState(Project);
    return(
        <>
            
            <section className="Project">
                <h1>Projects</h1>
                    <div className="card">
                    {cards.map(({ id, name, description,keywords, github, demo, image }) => (
                        <article key={id}>
                        <img src={image} alt={name} />
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <h5>{keywords}</h5>
                        <ul>
                            <li>
                            <a
                                href={github}
                                target="_blank"
                                rel="noopenner noreferrer"
                                className="github"
                            >
                                <FaGithub style={{ marginRight: 5 }} /> GitHub
                            </a>
                            </li>
                            <li>
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopenner noreferrer"
                                className="demo"
                            >
                                <FaVideo style={{ marginRight: 5 }} /> Demo
                            </a>
                            </li>
                        </ul>
                        </article>
                    ))}
                        </div>
                                   
            </section>
        </>
    )

}
export default Projects