import React from 'react'
import twitter from '../images/twitter.png'
import github from '../images/github.png'
import youtube from '../images/youtube.png'
import discord from '../images/discord.png'


export default function Footer() {
  return (
    <footer>
        <div className='social-links'>
            <a className="tw" href='https://twitter.com/MirThomasson' rel='noreferrer' target='_blank'><img src={twitter} alt="twitter" /></a>
            <a className="gh" href='https://github.com/Mirthomasson' rel='noreferrer' target='_blank'><img src={github} alt="github" /></a>
            <a className="yt" href='https://www.youtube.com/channel/UCS2gvb1qrbeMSe6SUoMbQdw' rel='noreferrer' target='_blank'><img src={youtube} alt="youtube" /></a>
            <a className="dc" href='https://discord.gg/fjYKaZd4' rel='noreferrer' target='_blank'><img src={discord} alt="discord" /></a>
        </div>
    </footer>
  )
}
