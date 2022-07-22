import { Card, CardHeader, Paragraph, CardBody, Image, Box, Text } from "grommet";

const RobotPost = ({ robotInfo }) => {
    let gameName = robotInfo.gameName;
    let seasonYear = robotInfo.seasonYear;
    let robotBlurb = robotInfo.robotBlurb;
    let robotImage = robotInfo.robotImage;
  return (
    <Card margin={{
      top: "medium",
      bottom: "medium",
      left: "large",
      right: "large",
    }} background="light-1" elevation="large">
        <CardHeader pad="medium" background="light-3">
          <Text size="xlarge" weight="bolder" >{gameName}</Text>
        </CardHeader>
        <CardBody direction="row" pad="medium">
          <Box width="50%">
            <Image fill fit="cover" src={robotImage} />
          </Box>
          <Box width="50%" direction="column" overflow="auto">
            <Text size="large" weight="bold" margin={
              {top: "xsmall",
              horizontal: "medium"}
            }>{seasonYear}</Text>
            <Paragraph
              fill
              margin={{
                top: "small",
                bottom: "xsmall",
                horizontal: "medium",
              }}
            >
              {robotBlurb}
            </Paragraph>
          </Box>
        </CardBody>
      </Card>
  );
}

export default RobotPost;