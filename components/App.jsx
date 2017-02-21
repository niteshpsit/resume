/*
    ./client/components/App.jsx
*/
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
<div className="w3-content w3-margin-top"  style={{'maxWidth':'1400px'}}>
  <div className="w3-row-padding">
    <div className="w3-third">
    
      <div className="w3-white w3-text-grey w3-card-4">
        <div className="w3-display-container">
          <img src="/img/my.jpg" style={{width:'100%'}} alt="Avatar"/>
          <div className="w3-display-bottomleft w3-container w3-text-black">
            <h2>Nitesh Jatav</h2>
          </div>
        </div>
        <div className="w3-container">
          <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Software Developer</p>
          <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Gurgaon, India</p>
          <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>niteshpsit@mail.com</p>
          <p><i className="fa fa-skype fa-fw w3-margin-right w3-large w3-text-teal"></i>niteshpsit</p>
          <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+918860163029, +919795816929</p>
          <hr/>

          <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
          <p>node js</p>
          <div className="w3-progress-container w3-round-xlarge w3-small">
            <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:'90%'}}>
              <div className="w3-center w3-text-white">90%</div>
            </div>
          </div>
          <p>react js</p>
          <div className="w3-progress-container w3-round-xlarge w3-small">
            <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:'80%'}}>
              <div className="w3-center w3-text-white">80%</div>
            </div>
          </div>
          <p>angualr js</p>
          <div className="w3-progress-container w3-round-xlarge w3-small">
            <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:'75%'}}>
              <div className="w3-center w3-text-white">75%</div>
            </div>
          </div>
          <p>Mongodb</p>
          <div className="w3-progress-container w3-round-xlarge w3-small">
            <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:'80%'}}>
              <div className="w3-center w3-text-white">80%</div>
            </div>
          </div>
          <p>javascript</p>
          <div className="w3-progress-container w3-round-xlarge w3-small">
            <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:'90%'}}>
              <div className="w3-center w3-text-white">90%</div>
            </div>
          </div>
          <p>core java</p>
          <div className="w3-progress-container w3-round-xlarge w3-small">
            <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:'80%'}}>
              <div className="w3-center w3-text-white">80%</div>
            </div>
          </div>
          <br/>

          <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
          <p>English</p>
          <div className="w3-progress-container w3-round-xlarge">
            <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:'80%'}}></div>
          </div>
          <p>Hindi</p>
          <div className="w3-progress-container w3-round-xlarge">
            <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:'80%'}}></div>
          </div>
        </div>
      </div>
      <br/>
    </div>
    <div className="w3-twothird">
    
      <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Software Developer At Daffodil Software Pvt Ltd</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
          <p>Im currently working in Daffodil Software Pvt Ltd as softeware developer</p>
          <hr/>
        </div>
      </div>

      <div className="w3-container w3-card-2 w3-white">
        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>PSIT KANPUR, Dr. A.P.J. Abdul Kalam Technical University</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2012-2015</h6>
          <p>Master in Computer Application ( MCA )</p>
          <hr/>
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Bundelkhand University</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2009 - 2012</h6>
          <p>Bachelor in Computer Science ( Bsc(cs) )</p>
          <hr/>
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Shri Guru Nanak Khalsa Inter College</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2005 - 2009</h6>
          <p>Schooling </p><br/>
        </div>
      </div>
    </div>
  </div>
  <footer className="w3-container w3-teal w3-center w3-margin-top">
    <p>Find me on social media.</p>
    <i className="fa fa-facebook-official w3-hover-text-indigo w3-large"><a href="#"></a></i>
    <i className="fa fa-instagram w3-hover-text-purple w3-large"><a href="#"></a></i>
    <i className="fa fa-snapchat w3-hover-text-yellow w3-large"><a href="#"></a></i>
    <i className="fa fa-pinterest-p w3-hover-text-red w3-large"><a href="#"></a></i>
    <a href="https://twitter.com/niteshpsit" target="_blank"><i className="fa fa-twitter w3-hover-text-light-blue w3-large"></i></a>
    <a href="https://in.linkedin.com/in/nitesh-jatav-08683ab5?trk=prof-samename-picture" target="_blank"><i className="fa fa-linkedin w3-hover-text-indigo w3-large"></i></a>
    <p>Powered by niteshpsit@gmail.com</p>
</footer>
</div>);
  }
}