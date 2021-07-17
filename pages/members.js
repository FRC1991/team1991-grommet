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

const Home = ({contents, data}) => {
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
              <CardBody pad='medium' >
                <InfiniteScroll items={
                  contents
                  }>
                {(item) => (
                  <Box
                    pad="medium"
                    background={`dark-${(item % 3) + 1}`}
                  >
                    {item}
                  </Box>
                )}
                </InfiniteScroll>
              </CardBody>
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
  const files = fs.readdirSync('./posts')
  const posts = [];
  files.forEach(file => {
    const content = fs.readFileSync(path.join('./posts', file), 'utf-8')
    posts.push(matter(content))
    })
  const contents = []
  const data = []
  posts.forEach(post => {
    data.push(post.data)
    contents.push(post.content)
  })
  return {
    props: {
      contents: contents,
      data: data,
    }
  }
}

export default Home;