import { Container, Typography, Grid } from '@mui/material';

const Services = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom sx={{ mt: 4 }}>
        Available Services
      </Typography>
      <Grid container spacing={3}>
        {/* Service cards will be mapped here */}
      </Grid>
    </Container>
  );
};

export default Services;
