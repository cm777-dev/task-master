import { Card, CardContent, CardMedia, Typography, Button, Box, Rating } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={service.image || 'https://via.placeholder.com/300x200'}
        alt={service.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {service.description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Rating value={service.rating} readOnly precision={0.5} />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({service.reviewCount} reviews)
          </Typography>
        </Box>
        <Typography variant="h6" color="primary" gutterBottom>
          {typeof service.pricing.amount === 'number'
            ? `$${service.pricing.amount}${service.pricing.type === 'hourly' ? '/hr' : ''}`
            : 'Quote on request'}
        </Typography>
        <Button
          component={RouterLink}
          to={`/services/${service.id}`}
          variant="contained"
          fullWidth
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
