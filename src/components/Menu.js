import { useState } from 'react';
import {BiMenuAltRight} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { Navbar } from '../data/Navbar';
const Menu =()=>{
    const [open, setOpen]=useState(false);
     // eslint-disable-next-line
    const [links,setLinks]=useState(Navbar);
    return(
        <>
            <div className='menu-btn'>
                    <button onClick={()=>setOpen(!open)}>
                        <BiMenuAltRight />
                    </button>
            </div>
            <header className={`${open ? 'header open' :'header'}`}>
                <nav>
                    <ul>
                        {links.map((link)=>{
                            return(
                                <li key ={link.id} onClick={()=>{setOpen(!open)}}>
                                    <Link to ={link.url}>{link.name}</Link>
                                </li >
                            );    
                        })}
                   </ul>
                </nav>
            </header> 
            
        </>
    );
}
export default Menu;