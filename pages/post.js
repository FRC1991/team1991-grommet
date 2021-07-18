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
        <CardHeader pad='medium' background='light-3'>
            {title}
        </CardHeader>
        <Text size='large' color='dark-1' margin='small'>
            {body}
        </Text>
        {image ? <Box height='small' margin='small' width='small'>
              <Image fit='contain' src={image} />
        </Box>
        : null}
        <CardFooter pad='medium'>
            <Text>published on: {date}</Text>
            </CardFooter>
    </Card> 
    )};

export default Post;
