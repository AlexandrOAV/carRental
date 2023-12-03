import React from 'react'
import css from "./HomeModal.module.css"

const HomeModal = () => {
  return (
    <div className={css.modal_container}>
    <img className={css.image} 
    src="https://i.pinimg.com/564x/d7/16/c3/d716c3631470d909411f78179536a515.jpg"
     alt='call me' 
     width={460}/>
    <h2 className={css.item_head}>We are always in touch! <br /> 24/7 </h2>
  <a className={css.link_modal} href="tel:+380730000000">Call us!</a>
  </div>
  )
}

export default HomeModal
