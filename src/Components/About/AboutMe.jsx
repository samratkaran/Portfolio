import React from 'react'
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <>
    <div className='row main-about-section'>
      <div className='col-md-6 about-me-all-info'>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid distinctio exercitationem totam dolores ut harum illo unde debitis, dolor excepturi esse officiis provident saepe id assumenda. Sequi quis perferendis consectetur?</h4>
      </div>
      <div className=' col-md-5 image-of-mine'>
        <img src={require("../../Assets/sampleImage.png")} alt="" width={450} />
      </div>
    </div>



    </>
  )
}

export default AboutMe
