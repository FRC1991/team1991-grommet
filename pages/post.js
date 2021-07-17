import Head from 'next/head'
import React from 'react'
import {
    Box,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Grommet,
    Image,
    Text
} from 'grommet'

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

const Post = ({title, body, image, date}) => { 
    return (
    <Card round='0' elevation='none' style={{'width':'auto'}} margin='small' background='light-1' flex='grow'>
        <CardHeader pad='medium' background='light-3'>{title}</CardHeader>
          <Text size='large' color='dark-1' margin='small'>body</Text>
          <Box height='small' margin='small' width='small'><Image fit='contain' src={image} /> </Box>
        <CardFooter pad='medium'>{"published on: "+date}</CardFooter>
    </Card> 
    )};


export function getStaticProps() {
    return {
        props: {
            title: 'Post',
            body: 'This is a post',
            image: 'https://placeimg.com/640/480/nature',
            date: 'Today',
        },
    };
}

export default Post;
