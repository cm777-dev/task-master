import { Container, Typography, Grid, Button, Box, Paper, TextField, MenuItem, InputAdornment } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import SecurityIcon from '@mui/icons-material/Security';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PeopleIcon from '@mui/icons-material/People';

const categories = [
  'Assistência Técnica',
  'Aulas',
  'Autos',
  'Consultoria',
  'Design e Tecnologia',
  'Eventos',
  'Moda e Beleza',
  'Reformas',
  'Serviços Domésticos'
];

const popularServices = [
  'Eletricista',
  'Diarista',
  'Pedreiro',
  'Pintor',
  'Técnico de Geladeira',
  'Professor Particular',
  'Encanador',
  'Manicure a Domicílio'
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          pt: 8,
          pb: 12,
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8} textAlign="center">
              <Typography
                component="h1"
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 3
                }}
              >
                O que você precisa?
              </Typography>
              <Typography
                variant="h6"
                sx={{ mb: 4, opacity: 0.9 }}
              >
                Encontre os melhores profissionais para seu serviço
              </Typography>
              
              {/* Search Form */}
              <Paper
                component="form"
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  maxWidth: 800,
                  mx: 'auto'
                }}
              >
                <TextField
                  select
                  fullWidth
                  defaultValue=""
                  variant="outlined"
                  placeholder="Qual serviço você precisa?"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </TextField>
                
                <TextField
                  fullWidth
                  placeholder="Digite sua cidade"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'secondary.main',
                    color: 'white',
                    px: 4,
                    '&:hover': {
                      bgcolor: 'secondary.dark'
                    }
                  }}
                >
                  Buscar
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Popular Services */}
      <Container maxWidth="lg" sx={{ mt: -6, mb: 8, position: 'relative', zIndex: 1 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Serviços Populares
          </Typography>
          <Grid container spacing={2}>
            {popularServices.map((service) => (
              <Grid item xs={12} sm={6} md={3} key={service}>
                <Button
                  component={RouterLink}
                  to={`/services?q=${encodeURIComponent(service)}`}
                  variant="outlined"
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    py: 1
                  }}
                >
                  {service}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      {/* Benefits Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" textAlign="center" gutterBottom>
            Por que escolher o TaskMaster?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <SecurityIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Segurança
                </Typography>
                <Typography color="text.secondary">
                  Profissionais verificados e avaliados pela comunidade
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <ThumbUpIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Qualidade
                </Typography>
                <Typography color="text.secondary">
                  Serviços com garantia de satisfação
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <PeopleIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Comunidade
                </Typography>
                <Typography color="text.secondary">
                  Milhares de profissionais prontos para ajudar
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Categories Grid */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Categorias de Serviços
        </Typography>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Paper
                component={RouterLink}
                to={`/services?category=${encodeURIComponent(category)}`}
                sx={{
                  p: 3,
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}
              >
                <Typography variant="h6">{category}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
