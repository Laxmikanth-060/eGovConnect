import React from 'react'
import './About.css'
function About() {
  return (
    <div>
      
     <section class="features">
    <div class="feature-item">
        <img src="documents-image.jpg" alt="Document Icon"/>
        <h3>Document Preparation</h3>
        <p>Easily gather all required documents for government services.</p>
    </div>
    <div class="feature-item">
        <img src="customer-support-process-1.jpg" alt="Guide Icon"/>
        <h3>Guided Process</h3>
        <p>Step-by-step guidance to complete services smoothly.</p>
    </div>
    <div class="feature-item">
        <img src="landing.jpg" alt="Service Center Icon"/>
        <h3>Integrated Centers</h3>
        <p>Connected with online centers for seamless processing.</p>
    </div>
</section>

<section class="how-it-works">
    <h2>How It Works</h2>
    <div class="steps">
        <div class="step">Step 1: Choose your service</div>
        <div class="step">Step 2: Prepare documents</div>
        <div class="step">Step 3: Submit online or to a center</div>
        <div class="step">Step 4: Receive confirmation</div>
    </div>
</section>


    </div>
  )
}

export default About