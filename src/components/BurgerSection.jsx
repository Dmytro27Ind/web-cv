import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import ThemeToggle from './UI/toggle/ThemeToggle';
import { useDispatch } from "react-redux/es/exports";
import allActions from "../store/actions"

function BurgerSection() {
    const dispatch = useDispatch()

    const burgerClick = () => {
        let sidebar = document.getElementsByClassName('sidebar')
        sidebar[0].style['margin-left'] = '0px'
        let burgerArea = document.getElementsByClassName('burger__area')
        burgerArea[0].style.display = 'block'
    }
    const burgerAreaClick = () => {
        let sidebar = document.getElementsByClassName('sidebar')
        sidebar[0].style['margin-left'] = ''
        let burgerArea = document.getElementsByClassName('burger__area')
        burgerArea[0].style.display = 'none'
    }

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