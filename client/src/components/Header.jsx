import React from 'react';
import LikeShare from './LikeShare.jsx'

function Header(props) {
  return (

    <div>

      <section>
        <div >
          <div ><h1 tabIndex="-1">Spacious two-bedroom in San Francisco Victorian</h1></div>
          <div >
            <span >
              <span ><span  aria-hidden="true">󰀄</span></span>
              <span >

              </span>
            </span>

            <span aria-hidden="true">·</span>
            <span ><span ><a rel="noopener noreferrer"  href="https://airbnb.com/s/San%20Francisco,California,United%20States/homes" >San Francisco, California, United States</a></span></span>
          </div>
          <LikeShare />
        </div>
      </section>
    </div>

  );
}

export default Header;
