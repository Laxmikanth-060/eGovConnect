import React from 'react'
import './RegistrationPage.css'

function RegistrationPage() {
  return (
    <div className='parent-container'>
        <div className='child-container'>
        <h3 id="title">Welcome to eGovConnect</h3>
            <h3 id='sub-heading'>As a Registered Operator you are responsible for: </h3>
            <p><b>Handling Customer Requests: </b>Easily view and manage incoming service requests, ensuring a smooth workflow and better customer satisfaction.</p>
            <p><b>Streamlining Processes: </b>Join hands in simplify communication with customers to address their needs quickly and efficiently.</p>
            <p><b>Boosting Efficiency: </b>Leverage a user-friendly platform to save time and enhance productivity in handling government service requests.</p>
            <h2>Register at <span>eGovConnect</span></h2>
            
            <div className='main-container'>
                <div>
                <div className='outer'><img className='image1' src='online-center2.jpg' alt='online-center'></img><button className='button'>Enroll Now</button></div>
                <div>
                <p><b>Accurate Information Sharing:  </b>Provide customers with up-to-date and correct information about services, processes, and requirements.</p>
                <p><b>Efficient Document Handling: </b>Ensure all submitted documents are uploaded securely and meet the necessary criteria.</p>
                <p><b>Customer Assistance: </b>Guide users in completing online service applications and resolving technical issues.</p>
                <p><b>Service Completion: </b>Follow up on requests to ensure timely processing and completion of services.</p>
                </div>
            </div>
                <div>
                <div className='outer'><img className='image1' src='meeseva-center3.jpg' alt='meeseva-center'></img><button className='button'>Enroll Now</button></div>
                <div>
                <p><b>Compliance with Guidelines: </b>Operate within the regulations set by MeeSeva and ensure adherence to government protocols.</p>
                <p><b>Document Verification: </b> Check the authenticity of customer-provided documents before submission.</p>
                <p><b>Fee Transparency: </b>Clearly communicate service charges and fees to customers.</p>
                <p><b>Customer Support: </b>Assist in resolving customer queries and act as a liaison between them and government authorities.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default RegistrationPage