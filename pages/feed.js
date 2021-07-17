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
  Layer,
  ResponsiveContext,
  Text
} from 'grommet'
import {FormClose, Menu} from 'grommet-icons'
import Post from './post'

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
      <Grommet theme={theme} full>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto"
          rel="stylesheet"
        />
      </Head>
      <AppBar pad='none'/>
        <Box overflow='auto' align='center' width='full' >
          <Box 
          width='full' 
          pad={{
            'vertical': 'small',
            'horizontal': 'medium'}} 
            >
            <Card width='full' background='light-1' elevation='large' flex='grow'>
              <CardHeader pad='medium' background='light-3'>News Feed</CardHeader>
                <InfiniteScroll items={posts}>
                {(item) => (
                <Post title={item.data.title} body={item.content} image={item.data?.thumbnail} date='today'/>
                )}
                </InfiniteScroll>
              <CardFooter pad='medium'>Footer</CardFooter>
            </Card>
            <Footer pad='medium'>
              <Text size='small'> hi there </Text>
              <Anchor label='oop'></Anchor>
            </Footer>
          </Box>
        </Box> 
  </Grommet>
    )}

export async function getStaticProps(){
  console.log(__dirname)
  const files = fs.readdirSync('posts')
  const posts = [];
  files.forEach(file => {
    const content = fs.readFileSync(path.join('posts', file), 'utf-8')
    posts.push(matter(content))
    })
  return {
    props: {
      posts: posts
    }
  }
}

export default feed;