import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom sx={{ mt: 4 }}>
        Service Details
      </Typography>
      {/* Service details will be displayed here */}
    </Container>
  );
};

export default ServiceDetail;
