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
  return (
    <Grommet theme={global.theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto"
          rel="stylesheet"
        />
      </Head>
      <AppBar/>
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
        <CustomFooter/>
      </Box>
    </Grommet>
  );
};

export async function getServerSideProps() {
  var basePath = path.join(path.resolve('./public'), "posts");
  const files = fs.readdirSync(basePath);
  var posts = [];
  files.forEach((file) => {
    const content = fs.readFileSync(
      path.join(basePath, file),
      "utf-8"
    );
    var parsedContent = matter(content);
    parsedContent.content = snarkdown(parsedContent.content);
    posts.push(parsedContent);
  });
  const timeMin = formatRFC3339(sub(new Date(), { weeks: 2 }));
  const timeMax = formatRFC3339(add(new Date(), { months: 6 }));
  const API_KEY = process.env.API_KEY;
  const calendarId = "frc1991dragons@gmail.com";
  const reqUrl = encodeURI(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}`
  );
  const responseJSON = await fetch(reqUrl).then((response) => response.json());
  const events = responseJSON.items;
  const eventArray = [];
  events.forEach((event) => {
    let startDate;
    let endDate;
    if ("dateTime" in event.start) {
      startDate = new Date(event.start.dateTime);
      endDate = new Date(event.end.dateTime);
    } else {
      startDate = parseISO(event.start.date);
      endDate = parseISO(event.end.date);
    }
    const body = `<b>Calendar event named:</b> ${
      event.summary
    } <br/><b>Starting at:</b> ${format(
      startDate,
      "p 'on' PPP"
    )}<br/><b>Ending at:</b> ${format(endDate, "p 'on' PPP")}`;
    const description = "Google Calendar Event";
    const author = "Google Calendar";

    eventArray.push({
      content: body,
      data: {
        title: event.summary,
        date: getUnixTime(startDate),
        description: description,
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/256px-Google_Calendar_icon_%282020%29.svg.png",
        author: author,
      },
    });
  });
  posts = posts.concat(eventArray);
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
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

export default feed;
