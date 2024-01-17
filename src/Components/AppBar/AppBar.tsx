import { Container, Toolbar, Typography, Box, MenuItem, IconButton, Menu } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import React, { useState } from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import StyledButton from '../StyledButton/StyledButton';
import { useDispatch } from 'react-redux';
import { setIsVisible } from '../../commonSlice';

const pages = [
  { name: 'Home', nav: '/' },
  { name: 'About', nav: 'about' },
  { name: 'Contact', nav: 'contact' },
  //   { name: 'Events', nav: 'events' },
  { name: 'Donate', nav: 'donate' },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (nav?: string) => {
    if (nav) {
      console.log({ nav });
      nav === 'donate' ? dispatch(setIsVisible(true)) : navigate(nav);
    }
    setAnchorElNav(null);
  };

  return (
    <AppBar position='fixed' sx={{ top: 0 }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'serif',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            Ole's Angels
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map(({ name, nav }) => (
                <MenuItem key={name} onClick={() => handleCloseNavMenu(nav)}>
                  <Typography textAlign='center'>{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'serif',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '.0rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            Ole's Angels
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ name, nav }) => (
              <StyledButton
                key={name}
                size='small'
                variant={name === 'Donate' ? 'contained' : 'text'}
                onClick={() => handleCloseNavMenu(nav)}
                sx={{ my: 4, mr: 1, color: 'white', display: 'block' }}>
                {name}
              </StyledButton>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <StyledButton>
              <FacebookIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            </StyledButton>
            <StyledButton>
              <InstagramIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            </StyledButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
