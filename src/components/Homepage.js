import {FaLinkedin, FaGithub} from 'react-icons/fa'
const Homepage =()=>{
    return(
        <section className='homepage'>
            <div className='overlay'>
                <h1>Sanjeev kumar</h1>
                <p>Front-end Web Developer</p>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/sanjeev-kumar-247770119/" target="_blank" rel ="noopennernoreferrer"><FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="https://github.com/Sanjeev-Kumar-Vault" target="_blank" rel ="noopennernoreferrer"><FaGithub /></a>
                    </li>
                </ul>

            </div>
        </section>
    );
}
export default Homepage