import { Container, Typography } from '@mui/material';

const Profile = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom sx={{ mt: 4 }}>
        My Profile
      </Typography>
      {/* Profile information will be displayed here */}
    </Container>
  );
};

export default Profile;
