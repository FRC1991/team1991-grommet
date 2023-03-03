import { Anchor, Box, Text } from "grommet";

const CustomFooter = (props) => (
  <Box align="center" pad="medium">
    <Text size="small">
      © UHSSE 4-H Robotics Team 1991{" "}{<Anchor href="/admin">The Dragons</Anchor>}, 2022. Developed by{" "}
      {<Anchor href="https://github.com/arya1106/">Aryamaan Dhomne</Anchor>}. Maintained by {" "}
       {<Anchor href="https://github.com/MaanitMalhan/">Maanit Malhan</Anchor>}
    </Text>
  </Box>
);

export default CustomFooter;
