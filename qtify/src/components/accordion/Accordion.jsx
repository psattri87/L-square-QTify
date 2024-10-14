import styles from "./Accordion.module.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MyAccordion({ summary, details, expanded, name="", handleExpand}) {
  return (
    <div className={styles.main}>
      <Accordion className={styles.accordion} expanded={expanded} onChange={(event, isExpand)=>handleExpand(isExpand, name)}>
        <AccordionSummary
          className={styles.summary}
          expandIcon={<ExpandMoreIcon className={styles.icon} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className={styles.summaryText}>{summary}</div>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          <div className={styles.detailsText}>{details}</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
