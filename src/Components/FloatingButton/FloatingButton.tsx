import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Popover from '@mui/material/Popover';
import useMediaQuery from '@mui/material/useMediaQuery';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Button } from '@mui/material';

interface FloatingButtonProps {
  onClick?: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    onClick && onClick();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isMobile && (
        <Fab
          color='primary'
          aria-label='add'
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
          }}
          onClick={handleButtonClick}>
          <AddIcon />
        </Fab>
      )}

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px' }}>
          <Button>
            <FacebookIcon style={{ marginBottom: '8px' }} />
          </Button>
          <Button>
            <InstagramIcon />
          </Button>
        </div>
      </Popover>
    </>
  );
};

export default FloatingButton;
