import React from "react"
import AppBar from "../components/AppBar"
import CustomFooter from "../components/CustomFooter"
import fs from 'fs'
import path from 'path'
import matter from "gray-matter"
import snarkdown from "snarkdown"
import RobotPost from "../components/RobotPost"
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
    InfiniteScroll
} from "grommet"
import Head from "next/dist/shared/lib/head"

const robots = (props) => {
  const size = React.useContext(ResponsiveContext);
  return(
        <Grommet theme={global.theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto"
          rel="stylesheet"
        />
      </Head>
      <AppBar size={size}/>
      <Box align="center"> 
            <InfiniteScroll items={props.robots}>
                {(item)=> <RobotPost robotInfo={item.data}/>}
            </InfiniteScroll>
        <CustomFooter />
      </Box>
    </Grommet>
    )
}

export async function getServerSideProps() {
    let basePath = process.cwd();
    if (process.env.NODE_ENV === "production") {
      basePath = path.join(process.cwd(), ".next/server/chunks");
    }
    const files = fs.readdirSync(path.join(basePath, "robots"));
    var robots = [];
    files.forEach((file) => {
      const content = fs.readFileSync(
        path.join(basePath, "robots", file),
        "utf-8"
      );
      var parsedContent = matter(content);
      parsedContent.content = snarkdown(parsedContent.content);
      robots.push(parsedContent);
    });
    console.log({props: {robots}})
    return {props: {robots}};
}

export default robots;