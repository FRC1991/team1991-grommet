import Head from "next/head";
import React, { useState } from "react";
import {
  Anchor,
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Collapsible,
  Footer,
  Heading,
  Image,
  InfiniteScroll,
  Grommet,
  Layer,
  ResponsiveContext,
  Text,
  Paragraph,
  Carousel,
} from "grommet";
import { FormClose, Menu } from "grommet-icons";
import AppBar from "../components/AppBar";
import CustomFooter from "../components/CustomFooter";

const theme = {
  global: {
    colors: {
      brand: "#FF8210",
      "accent-1": "#ff9030",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

export default function Home() {
  return (
    <Grommet theme={theme} overflow="scroll">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto"
          rel="stylesheet"
        />
      </Head>
      <Box>
        <AppBar />
        <Box direction="row">
          <Box align="center">
            <Box flex={{ shrink: false }} height="500px" width="full">
              <Image fill="horizontal" fit="cover" src="/img/DSC00361.JPG" />
            </Box>
            <Box
              width="full"
              pad={{
                vertical: "small",
                horizontal: "medium",
              }}
            >
              <Card
                margin="small"
                width="full"
                background="light-1"
                elevation="large"
                flex="grow"
              >
                <CardHeader pad="medium" background="light-3">
                  Best match of 2022
                </CardHeader>
                <CardBody pad="medium">
                  <Box
                    overflow="hidden"
                    style={{
                      position: "relative",
                      width: "100%",
                      "padding-bottom": "56.25%",
                      height: 0,
                    }}
                  >
                    <iframe
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      src="https://www.youtube-nocookie.com/embed/z3d3PvYXiR0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </Box>
                </CardBody>
              </Card>
              <Card
                margin="small"
                width="full"
                background="light-1"
                elevation="large"
                flex="grow"
              >
                <CardHeader pad="medium" background="light-3">
                  About Us
                </CardHeader>
                <CardBody direction="row" pad="medium">
                  <Box width="50%">
                    <Carousel play="5000" fill>
                      <Image fit="cover" src="/img/DSC00361.jpg" />
                      <Image
                        fit="cover"
                        src="/img/orangeplanetwithpurplering.png"
                      />
                      <Image fit="cover" src="/img/team.jpg" />
                      <Image fit="cover" src="/img/starwars-team-photo.png" />
                    </Carousel>
                  </Box>
                  <Box width="50%">
                    <Paragraph
                      fill
                      margin={{
                        top: "small",
                        bottom: "xsmall",
                        horizontal: "medium",
                      }}
                    >
                      Team 1991, The Dragons, is a student run high school team
                      which was founded in 2007 by a group of students, teachers
                      and mentors who wanted to represent their school's
                      engineering focus in a competitive environment.
                    </Paragraph>
                    <Paragraph
                      fill
                      margin={{
                        vertical: "xsmall",
                        horizontal: "medium",
                      }}
                    >
                      Participation in the team gives students an opportunity to
                      learn about engineering and technology through hands on
                      experience. Since the team operates like a business,
                      students acquire many professional skills, such as
                      managing a budget, making presentations and planning our
                      build season. As an extracurricular program, the team
                      allows students to apply concepts learned in school as
                      well as develop new skills thanks to various workshops
                      taught by our mentors. In the past years, the students
                      were able to take advantage of the SolidWorks, LabView,
                      Welding and Electronics classes taught by our mentors.
                    </Paragraph>
                    <Paragraph
                      fill
                      margin={{
                        vertical: "xsmall",
                        horizontal: "medium",
                      }}
                    >
                      Each year, the team participates in the F.I.R.S.T.
                      Robotics Competition which F.I.R.S.T. calls as the
                      "Varsity Sport for the Mind™". The teams are given only
                      six weeks to design, construct and program a robot which
                      will compete against other teams in regional and national
                      events. This closely mimics the real life challenges
                      engineers face when working on the projects.
                    </Paragraph>
                    <Paragraph
                      fill
                      margin={{
                        vertical: "xsmall",
                        horizontal: "medium",
                      }}
                    >
                      The UHSSE 4-H Robotics Team is a project of the UConn 4-H
                      Program.
                    </Paragraph>
                  </Box>
                </CardBody>
              </Card>
              <CustomFooter />
            </Box>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}
