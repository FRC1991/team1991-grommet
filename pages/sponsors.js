import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Image,
  Grommet,
  Text,
  Carousel,
  ResponsiveContext,
} from "grommet";
import React from "react";
import Head from "next/dist/shared/lib/head";
import AppBar from "../components/AppBar";
import * as fs from "fs";
import * as path from "path";

const sponsors = (props) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Grommet theme={global.theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto"
          rel="stylesheet"
        />
      </Head>
      <AppBar
        margin={{
          bottom: "xxxsmall",
          left: "0px",
          right: "0px",
        }}
        size={size}
      />
      <Card
        margin={{
          top: "72px",
          bottom: "medium",
          left: "large",
          right: "large",
        }}
        background="light-1"
        elevation="large"
      >
        <CardHeader pad="medium" background="light-3">
          <Text size="large" weight="bolder">
            Thank you to our sponsors!
          </Text>
        </CardHeader>
        <CardBody>
          <Card
            margin={{
              top: "medium",
              bottom: "medium",
              left: "large",
              right: "large",
            }}
            background="light-1"
            elevation="large"
            height="medium"
          >
            <CardHeader pad="medium" background="accent-1">
              <Text weight="bolder">Title Sponsors</Text>
            </CardHeader>
            <CardBody pad={{
              top: "small",
              bottom: "small",
              left: "medium",
              right: "medium",
            }}>
              <Carousel fill wrap play="3000">
                {props.titleSponsors.map((image) => (
                  <Image margin='large' fit="contain" src={image} />
                ))}
              </Carousel>
            </CardBody>
          </Card>
          <Card
            margin={{
              top: "medium",
              bottom: "medium",
              left: "large",
              right: "large",
            }}
            elevation="large"
            height="medium"
          >
            <CardHeader pad="medium" background="platinum">
              <Text weight="bolder">Platinum Sponsors</Text>
            </CardHeader>
            <CardBody >
              <Carousel fill wrap play="3000">
                {props.platinumSponsors.map((image) => (
                  <Image margin='large' fit="contain" src={image} />
                ))}
              </Carousel>
            </CardBody>
          </Card>
          <Card
            margin={{
              top: "medium",
              bottom: "medium",
              left: "large",
              right: "large",
            }}
            elevation="large"
            height="medium"
          >
            <CardHeader pad="medium" background="gold">
              <Text weight="bolder">Gold Sponsors</Text>
            </CardHeader>
            <CardBody>
              <Carousel fill wrap play="3000">
                {props.goldSponsors.map((image) => (
                  <Image margin='large' fit="contain" src={image} />
                ))}
              </Carousel>
            </CardBody>
          </Card>
          <Card
            margin={{
              top: "medium",
              bottom: "medium",
              left: "large",
              right: "large",
            }}
            elevation="large"
            height="medium"
          >
            <CardHeader pad="medium" background="silver">
              <Text weight="bolder">Silver Sponsors</Text>
            </CardHeader>
            <CardBody >
              <Carousel fill wrap play="3000">
                {props.silverSponsors.map((image) => (
                  <Image margin='large' fit="contain" src={image} />
                ))}
              </Carousel>
            </CardBody>
          </Card>
          <Card
            margin={{
              top: "medium",
              bottom: "medium",
              left: "large",
              right: "large",
            }}
            elevation="large"
            height="medium"
          >
            <CardHeader pad="medium" background="bronze">
              <Text weight="bolder">Bronze Sponsors</Text>
            </CardHeader>
            <CardBody >
              <Carousel fill wrap play="3000">
                {props.bronzeSponsors.map((image) => (
                  <Image margin='large' fit="contain" src={image} />
                ))}
              </Carousel>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
    </Grommet>
  );
};

export async function getStaticProps() {
  let basePath = path.resolve("./public");
  let images = {};
  images.titleSponsors = fs.readdirSync(
    path.join(basePath, "sponsors", "titleSponsors")
  );
  images.platinumSponsors = fs.readdirSync(
    path.join(basePath, "sponsors", "platinumSponsors")
  );
  images.goldSponsors = fs.readdirSync(
    path.join(basePath, "sponsors", "goldSponsors")
  );
  images.silverSponsors = fs.readdirSync(
    path.join(basePath, "sponsors", "silverSponsors")
  );
  images.bronzeSponsors = fs.readdirSync(
    path.join(basePath, "sponsors", "bronzeSponsors")
  );
  var imageURLs = {};
  Object.keys(images).forEach((imageSet) => {
    let collection = [];
    images[imageSet].forEach((image) => {
      collection.push(`/sponsors/${imageSet}/${image}`);
    });
    imageURLs[imageSet] = collection;
  });
  console.log(imageURLs);
  return { props: imageURLs };
}

export default sponsors;
