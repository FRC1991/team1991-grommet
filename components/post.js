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

const Post = ({title, body, image, date, description, author}) => { 
  // title = 'This is a title.'
  // date = '7/21/2021'
  // image = 'https://media.discordapp.net/attachments/629129118344282250/874424255150972998/unknown.png?width=1246&height=670'
  // body = 'Lorem ipsum dolor sit amet.'
  // description = 'This is a description.'
  // author = 'Admin'

    return (
    // <Card round='0' elevation='none' style={{'width':'auto'}} margin='small' background='light-1' flex='grow'>
    //     <CardHeader pad='medium' background='light-3'>
    //         {title}
    //     </CardHeader>
    //     <Text size='large' color='dark-1' margin='small'>
    //         {body}
    //     </Text>
    //     {image ? <Box height='small' margin='small' width='small'>
    //           <Image fit='contain' src={image} />
    //     </Box>
    //     : null}
    //     <CardFooter pad='medium'>
    //         <Text>published on: {date}</Text>
    //         </CardFooter>
    // </Card> 
    <div style={{'-moz-box-shadow': '3px 3px 5px 6px #ccc',
    '-webkit-box-shadow': '3px 3px 5px 6px #ccc',
    'box-shadow': '3px 3px 5px 6px #ccc',
    'padding': '0.5px 5px',
    'border-radius': '1rem',
    'margin': '10px'}}>
      <div style={{'background-color': '#EDEDED',
          'border-radius': '0.5rem',
          'margin-left': '5px',
          'margin-top': '10px',
          'padding-top': '5px',
          'padding-bottom': '1px',
          'padding-left': '10px',
          'line-height': '1.2'}}>
            <h2 style={{'margin': '5px'}}>{title}</h2>
            <h5 style={{'margin': '5px'}}>Published on: {date}</h5>
      </div>
      <div style={{'padding-left': '10px',
        'padding-right': '10px',
        'padding-bottom': '10px',
        'padding-top': '5px'}}>
        <h4 style={{'margin-top': '0px', 'margin-bottom': '2px'}}>{description}</h4>
        <h5 style={{'margin-top': '0px', 'margin-bottom': '2px'}}>Author: {author}</h5>
        <div style={{'width': '95%', 'padding': '10px', 'display': 'block', 'margin-left': 'auto', 'margin-right': 'auto', }}>
          <img style={{'max-width': '100%', 'max-height': '100%'}} src={image}></img>
        </div>
        <div>
          {body}
        </div>
      </div>
    </div>
    )};

export default Post;
