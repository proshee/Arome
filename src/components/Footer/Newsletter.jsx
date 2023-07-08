import React, { useState } from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {

  const [Sub,SetSub] = useState(0);

return(
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      {Sub?(
        <button onClick = {()=>SetSub((prev)=>!prev)} type="button" className="custom__button">Appreciate Your Valuable Time</button>
      ): (
        <div>
          <input type="email" placeholder="Enter your email address" />
          <button onClick = {()=>SetSub((prev)=>!prev)} type="button" className="custom__button">Subscribe</button>
        </div>
      )}
    </div>
      
  </div>
)
};

export default Newsletter;