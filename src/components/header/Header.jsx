import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          /> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
            <Button>Home</Button>
            </Link>
          </Typography>
          <Link to="/login">
            <Button>Login</Button>
            </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header