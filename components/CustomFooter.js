import { Anchor, Box, Text } from "grommet";

const CustomFooter = (props) => (
  <Box align="center" pad="medium">
    <Text size="small">
      © FRC 4-H Team 1991 The Dragons, 2022. Developed by{" "}
      {<Anchor href="https://github.com/arya1106/">Aryamaan Dhomne</Anchor>}.
    </Text>
  </Box>
);

export default CustomFooter;
