import React, { useState } from 'react';
import styles from '../../css/model.module.css';
import styled from 'styled-components';

const Arrows = styled.button `
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-weight: 450;
  line-height:18px;
  border: 1px solid black;
  top: 5%;
  left: 5%;
  font-size: 14px;
  padding: 7px 15px;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  width: 100px;
  height: 100px;
  -webkit-font-smoothing: antialiased;
}
`


function Arrow({ direction }) {


  let arrowDirection;
  if (direction) {
    <Arrows> hi </Arrows>

  } else {
    <Arrows> hello </Arrows>
  }

  return(
    <div >
    {arrowDirection}
    </div>
  )
}
export default Arrow;




// function Arrow({ direction }) {


//   let arrowDirection;
//   if (direction) {
//     arrowDirection = <button className={styles.arrow} aria-label="Next" type="button"><span ><span >_</span><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><g ><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></span></button>

//   } else {
//     arrowDirection = <button  className={styles.arrow} aria-label="Next" type="button"><span ><span >_</span><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><g > <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path> </g></svg></span></button>

//   }