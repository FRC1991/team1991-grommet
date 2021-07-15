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

const AppBar = (props) => (
  <Box
  tag='header'
  direction='row'
  align='center'
  justify='between'
  background='brand'
  pad={{ left: 'medium', right: 'small', vertical: 'small' }}
  style={{zIndex: 1}}
  {...props}/
  >
);

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
  const gravatarLink =
    "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";
    const [showSidebar, setShowSidebar] = useState(false);

    return (
      <Grommet theme={theme} full>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto"
          rel="stylesheet"
        />
      </Head>
        <ResponsiveContext.Consumer>
          {size => (
      <Box fill >
        <AppBar>
          <Box direction='row'>
          <Button
          icon={<Menu/>}
          onClick={
            () => {
              setShowSidebar(!showSidebar)
            }
          } />
          <Heading level='3' margin='xsmall'>Team 1991</Heading>
          </Box>
        </AppBar>
        <Box direction='row' flex overflow={{horizontal: 'hidden', vertical: 'auto'}}>
        {(!showSidebar || size !== 'small') ? (
        <Collapsible direction='horizontal' open={showSidebar}>
          <Box
          width='medium'
          background='light-2'
          elevation='small'
          align='center'
          justify='center'
          >
            sidebar
          </Box>
        </Collapsible>
        ) : (
        <Layer>
          <Box
          background='light-2'
          tag='header'
          justify='end'
          align='center'
          direction='row'
          >
            <Button
            icon={<FormClose />}
            onClick={() => setShowSidebar(false)}
            />
            </Box>
          <Box
            fill
            background='light-2'
            align='center'
            justify='center'
          >
            sidebar
            </Box>
        </Layer>
        )}
        <Box overflow='auto' align='center' >
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
              <Anchor label='oop'></Anchor>
            </Footer>
          </Box>
        </Box> 
      </Box>
    </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
}
