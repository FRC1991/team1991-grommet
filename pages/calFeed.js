import {formatRFC3339, sub, add, parseISO, format, getUnixTime} from "date-fns";
import { Grommet, ResponsiveContext, Box, Grid, InfiniteScroll} from "grommet";
import Head from "next/dist/shared/lib/head";
import AppBar from "../components/AppBar";
import CustomFooter from "../components/CustomFooter";
import Post from "../components/post";
import React from "react";

const calFeed = (props) => {
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
        {/* <Box align="center" width="full"> */}
            <Grid
            width="full"
            columns="500px"
            gap="small"
            pad={{
                vertical: "small",
                horizontal: "medium",
            }}
            margin={{
                top: "72px",
            }}
            >
            <InfiniteScroll items={props.posts}>
                {(item) => <Post postItem={item} />}
            </InfiniteScroll>
            </Grid>
            <CustomFooter />
        {/* </Box> */}
        </Grommet>
    );
}

export async function getServerSideProps() {
  var posts = [];
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
            posts,
        },
    };
}

export default calFeed;