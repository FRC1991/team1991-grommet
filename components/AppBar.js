import {
  Anchor,
  Box,
  Button,
  Collapsible,
  Grommet,
  Heading,
  Nav,
  ResponsiveContext,
  Text,
} from "grommet";

import { Menu } from "grommet-icons";
import React from "react";

const AppBar = (props) => {
  const [sidebarVisible, setSidebarVisible] = React.useState(false);

  if (props.size !== "small") {
    return (
      <Grommet theme={global.theme}>
        <Box
          tag="header"
          flex={{ shrink: false }}
          direction="row-responsive"
          align="center"
          height="60px"
          justify="between"
          background="light-1"
          pad={{ left: "medium", right: "none", vertical: "small" }}
          style={{ zIndex: 1 }}
          overflow="hidden"
          {...props}
        >
          <Nav direction="row" width="full" align="center">
            <Heading
              color="brand"
              level="3"
              margin="medium"
              onClick={() => {
                window.location.href = window.location.origin;
              }}
            >
              Team 1991
            </Heading>
            <Anchor
              label="Home"
              onClick={() => {
                window.location.href = window.location.origin;
              }}
              color="dark-1"
              size="medium"
            />
            <Anchor
              label="Our Sponsors"
              href="sponsors"
              color="dark-1"
              size="medium"
            />
            <Anchor
              label="Creations"
              href="creations"
              color="dark-1"
              size="medium"
            />
            <Anchor label="Media" href="media" color="dark-1" size="medium" />
            <Anchor label="Awards" href="awards" color="dark-1" size="medium" />
            <Box background="#ff9030" round="medium">
              <Anchor
                label="News Feed"
                margin={{
                  vertical: "xsmall",
                  horizontal: "small",
                }}
                href="feed"
                color="dark-1"
                size="medium"
              />
            </Box>
            <Box background="#ff9030" round="medium">
              <Anchor
                label="Donations"
                margin={{
                  vertical: "xsmall",
                  horizontal: "small",
                }}
                href="https://www.paypal.com/donate?hosted_button_id=5MQSBAZGVDCMU"
                color="dark-1"
                size="medium"
              />
            </Box>
            <Nav
              style={{
                float: "right",
                marginRight: "none",
                marginLeft: "auto",
              }}
              direction="row"
              background="light-1"
              pad="medium"
            >
              <Anchor icon={<Menu />} href="admin/index.html" />
            </Nav>
          </Nav>
        </Box>
      </Grommet>
    );
  } else {
    return (
      <Grommet theme={global.theme}>
        <Nav
          tag="header"
          flex={{ shrink: false }}
          direction="row"
          height="60px"
          justify="between"
          background="light-1"
          pad={{ left: "medium", right: "none", vertical: "small" }}
          style={{ zIndex: 1 }}
          overflow="hidden"
          {...props}
        >
          <Anchor
            alignSelf="center"
            icon={<Menu />}
            onClick={() => {
              setSidebarVisible(!sidebarVisible);
            }}
          />
          <Heading
            color="brand"
            level="2"
            margin="medium"
            onClick={() => {
              window.location.href = window.location.origin;
            }}
            alignSelf="center"
          >
            Team 1991
          </Heading>
        </Nav>
        <Collapsible open={sidebarVisible}>
          <Box
            width="fill"
            background="light-2"
            elevation="medium"
            align="center"
            justify="center"
            direction="column"
            pad="medium"
          >
            <Anchor
              margin={{
                top: "xsmall",
                bottom: "xsmall",
              }}
              label="Home"
              onClick={() => {
                window.location.href = window.location.origin;
              }}
              color="dark-1"
              size="medium"
            />
            <Anchor
              margin={{
                top: "none",
                bottom: "xsmall",
              }}
              label="Our Sponsors"
              href="sponsors"
              color="dark-1"
              size="medium"
            />
            <Anchor
              margin={{
                top: "none",
                bottom: "xsmall",
              }}
              label="Creations"
              href="creations"
              color="dark-1"
              size="medium"
            />
            <Anchor
              margin={{
                top: "none",
                bottom: "xsmall",
              }}
              label="Media"
              href="media"
              color="dark-1"
              size="medium"
            />
            <Anchor
              margin={{
                top: "none",
                bottom: "xsmall",
              }}
              label="Awards"
              href="awards"
              color="dark-1"
              size="medium"
            />
            <Box margin="small" background="#ff9030" round="medium">
              <Anchor
                label="News Feed"
                margin={{
                  vertical: "xsmall",
                  horizontal: "small",
                }}
                href="feed"
                color="dark-1"
                size="medium"
              />
            </Box>
            <Box margin="small" background="#ff9030" round="medium">
              <Anchor
                label="Donations"
                margin={{
                  vertical: "xsmall",
                  horizontal: "small",
                }}
                href="https://www.paypal.com/donate?hosted_button_id=5MQSBAZGVDCMU"
                color="dark-1"
                size="medium"
              />
            </Box>
          </Box>
        </Collapsible>
      </Grommet>
    );
  }
};
export default AppBar;
