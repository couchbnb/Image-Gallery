import React from 'react';
import styled from 'styled-components'



const Star = styled.div`

overflow: visible;
      stroke: #ff385c;
      fill: #ff385c;
      cursor: pointer;
`

const SuperHostWrapper = styled.div`


  text-allign: center;
    overflow: visible;
      stroke: #ff385c;
      fill: #ff385c;



        visibility :${(props) =>  props.isSuper? "hidden": "visible"};




`

function Rating ({data}) {
  const isSuper = data[0].is_super;
  console.log('isSuper',isSuper)

  return (
<div>
    <Star >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
    <span>5.8 Rating</span>

    </Star>
    <SuperHostWrapper isSuper={isSuper}>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="25px" height="25px" viewBox="0 8 75 75">
  <g transform="translate(0.000000,75.000000) scale(0.100000,-0.100000)" >
    <path d="M157 624c-4-4-7-28-7-54 0-42 4-49 42-81 23-19 58-49 79-66 20-18 42-33 49-33s30 15 51 33c20 17 56 48 79 67 39 33 41 37 38 85l-3 50-161 3c-88 1-163-1-167-4zM296 295c-8-8-21-15-28-15-7-1-23-9-35-19-19-15-23-30-23-71 0-59 28-100 68-100 12 0 22-4 22-10 0-5 9-10 20-10s20 5 20 10c0 6 11 10 25 10s28 7 31 15c4 8 12 15 20 15 10 0 14 16 14 61 0 51-4 64-22 80-13 10-29 18-36 19-7 0-20 7-28 15-9 8-19 15-24 15s-15-7-24-15z"/>
  </g>

</svg>
<span>Superhost</span>
    </SuperHostWrapper>
    </div>


  );
}

export default Rating;
