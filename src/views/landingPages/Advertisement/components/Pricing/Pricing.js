import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';

const Pricing = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [pricingOption, setPricingOption] = useState('annual');

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Pricing
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          Pick the best plan based
          <br />
          on your ad spend
        </Box>
      </Box>
      <Grid container spacing={isMd ? 0 : 2}>
        <Grid item xs={12} md={6}>
          <Card data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <Box component={CardContent} padding={{ sm: 4 }}>
              <Box display={'flex'} justifyContent={'center'} marginBottom={4}>
                <ToggleButtonGroup
                  value={pricingOption}
                  exclusive
                  onChange={handleClick}
                >
                  <ToggleButton
                    value="annual"
                    size={'small'}
                    sx={{
                      backgroundColor:
                        pricingOption === 'annual'
                          ? `${theme.palette.primary.light} !important`
                          : 'transparent',
                      border: `1px solid ${theme.palette.primary.main}`,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 'medium',
                        color:
                          pricingOption === 'annual'
                            ? theme.palette.common.white
                            : 'primary',
                      }}
                    >
                      Annual
                    </Typography>
                  </ToggleButton>
                  <ToggleButton
                    value="monthly"
                    size={'small'}
                    sx={{
                      backgroundColor:
                        pricingOption === 'monthly'
                          ? `${theme.palette.primary.light} !important`
                          : 'transparent',
                      border: `1px solid ${theme.palette.primary.main}`,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 'medium',
                        color:
                          pricingOption !== 'annual'
                            ? theme.palette.common.white
                            : 'primary',
                      }}
                    >
                      Monthly
                    </Typography>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
              <Box marginBottom={4}>
                <Typography
                  fontWeight={600}
                  variant={'h2'}
                  align={'center'}
                  gutterBottom
                >
                  ${pricingOption === 'annual' ? '240' : '29'}
                </Typography>
                <Typography color="text.secondary" align={'center'}>
                  6 month of technical support.
                  <br />
                  Plus unlimited updates.
                </Typography>
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
            </Box>
            <Divider />
            <Box component={CardActions} justifyContent={'center'}>
              <Button size={'large'}>Learn More</Button>
            </Box>
          </Card>
        </Grid>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Box
            component={Card}
            bgcolor={theme.palette.primary.main}
            data-aos={isMd ? 'fade-left' : 'fade-up'}
          >
            <Box
              component={CardContent}
              padding={{ sm: 4 }}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Box color={theme.palette.common.white} marginBottom={4}>
                <svg
                  width={80}
                  height={80}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </Box>
              <Box
                component={Typography}
                variant={'h4'}
                color={theme.palette.common.white}
                fontWeight={600}
                gutterBottom
              >
                Customized
              </Box>
              <Box
                component={Typography}
                color={theme.palette.common.white}
                gutterBottom
                align={'center'}
              >
                Design a custom package for your business.
              </Box>
              <Box
                component={Typography}
                color={theme.palette.common.white}
                align={'center'}
              >
                Available for businesses with large payments volume or unique
                business models.
              </Box>
            </Box>
            <Divider />
            <Box component={CardActions} justifyContent={'center'}>
              <Box
                component={Button}
                color={theme.palette.common.white}
                size={'large'}
              >
                Contact sales
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pricing;
