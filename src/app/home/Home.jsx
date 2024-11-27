import React from 'react'
import '../home/Home.css'

import GradientBackground from '@/components/Navbar/Gradient'

const Home = () => {
  return (
    <GradientBackground>
    <div style={{ textAlign: "center", paddingTop: "20vh" }}>
      <h1 style={{ fontSize: "4rem", color: "#fff" }}>Welcome to My Website</h1>
      <p style={{ fontSize: "1.5rem", color: "#f0f0f0" }}>
        This is an awesome gradient background!
      </p>
    </div>
    </GradientBackground>
  
    
    
  )
}

export default Home
