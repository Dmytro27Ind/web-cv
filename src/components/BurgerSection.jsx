import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import ThemeToggle from './UI/toggle/ThemeToggle';
import { useDispatch } from "react-redux/es/exports";
import allActions from "../store/actions"
import { useSidebar } from '../hooks/useSidebar';

function BurgerSection() {
    const dispatch = useDispatch()
    const [burgerClick, burgerAreaClick] = useSidebar();

  return (
    <div className='burger'>
        <div className='burger__area' onClick={burgerAreaClick}></div>
        <GiHamburgerMenu onClick={burgerClick} className='burger-icon'/>
        <h1 className='burger__name'>Bc. Dmytro Kagirov</h1>
        <div className='burger__toggle'>
            <ThemeToggle onChange={() => dispatch(allActions.switchTheme())}/>
        </div>
    </div>
  )
}

export default BurgerSection