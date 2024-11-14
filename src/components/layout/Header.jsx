import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: Text.secondary,
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
        </Container>
      </AppBar>
    </header>
  )
}
