import { Button, Paper, Typography, useMediaQuery } from '@mui/material';

interface ContentPaperProps {
  title: string;
  content: string;
}

const ContentPaper = ({ title, content }: ContentPaperProps) => {
  const isMediumScreen = useMediaQuery('(min-width:1280px)');

  return (
    <Paper
      sx={{
        mt: isMediumScreen ? 15 : 5,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography
        sx={{
          color: '#397f77',
          pt: isMediumScreen ? 10 : 5,
          alignSelf: 'flex-start',
          fontFamily: 'serif',
          fontSize: isMediumScreen ? 35 : 20,
          pl: isMediumScreen ? 30 : 2,
          pr: isMediumScreen ? 30 : 2,
        }}>
        {title}
      </Typography>
      <Typography
        sx={{
          color: '#397f77',
          pt: 1,
          alignSelf: 'flex-start',
          fontFamily: 'serif',
          fontSize: isMediumScreen ? 17 : 13,
          pl: isMediumScreen ? 30 : 2,
          pr: isMediumScreen ? 30 : 2,
        }}>
        {content}
      </Typography>
      <Button
        variant='contained'
        size={isMediumScreen ? undefined : 'small'}
        sx={{ mt: isMediumScreen ? 20 : 10, mb: isMediumScreen ? 10 : 5 }}>
        {'Learn More'}
      </Button>
    </Paper>
  );
};

export default ContentPaper;
