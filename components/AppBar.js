import {
    Anchor,
    Box,
    Button,
    Heading,
    Nav,
} from 'grommet'

import {Menu} from 'grommet-icons'

const AppBar = (props) => (
    <Box
    tag='header'
    flex={{shrink:false}}
    direction='row-responsive'
    align='center'
    height='60px'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'none', vertical: 'small' }}
    style={{zIndex: 1}}
    overflow='hidden'
    {...props}>
      <Box direction='row' width='full' align='center'>
        <Heading level='3' margin='medium' onClick={() => {
          window.location.href = window.location.origin;
        }}
        >
            Team 1991
            </Heading>
        <Button default label='News Feed' href='feed' color='dark-1' margin='medium' size='medium'/>
            <Nav style={{'float': 'right', 'marginRight': 'none', 'marginLeft': 'auto'}} direction='row' background='light-1' pad='medium'>
                <Anchor icon={<Menu/>} href='admin/index.html'/>
            </Nav>
      </Box>
    </Box>
  );

  export default AppBar;