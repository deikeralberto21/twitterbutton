import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function ButtonFollow(){
  return(
    <button className='button-follow'>Seguir</button>
  )
}


export function CardInfo({username, name, user_icon}) {
 return (
    <article className='follow-card'>
      <header>
        <img className="avatar-icon" alt="avatarIcon" src={`https://unavatar.io/${username}`}/>
        <div className='data-user'>
          <strong>{name}</strong>
          <span>@{username}</span>
        </div>
      </header>
        <aside className='follow-button-container'>
          <ButtonFollow/>
        </aside>
    </article>
 )
}
