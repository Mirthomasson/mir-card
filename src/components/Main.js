import React from 'react'
import envelope from '../images/email.png'
import linkedin from '../images/linkedin-logo.png'

export default function Main() {
  return (
    <main>
        <h1>Miranda Thomasson</h1>
        <p className='title'>Frontend Developer</p>
        <a href='https://www.mirandathomasson.com/'>mirandathomasson.com</a>
        <div className='buttons'>
            <button><a href="mailto: mirthomasson@gmail.com" rel='noreferrer' target='_blank'><img src={envelope} alt="envelope" />Email</a></button>
            <button className='blue-button'><a href='https://www.linkedin.com/in/miranda-thomasson/' rel='noreferrer' target='_blank'><img src={linkedin} alt="linkedIn" />LinkedIn</a></button>
        </div>
        <div className='about'>
            <h2>About</h2>
            <p>I am a frontend developer with an eye for design.
                I am looking for a posistion with an established company to learn from other experienced developers, 
                and am always open to learning new things.
            </p>
            <h2>Interests</h2>
            <p>Foodie. Dog lover. Yoga enthusiast. Traveler. Paramotors. Mountain biker. Entrepreneur. Coffee addict. Reader.
            </p>

        </div>
    </main>
  )
}