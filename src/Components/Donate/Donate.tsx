import { Box, Button, Modal, Paper, useMediaQuery } from '@mui/material';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setIsVisible } from '../../commonSlice';

interface DonateProps {}

const Donate: FC<DonateProps> = () => {
  //   const [formValues, setFormValues] = useState({ firstName: '', lastName: '' });

  const { isVisible } = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  const isXSmallScreen = useMediaQuery('(max-width:600px)');

  console.log({ isVisible });

  return (
    <Modal open={isVisible} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          height: isXSmallScreen ? '60%' : '70%',
          width: isXSmallScreen ? '80%' : '50%',
        }}>
        <Box sx={{ display: 'flex', height: 60, backgroundColor: '#015955', width: '100%' }}>
          <Button sx={{}} onClick={() => dispatch(setIsVisible(false))}>
            x
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default Donate;
