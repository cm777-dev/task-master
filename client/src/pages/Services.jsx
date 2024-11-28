import { Container, Typography, Grid } from '@mui/material';
import ServiceCard from '../components/ServiceCard';

const sampleServices = [
  {
    id: 1,
    title: 'House Cleaning',
    description: 'Professional house cleaning services. We make your home sparkle!',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500',
    rating: 4.5,
    reviewCount: 28,
    pricing: { type: 'hourly', amount: 30 }
  },
  {
    id: 2,
    title: 'Plumbing Services',
    description: 'Expert plumbing repairs and installations. Available 24/7 for emergencies.',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=500',
    rating: 4.8,
    reviewCount: 45,
    pricing: { type: 'quote' }
  },
  {
    id: 3,
    title: 'Electrical Repairs',
    description: 'Licensed electrician for all your electrical needs. Safety first!',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=500',
    rating: 4.7,
    reviewCount: 32,
    pricing: { type: 'hourly', amount: 45 }
  }
];

const Services = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom sx={{ mt: 4 }}>
        Available Services
      </Typography>
      <Grid container spacing={3}>
        {sampleServices.map((service) => (
          <Grid item key={service.id} xs={12} sm={6} md={4}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
