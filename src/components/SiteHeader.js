import * as React from 'react'
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faBars } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/logo.svg'

const pages = ['About', 'Services', 'Projects', 'Contact']

function SiteHeader() { 
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position='fixed'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            href='/'
            sx={{
              mr: 2,
              display: { md: 'flex' },
            }}
          >
            <img src={logo} alt='Tyler King' />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link href={`#${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button href="www.google.com" variant='contained'>
              <FontAwesomeIcon icon={faDownload} size='1x' />&nbsp;Resume
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default SiteHeader