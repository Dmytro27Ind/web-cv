import React from 'react'
import VrLine from './UI/vrline/VrLine'
import ContactIcon from './UI/contactIcon/ContactIcon'

function ContactsSection() {
  return (
    <div className='main__section' id='contacts'>
        <h2>Contacts</h2>
        <div className='contacts__table'>
            <VrLine height={134} borderWidth={2}/>
            <div className='contacts__categories-wrapper'>
                <div className='contacts__categories'>
                    <ContactIcon size={15} name="gmail"/>
                    <h3>Mail:</h3>
                </div>
                <div className='contacts__categories'>
                    <ContactIcon size={15} name="github"/>
                    <h3>GitHub:</h3>
                </div>
                <div className='contacts__categories'>
                    <ContactIcon size={15} name="telegram"/>
                    <h3>Telegram:</h3>
                </div>
                <div className='contacts__categories'>
                <ContactIcon size={15} name="phone"/>
                    <h3>Phone:</h3>
                </div>
                <div className='contacts__categories'>
                    <ContactIcon size={15} name="devpost"/>
                    <h3>Devpost:</h3>
                </div>
            </div>
            <div className='contacts__data'>
                <a href='mailto:dmytro27kagirov@gmail.com' target="_blank" rel="noreferrer">
                    <span>dmytro27kagirov@gmail.com</span>
                </a>
                <a href='https://github.com/Dmytro27Ind' target="_blank" rel="noreferrer">
                    <span>github.com/Dmytro27Ind</span>
                </a>
                <a href='https://t.me/lyn10i' target="_blank" rel="noreferrer">
                    <span>@lyn10i</span>
                </a>
                <span>+421 951 338 470</span>
                <a href='https://devpost.com/dmytro27kagirov' target="_blank" rel="noreferrer">
                    <span>devpost.com/dmytro27kagirov</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ContactsSection