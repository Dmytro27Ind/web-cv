import React from 'react'
import VrLine from './UI/vrline/VrLine'

function ContactsSection() {
  return (
    <div className='main__section'>
        <h2>Contacts</h2>
        <div className='contacts__table'>
            <VrLine height={127} borderWidth={2}/>
            <div className='contacts__categories'>
                <h3>Mail:</h3>
                <h3>GitHub:</h3>
                <h3>Telegram:</h3>
                <h3>Phone:</h3>
                <h3>Devpost:</h3>
            </div>
            <div className='contacts__data'>
                <a href='mailto:dmytro27kagirov@gmail.com'><span>dmytro27kagirov@gmail.com</span></a>
                <a href='https://github.com/Dmytro27Ind'><span>github.com/Dmytro27Ind</span></a>
                <a><span>@lyn10i</span></a>
                <span>+421 951 338 470</span>
                <a><span>devpost.com/dmytro27kagirov</span></a>
            </div>
        </div>
    </div>
  )
}

export default ContactsSection