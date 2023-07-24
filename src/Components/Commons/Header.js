import React from 'react'

export default function Header(props) {
  return (
  <>
    <div className={props.bgClass}>
      <div className='textContent'>
        <h1 className='titleContent'>{props.title}</h1>
        {props.children}
      </div>      
    </div>
  </>
  )
}
