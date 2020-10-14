import React, {useState} from 'react';
import {MenuItems} from './MenuItems';
import {Link} from 'react-router-dom';
import './Dropdown.css';



const Dropdown = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return(
        <>
        <ul className={click ? 'dropdown-menu clicked' : 'dropdown-menu'} onClick={handleClick}>
            {MenuItems.map((items,id) => {
                return(
                    <li key={items.id} >
                        <Link className={items.cName} to={items.path} onClick={ () => setClick(false)}>
                            {items.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}
export default Dropdown; 