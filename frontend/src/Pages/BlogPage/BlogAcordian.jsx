import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import "./CSS/BlogAccordion.css";

const BlogAcordian = () => {
  return (
    <div id="blogAccordionDiv">

      <div id="blogAccordiionLeftDiv">
        <img
          src="https://rstheme.com/products/wordpress/ecenter/wp-content/uploads/2023/01/kikori-lesson.jpg"
          alt=""
        />
      </div>

      <div id="blogAccordiionRightDiv">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Medical Coding?</Accordion.Header>
            <Accordion.Body>
              It is the translation of medical reports like healthcare
              diagnostics, analysis of equipment, medical services, and
              procedures into shortcodes commonly referred to as alphanumeric
              characters or codes. It is vital and documents the patient's visit
              with the healthcare provider. The documentation is translated into
              standard codes to maintain records of patients' diagnoses, medical
              histories, medical treatments, supplies, facilities received by
              patients, and unintended circumstances that may have affected the
              treatment/ stay at the hospital. Medical coding professionals
              abstract the information from documentation and allot the codes to
              derive the benefits from the insurance carriers.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Why is Medical Coding Required?</Accordion.Header>
            <Accordion.Body>
              Medical coding makes a vast difference in the medical industry.
              There are hundreds of diseases, complications, injuries, and
              causes of death. Every patient is unique and requires unique
              services, treatments, and services to cater to their symptoms.
              Medical coding simplifies the recording process for easy tracking,
              data updating, and subsequent data maintenance.
              <br />
              The healthcare revenue system depends on the information
              documented from the patient's diagnosis, test results, treatment,
              discrepancies during treatment, etc. It is crucial to guarantee
              high-quality care and facilities to the patients based on the
              treatments offered by the providers and issues during treatment.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How is Medical Coding Conducted?
            </Accordion.Header>
            <Accordion.Body>
              Medical coding involves medical coders working and examining the
              diagnostics and patient notes for evaluation. Here is the process
              of how medical coding:
              <br />
              <ListGroup as="ol" numbered>
                <ListGroup.Item as="li">
                  Patients receive a diagnosis and prescription for the symptoms
                  when they visit the physician.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  The medical coders receive the records via a secure connection
                  or cloud.{" "}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  They review the validity and authenticity of data. They also
                  derive other information like dates of procedures, physician
                  details, diagnosis notes, etc.{" "}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  They use ICD-10 and CPT codes to translate notes into
                  accessible medical codes.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  The medical coder audits the information into charts and
                  submits the final report to the patient.
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default BlogAcordian;
