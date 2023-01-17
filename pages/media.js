import {Box, Card, CardHeader, Text, CardBody, Carousel, Grommet, InfiniteScroll, ResponsiveContext, Image} from "grommet";
import React from "react";
import AppBar from "../components/AppBar";
import CustomFooter from "../components/CustomFooter";
import Head from "next/dist/shared/lib/head";
import fs from 'fs'
import path from 'path'

const media = (props) => {
    const size = React.useContext(ResponsiveContext);
    return(
        <Grommet theme={global.theme}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet"/>
            </Head>
            <AppBar size={size}/>
            <Box margin={{
                top: "72px",
            }} align="center">
                <InfiniteScroll items={props.out}>
                    {
                    (item)=> (
                        <Card
              margin={{
                top: "medium",
                bottom: "medium",
                left: "large",
                right: "large",
              }}
              background="light-1"
              elevation="large"
              width="80%"
            ><CardHeader pad="medium" background="light-3">
                <Text weight="bolder" size="xlarge">
                  {item.name}
                </Text>
              </CardHeader>
              <CardBody direction="column"
                pad={{
                  top: "medium",
                  bottom: "small",
                  left: "medium",
                  right: "medium",
                }}>
                    <Carousel fill play="5000">
                        {item.files.map((image) => (
                            <Image fit="contain" src={image}/>
                        ))}
                    </Carousel>
                </CardBody>
            </Card>
                    )
                    }
                </InfiniteScroll>
                <CustomFooter/>
            </Box>
        </Grommet>
    )
}

export function getStaticProps() {
    let basePath = path.resolve('./public');
    let out = [];
    const dirs = fs.readdirSync(path.join(basePath, 'mediaPage'));
    dirs.sort().reverse();
    dirs.forEach(dir => {
        out.push({name: dir, files: fs.readdirSync(path.join(basePath, 'mediaPage', dir)).map(file => `/mediaPage/${dir}/${file}`)});
    });
    console.log(out);
    return {props: {out}};
}


export default media;