import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const footerSections = [
  {
    title: 'Sobre',
    links: [
      { name: 'Quem Somos', path: '/about' },
      { name: 'Carreiras', path: '/careers' },
      { name: 'Blog', path: '/blog' },
      { name: 'Imprensa', path: '/press' },
    ],
  },
  {
    title: 'Para Profissionais',
    links: [
      { name: 'Cadastre-se como Profissional', path: '/register-professional' },
      { name: 'Central de Ajuda', path: '/help-center' },
      { name: 'Dicas', path: '/tips' },
    ],
  },
  {
    title: 'Para Clientes',
    links: [
      { name: 'Como Funciona', path: '/how-it-works' },
      { name: 'Garantia TaskMaster', path: '/guarantee' },
      { name: 'Ajuda', path: '/help' },
    ],
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.100',
        pt: 6,
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {footerSections.map((section) => (
            <Grid item xs={12} sm={6} md={3} key={section.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {section.title}
              </Typography>
              <Box>
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    component={RouterLink}
                    to={link.path}
                    color="text.secondary"
                    display="block"
                    sx={{
                      mb: 1,
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'primary.main',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Social Media Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Siga-nos
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                color="inherit"
                sx={{ '&:hover': { color: 'primary.main' } }}
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                color="inherit"
                sx={{ '&:hover': { color: 'primary.main' } }}
              >
                <TwitterIcon />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                color="inherit"
                sx={{ '&:hover': { color: 'primary.main' } }}
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                color="inherit"
                sx={{ '&:hover': { color: 'primary.main' } }}
              >
                <LinkedInIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4, pt: 3, borderTop: 1, borderColor: 'divider' }}
        >
          © {new Date().getFullYear()} TaskMaster. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
