import React, { useState } from "react";
import styles from "./Faqs.module.css";
import MyAccordion from "../accordion/Accordion";



export default function Faqs() {
  const [expand, setExpand] = useState("");
  const handleExpand = (isExpand, accordionName)=>{
    setExpand(isExpand?accordionName:"");
  }
  return (
    <div className={styles.faqsBox}>
      <h1>FAQs</h1>
      <MyAccordion
        expanded={expand === "one"}
        name="one"
        summary={"Is QTify free to use?"}
        details={"Yes! It is 100% free, and has 0% ads!"}
        handleExpand={handleExpand}
      />
      <MyAccordion
        expanded={expand === "two"}
        name="two"
        summary={"Can I download and listen to songs offline?"}
        details={
          "Sorry, unfortunately we don't provide the service to download any songs."
        }
        handleExpand={handleExpand}
      />
    </div>
  );
}
