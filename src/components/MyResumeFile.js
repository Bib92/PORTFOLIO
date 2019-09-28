import React, { Component } from 'react';
 
class MyResumeFile extends Component {
  render() {
 
    return (
      <div>
{/* <iframe 
SameSite='None'
Secure
src="https://drive.google.com/file/d/1wZV87EApmomQ2LxiUA24bV2J2Ee0-3AI/preview?usp=embed_googleplus" 
className="resumefile"
allowFullScreen
>
  </iframe>           */}
  <iframe src="https://docs.google.com/document/d/e/2PACX-1vSEsCBswpJCJXN8d_vy6BJ3AU1TW-tEUUFeTB4qO0zqYgIXlOzPqVeoCEgmlOEzig/pub?embedded=true"
  className="resumefile"
  allowFullScreen
  ></iframe>
  
      </div>
    );
  }
}

export default MyResumeFile