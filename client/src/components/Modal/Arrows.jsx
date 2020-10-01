import React, { useState } from 'react';
import styles from '../../css/model.module.css';

function Arrow({ direction }) {


  let arrowDirection;
  if (direction) {
    arrowDirection = <button className={styles.arrow} aria-label="Next" type="button"><span ><span >_</span><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><g ><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></span></button>

  } else {
    arrowDirection = <button  className={styles.arrow} aria-label="Next" type="button"><span ><span >_</span><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><g > <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path> </g></svg></span></button>

  }

  return(
    <div className={styles.arrowContainer }>
    {arrowDirection}
    </div>
  )
}
export default Arrow;
