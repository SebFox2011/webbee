import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const Features = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box component={Card} boxShadow={4} data-aos={'fade-up'}>
        <Box component={CardContent} padding={{ sm: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Box marginBottom={4}>
                <Typography fontWeight={600} variant={'h6'} gutterBottom>
                  Dedicated app development platform
                </Typography>
                <Typography>From open source to premium services.</Typography>
              </Box>
              <Grid container spacing={1}>
                {[
                  'All features',
                  'Email support',
                  'Google Ads',
                  'SSO via Google',
                  'API access',
                  'Facebook Ads',
                ].map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Box
                      component={ListItem}
                      disableGutters
                      width={'auto'}
                      padding={0}
                    >
                      <Box
                        component={ListItemAvatar}
                        minWidth={'auto !important'}
                        marginRight={2}
                      >
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.secondary.main}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      </Box>
                      <ListItemText primary={item} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                width={'100%'}
                height={'100%'}
                borderLeft={{ xs: 0, sm: `1px solid ${theme.palette.divider}` }}
                paddingLeft={{ xs: 0, sm: 4 }}
                paddingTop={{ xs: 4, sm: 0 }}
                borderTop={{ xs: `1px solid ${theme.palette.divider}`, sm: 0 }}
              >
                <Box marginBottom={4}>
                  <Box
                    component={Typography}
                    fontWeight={600}
                    variant={'h6'}
                    gutterBottom
                  >
                    A better way to Expand.
                    <br />
                    Globally.
                  </Box>
                  <Typography>
                    We make it simple to hire, onboard, and pay your global
                    workforce in 150+ countries in full compliance with local
                    laws.
                  </Typography>
                </Box>
                <Button size={'large'} variant={'contained'}>
                  Learn More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
