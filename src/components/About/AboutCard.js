import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> C.R.VARUN BHARATHI </span>
            from <span className="purple"> TamilNadu, India.</span>
            <br />
            I am currently pursuing my Bachelor's in Computer Science & Engineering At SNS College Of Technology.
            <br />
            I have completed My Schooling at Kendriya Vidyalaya Coimbatore, TamilNadu
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies & Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't Die before your Death"{" "}
          </p>
          <footer className="blockquote-footer">C.R.VARUN BHARATHI</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
