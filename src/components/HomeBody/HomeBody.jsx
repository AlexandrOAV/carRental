import React from 'react'
import carImage from '../../images/carHome.png' 
import HomeMenu from 'components/HomeMenu/HomeMenu'

function HomeBody() {
  return (
    <div>
        <HomeMenu/>
      <img src={carImage} alt="car"  />
    </div>
  )
}

export default HomeBody
