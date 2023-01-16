import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React, { useState } from "react";
import AppBar from "../components/AppBar";
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
  Grid,
  Layer,
  ResponsiveContext,
  Text,
} from "grommet";
import { FormClose, Menu } from "grommet-icons";
import Post from "../components/post";
import {
  getUnixTime,
  format,
  formatRFC3339,
  sub,
  add,
  parseISO,
} from "date-fns";
import "snarkdown";
import snarkdown from "snarkdown";
import CustomFooter from "../components/CustomFooter";

const feed = ({ posts }) => {
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
          top: "xsmall",
          bottom: "xxxsmall",
          left: "0px",
          right: "0px",
        }}
        size={size}
      />
      <Box align="center" width="full">
        <Grid
          width="full"
          columns="500px"
          gap="small"
          pad={{
            vertical: "small",
            horizontal: "medium",
          }}
        >
          <InfiniteScroll items={posts}>
            {(item) => <Post postItem={item} />}
          </InfiniteScroll>
        </Grid>
        <CustomFooter />
      </Box>
    </Grommet>
  );
};

export async function getStaticProps() {
  let basePath = process.cwd();
  if (process.env.NODE_ENV === "production") {
    basePath = path.join(process.cwd(), ".next/server/chunks");
  }
  const files = fs.readdirSync(path.join(basePath, "posts"));
  var posts = [];
  files.forEach((file) => {
    const content = fs.readFileSync(
      path.join(basePath, "posts", file),
      "utf-8"
    );
    var parsedContent = matter(content);
    parsedContent.content = snarkdown(parsedContent.content);
    posts.push(parsedContent);
  });
  function comparePosts(a, b) {
    var aDate = a.data.date;
    var bDate = b.data.date;
    if (aDate < bDate) return 1;
    else if (aDate > bDate) return -1;
    else return 0;
  }
  posts.sort(comparePosts);
  return {
    props: {
      posts:posts,
    },
  };
}

export default feed;
