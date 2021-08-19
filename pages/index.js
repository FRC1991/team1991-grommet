import Head from "next/head";
import React, {useState} from 'react'
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
import AppBar from '../components/AppBar'


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

export default function Home() {
    return (
      <Grommet theme={theme} overflow='scroll'>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto"
          rel="stylesheet"
        />
      </Head>
      <Box >
        <AppBar />
        <Box direction='row'>
        <Box align='center' >
          <Box flex={{shrink:false}} height='480px' width='full'>
            <Image fit='cover' src='https://cdn.discordapp.com/attachments/798705594717831168/842760745124233236/IMG_20210513_200400.jpg' />
          </Box>
          <Box 
          width='full' 
          pad={{
            'vertical': 'small',
            'horizontal': 'medium'}} 
            >
            <Card width='full' background='light-1' elevation='large' flex='grow'>
              <CardHeader pad='medium' background='light-3'>News Feed</CardHeader>
              <CardBody pad='medium' >
                <InfiniteScroll items={[1,2,3,4,5,7,8,9,10]}>
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
              <Anchor label='a test'></Anchor>
            </Footer>
          </Box>
        </Box> 
      </Box>
    </Box>
  </Grommet>
    );
}
