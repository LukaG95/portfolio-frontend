import { useContext, useRef } from 'react';
import styles from './MyWorkSection.module.scss';
import { AppContext } from "../context/AppContext";

import SimpleWebsite from "../images/kcdm.png";
import AdvancedWebsite from "../images/web app.png";
import WebApp from "../images/finance.png";

function MyWorkSection() {
  const { language, color } = useContext(AppContext);
  const divRef = useRef(null);

  return (
    <div className={`${styles.two} observed`} ref={divRef}>
      <div className={`${styles.content} ${styles.hidden} fade-in-div`}>
        <div id="two"></div>
        <div style={{marginBottom: "50px"}} className={styles["navi-text-on-middle"]}>{language.navi_text2}</div>
        <div onClick={()=> { window.open("https://kcdm.lukagolob.com/"); }} style={{marginBottom: "70px"}} className={styles["work-block"]}>
          <img src={SimpleWebsite} alt="news"></img>
          <div></div>
          <p /* className={styles["white-to-black"]} */><span style={{color: color.value}}>{language.work_text1}</span> {language.work_text2}</p>
          <p /* className={styles["white-to-black"]} */>{language.work_text3}</p>
          <p><span style={{color: color.value}}>{language.work_text4}</span> <span /* className={styles["white-to-black"]} */>300€</span></p>
          <div style={{/* background: "#e0e0e0" */}}></div>
        </div>
        <div onClick={()=> { window.open("https://pcbuilder.lukagolob.com/"); }} style={{marginBottom: "70px"}} className={styles["work-block"]}>
          <img src={AdvancedWebsite}  alt="pc part picker"></img>
          <div></div>
          <p className={styles["white-to-black"]}><span style={{color: color.value}}>{language.work_text5}</span> {language.work_text6}</p>
          <p className={styles["white-to-black"]}>{language.work_text7}</p>
          <p><span style={{color: color.value}}>{language.work_text4}</span><span className={styles["white-to-black"]}> 1.000€</span></p>
          <div style={{ background: "#e0e0e0" }}></div>
        </div>
        <div onClick={()=> { window.open("https://finance.lukagolob.com/"); }} className={styles["work-block"]}>
          <img src={WebApp} alt="finance"></img>
          <div></div>
          <p><span style={{color: color.value}}>{language.work_text8}</span> {language.work_text9}</p>
          <p>{language.work_text10}</p>
          <p><span style={{color: color.value}} >{language.work_text4}</span><span> 2.500€</span></p>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MyWorkSection;