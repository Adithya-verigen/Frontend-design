import { Box, Button, Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { useNavigate } from 'react-router-dom'

export default function PasswordVerified() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/')
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__upload__20762-bM37lGVCw9FXESL3MqdezcgS1EcUHo.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          height: '100vh',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: '400px',
            width: '90%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '8px',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              backgroundColor: 'rgba(76, 175, 80, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <CheckCircleOutlineIcon
              sx={{
                color: '#4CAF50',
                fontSize: 32,
              }}
            />
          </Box>

          <Typography
            variant="h5"
            component="h1"
            sx={{
              color: '#1a1a1a',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Password Reset
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#555',
              textAlign: 'center',
              mb: 2,
            }}
          >
            Your password has been successfully reset.
            <br />
            Click below to log in magically.
          </Typography>

          <Button
            variant="contained"
            onClick={handleLogin}
            sx={{
              backgroundColor: '#4361ee',
              py: '0.8rem',
              px: '2rem',
              width: '80%',
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#3451db',
              },
            }}
          >
            Log in
          </Button>
        </Box>
      </Box>
    </Box>
  )
}