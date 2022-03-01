import React from "react";
import styles from './Title.module.css';
import './Title.css';

const Title = props => {
  return <div className="test">
    <h1 className={styles.title1}>{ props.applicationName }</h1>
    <div className={styles.title2}>{ props.applicationDescription }</div>
  </div>
}
export default Title;