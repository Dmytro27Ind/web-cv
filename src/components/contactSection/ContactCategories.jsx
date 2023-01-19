import React from 'react'
import ContactIcon from '../UI/contactIcon/ContactIcon'

function ContactCategories({name, label}) {
  return (
    <div className='contacts__categories'>
        <ContactIcon size={15} name={name}/>
        <h3>{label}</h3>
    </div>
  )
}

export default ContactCategories