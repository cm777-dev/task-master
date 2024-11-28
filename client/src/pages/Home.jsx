import { Container, Typography, Grid, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h1" gutterBottom>
            Find the Perfect Service Provider
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Connect with skilled professionals for all your service needs. From home repairs to personal care,
            we've got you covered.
          </Typography>
          <Button
            component={RouterLink}
            to="/services"
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
          >
            Browse Services
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
