import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  '&:focus': {
    outline: 'none',
  },
  // Additional styles can be added here
  //   color: 'green', // Example color
  // ...other styles
});

export default StyledButton;
