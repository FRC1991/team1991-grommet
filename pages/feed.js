import Head from "next/head";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import React, {useState} from 'react'
import AppBar from '../components/AppBar'
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
  Text
} from 'grommet'
import {FormClose, Menu} from 'grommet-icons'
import Post from '../components/post'
import {getUnixTime, format, formatRFC3339, sub } from 'date-fns'
import 'snarkdown'
import snarkdown from "snarkdown";

const theme = {
  global: {
    colors: {
      brand: '#FF8210',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const feed = ({posts}) => {
    return (
      <Grommet theme={theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto"
          rel="stylesheet"
        />
      </Head>
      <AppBar pad='none'/>
        <Box  align='center' width='full' >
          <Grid 
          width='full'
          columns='500px'
          gap="small"
          pad={{
            'vertical': 'small',
            'horizontal': 'medium'}} 
            >
                <InfiniteScroll items={posts}>
                {(item) => (
                <Post postItem={item} />)}
                </InfiniteScroll>
          </Grid>
          <Footer pad='medium'>
            <Text size='small'> hi there </Text>
            <Anchor label='a test'></Anchor>
          </Footer>
        </Box> 
  </Grommet>
    )}

export async function getStaticProps(){
  let basePath = process.cwd()
  if(process.env.NODE_ENV === 'production'){
    basePath = path.join(process.cwd(), '.next/server/chunks')
  }
  const files = fs.readdirSync(path.join(basePath, 'posts'))
  var posts = [];
  files.forEach(file => {
    const content = fs.readFileSync(path.join(basePath, 'posts', file), 'utf-8')
    var parsedContent = matter(content)
    parsedContent.content = snarkdown(parsedContent.content)
    posts.push(parsedContent)
  })
  const timeMin = formatRFC3339(sub(new Date(), {weeks: 2}))
  // const timeMin = formatRFC3339(new Date())
  // const timeMin = '2021-06-10T18:20:00-04:00'
  const API_KEY = process.env.API_KEY
  const calendarId = "frc1991dragons@gmail.com"
  const reqUrl = encodeURI(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${API_KEY}&timeMin=${timeMin}`)
  const responseJSON = await fetch(reqUrl).then(response => response.json())
  const events = responseJSON.items
  const eventArray = []
  events.forEach( (event) => {
    const startDate = new Date(event.start.dateTime)
    const endDate = new Date(event.end.dateTime)
    const body = `<b>Calendar event named:</b> ${event.summary} <br/><b>Starting at:</b> ${format(startDate, 'p \'on\' PPP')}<br/><b>Ending at:</b> ${format(endDate, 'p \'on\' PPP')}`
    const description = 'Google Calendar Event'
    const author = 'Google Calendar'

    eventArray.push( {
      content: body,
      data: {
        title: event.summary,
        date: getUnixTime(startDate),
        description: description,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/256px-Google_Calendar_icon_%282020%29.svg.png',
        author: author
      }
    }
    )
  })
  posts = posts.concat(eventArray)
  function comparePosts(a,b){
    var aDate = a.data.date
    var bDate = b.data.date
    if(aDate < bDate) return 1
    else if (aDate > bDate) return -1
    else return 0;
  }
  posts.sort(comparePosts)
  console.log(posts)
  return {
    props: {
      posts: posts
    }
  }
}

export default feed;