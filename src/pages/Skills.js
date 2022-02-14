import { skill } from "../data/Skill"
const Skills =() =>{
    return(
        <>
            <div className="Skills">
                <h1>Skills</h1>
                <div className="Cards">
                    {
                        skill.map(({id,name,image})=>{
                            return<article className="Card">
                                <img src={image} alt =""/>
                                <p>{name}</p>
                            </article>
                        })
                    }
                </div>
            </div>
                
        </>

    )

}

export default Skills
