import { AppBar, Box } from "@mui/material";


function Footer () {

return(
  <>
  
  <AppBar position='sticky' sx={{bottom: 0,
  left: 0,
  right: 0,
  textAlign: 'center',
  paddingTop: '2%', height: '80px',
  marginTop: '65px'}}>
    <Box >
    Created by <a href="https://github.com/verasraul">@verasraul</a>
    </Box>
  </AppBar>
  </>
)};

export default Footer;