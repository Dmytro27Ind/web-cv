import React, { useState } from 'react'
import { useSelector } from "react-redux/es/exports";
import Toggle from 'react-toggle'
import './Toggle.css'

function ThemeToggle({onChange}) {
  const theme = useSelector(state => state.theme.theme)
  const [isDarkTheme] = useState(theme === 'dark')

  return (
    <label className='custom-toggle'>
        <span>Dark</span>
        <Toggle
            defaultChecked={!isDarkTheme}
            icons={{
              checked: null,
              unchecked: null,
            }}
            onChange={() => {
              onChange();
            }}
        />
        <span>Light</span>
    </label>
  )
}

export default ThemeToggle