import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grommet,
  Image,
  Text,
  ResponsiveContext,
  InfiniteScroll,
  Paragraph,
} from "grommet";
import Head from "next/dist/shared/lib/head";
import AppBar from "../components/AppBar";
import CustomFooter from "../components/CustomFooter";

const awards = (props) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Grommet theme={global.theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto"
          rel="stylesheet"
        />
      </Head>
      <AppBar size={size} />
      <Box align="center">
        <InfiniteScroll items={props.awards}>
          {(year) => (
            <Card
              margin={{
                top: "medium",
                bottom: "medium",
                left: "large",
                right: "large",
              }}
              background="light-1"
              elevation="large"
              width="80%"
            >
              <CardHeader pad="medium" background="light-3">
                <Text weight="bolder" size="xlarge">
                  {Object.keys(year)[0]}
                </Text>
              </CardHeader>
              <CardBody
                direction="column"
                pad={{
                  top: "medium",
                  bottom: "small",
                  left: "medium",
                  right: "medium",
                }}
              >
                {Object.values(year)[0].map((event) => (
                  <Card
                    margin={{
                      top: "none",
                      bottom: "medium",
                      left: "small",
                      right: "small",
                    }}
                    background="light-1"
                    elevation="large"
                  >
                    <CardHeader pad="small" background="light-3">
                      <Text size="large" weight="bold">
                        {Object.keys(event)[0]}
                      </Text>
                    </CardHeader>
                    <CardBody direction="column" pad="small">
                      {Object.values(event)[0].map((award) => (
                        <Box>
                          <Text weight="bold">{Object.keys(award)[0]}</Text>
                          <Text>{Object.values(award)[0]}</Text>
                          <br />
                        </Box>
                      ))}
                    </CardBody>
                  </Card>
                ))}
              </CardBody>
            </Card>
          )}
        </InfiniteScroll>
        <CustomFooter />
      </Box>
    </Grommet>
  );
};

export async function getStaticProps() {
  let basePath = path.resolve("./public");
  const file = fs.readFileSync(
    path.join(basePath, "awards.yml"),
    "utf-8"
  );
  const awards = yaml.load(file);
  return { props: { awards } };
}
export default awards;
