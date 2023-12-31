import { useState } from 'react'
import './index.css'


export function CardInfo({username, fullName}) {
  const [following, setFollow]= useState(false)
  function followEvent(){
    setFollow(!following)
  }
  const textButton = following ? 'siguiendo' : 'seguir';
  const classButton = following ? 'button button-follow' :'button'  
  return (
    <article className='follow-card'>
      <header>
        <img className="avatar-icon" alt="avatarIcon" src={`https://unavatar.io/${username}`}/>
        <div className='data-user'>
          <strong>{fullName}</strong>
          <span>@{username}</span>
        </div>
      </header>
        <aside className='follow-button-container'>
          <button className={classButton} onClick={followEvent}>{textButton}</button>
        </aside>
    </article>
 )
}
