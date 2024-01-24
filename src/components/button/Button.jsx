import React from 'react'
import './Button.css'

const Button = () => {
  return (
    <>
    <button class="btn">
      <span class="btn__inner">
        <span class="btn__slide"></span>
        <span class="btn__content">GitHub</span>
      </span>
    </button>
  </>
  )
}

export default Button