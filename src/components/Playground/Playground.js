import React from "react";
import {
  PlaygroundProjectContainer,
  StyledPlayground,
} from "../styles/Playground.styled";
import "../Playground/Playground.css";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
// import PlaygroundProjectComponent from "./PlaygroundProject";
// import { projectsData } from "./data";
// import Cards from "./Cards";
import { styled } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
// import Grid from '@mui/material/Unstable_Grid2';

import DummyCards from "./Cards";

// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { display, maxWidth } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Playground = () => {
  return (
    <StyledPlayground id="playground">
      <SectionHeading>
        <SectionTitle number="03">Education</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark="true" textAlign="center"></StyledParagraph>

      <div
        className="dummy"
        style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
      >
        <DummyCards
          name="Bharathidasan.matric.hr.sec.school,Kanchipuram "
          img="https://www.bdmsschool.org/login/uimages/SCHOOL%20BUILDING%20VIEW%20(27).jpg"
          desc={`PERCENTAGE : 82.5%`}
        />
        <DummyCards
          name="Sri Venkateshwara College of Engineering Sriperumbudur Chennai"
          img="https://th.bing.com/th/id/R.61c1cc2f36ba38baf959632f5bce7a05?rik=oKT3Qk8l6UVJAw&riu=http%3a%2f%2fwww.agarum.com%2fphotos%2f1%2f1%2f9%2f47%2fc%2fl%2faf5ce6bd994f6c0ae2160d9b829240c0.jpg&ehk=rqX58swISeJL%2fhTBRyv4hSd1uNHCyAMSgj7sGTeSMYU%3d&risl=&pid=ImgRaw&r=0"
          desc="CGPA : 7.6"
        />
      </div>
    </StyledPlayground>
  );
};

export default Playground;
