import React from 'react';
import Typed from 'react-typed';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import { colors } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${theme.palette.primary.dark} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            An attractive landing for
            <br />
            your software library
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography variant="h6" align={'center'} color={'textSecondary'}>
            We design & develop amazing websites and digital products
            <br />
            for startups, companies and ourselves.
          </Typography>
        </Box>
        <Box
          marginBottom={{ xs: 4, sm: 6, md: 8 }}
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent={'center'}
          alignItems={{ xs: 'stretched', sm: 'center' }}
        >
          <Box
            component={Button}
            variant="contained"
            color="primary"
            size="large"
            fullWidth={!isMd}
            startIcon={<GitHubIcon />}
          >
            View on Github
          </Box>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            fullWidth={!isMd}
            marginTop={{ xs: 1, sm: 0 }}
            marginLeft={{ sm: 2 }}
          >
            Documentation
          </Box>
        </Box>
        <Box
          component={Card}
          bgcolor={colors.blueGrey[800]}
          padding={4}
          maxWidth={600}
          margin={'0 auto'}
          boxShadow={3}
        >
          <Typography color={theme.palette.common.white}>
            {'~$ > '}
            <Typed
              strings={['yarn install', 'yarn start']}
              typeSpeed={70}
              loop={true}
            />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
