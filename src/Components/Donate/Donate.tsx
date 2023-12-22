import { Box, Button, Modal, Paper, useMediaQuery } from '@mui/material';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setIsVisible } from '../../commonSlice';

interface DonateProps {}

const Donate: FC<DonateProps> = () => {
  const [formValues, setFormValues] = useState({ firstName: '', lastName: '' });

  const { isVisible } = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  const isMediumScreen = useMediaQuery('(min-width:1280px)');

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
          height: '80%',
          width: '70%',
        }}>
        <Button onClick={() => dispatch(setIsVisible(false))}>x</Button>
      </Paper>
    </Modal>
  );
};

export default Donate;
