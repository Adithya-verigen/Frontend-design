import { Box, Button, Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Component() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <CheckCircleOutlineIcon
        sx={{
          color: '#4CAF50',
          fontSize: 48,
          mb: 1,
        }}
      />
      <Typography
        variant="h6"
        component="h1"
        sx={{
          color: '#1a1a1a',
          fontWeight: 500,
          mb: 2,
        }}
      >
        Verification Successful
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#4361ee',
          px: 4,
          py: 1,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#3451db',
          },
        }}
      >
        Sign in
      </Button>
    </Box>
  )
}