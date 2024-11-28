import { Container, Typography, Grid, Button, Box, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HandymanIcon from '@mui/icons-material/Handyman';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';

const features = [
  {
    icon: <HandymanIcon sx={{ fontSize: 40 }} />,
    title: 'Professional Services',
    description: 'Connect with skilled and verified service providers in your area.'
  },
  {
    icon: <CleaningServicesIcon sx={{ fontSize: 40 }} />,
    title: 'Quality Work',
    description: 'Get high-quality services with satisfaction guarantee.'
  },
  {
    icon: <ElectricalServicesIcon sx={{ fontSize: 40 }} />,
    title: 'Fair Pricing',
    description: 'Compare prices and choose what works best for your budget.'
  }
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                component="h1"
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 4
                }}
              >
                Find the Perfect Service Provider
              </Typography>
              <Typography
                variant="h5"
                sx={{ mb: 4, opacity: 0.9 }}
              >
                Connect with skilled professionals for all your service needs.
                From home repairs to personal care, we've got you covered.
              </Typography>
              <Button
                component={RouterLink}
                to="/services"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100'
                  }
                }}
              >
                Browse Services
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'grey.50',
                  textAlign: 'center'
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
