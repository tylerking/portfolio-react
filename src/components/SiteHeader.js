import * as React from 'react'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography' 
import { Link as RouterLink } from 'react-router-dom'

import logo from '../assets/logo.svg'

const pages = ['Services', 'About', 'Contact']


function SiteHeader() { 
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <div className='site-header'>
      <AppBar position='fixed'>
        <Container maxWidth='xl'>
        
          <Toolbar disableGutters>
            <Box href='/' sx={{ mr: 2, flexGrow: 1, display: { md: 'flex' }}}>
              <Link component={RouterLink} to='/'>
                <img src={logo} alt='Tyler King' />
              </Link>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Link component={RouterLink} key={page} to={page}>{page}</Link>
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                aria-controls='menu-appbar'
                aria-haspopup='true'
                aria-label='Main navigation'
                color='inherit'
                onClick={handleOpenNavMenu}
              >
                <FontAwesomeIcon icon={faBars} size='1x' />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                id='menu-appbar'
                keepMounted
                onClose={handleCloseNavMenu}
                open={Boolean(anchorElNav)}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>
                      <Link component={RouterLink} key={page} to={page}>{page}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
export default SiteHeader