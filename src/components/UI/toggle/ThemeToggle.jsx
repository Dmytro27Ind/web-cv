import React, { useEffect } from 'react'
import { useSelector } from "react-redux/es/exports";
import Toggle from 'react-toggle'
import './Toggle.css'

function ThemeToggle({onChange}) {
  const theme = useSelector(state => state.theme.theme)

  useEffect(() => {
    console.log(theme === 'dark')
  }, [theme])

  return (
    <label className='custom-toggle'>
        <span>Dark</span>
        <Toggle
            checked={!(theme === 'dark')}
            icons={{
              checked: null,
              unchecked: null,
            }}
            onChange={onChange}
        />
        <span>Light</span>
    </label>
  )
}

export default ThemeToggle