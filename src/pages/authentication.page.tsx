import { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import KeyIcon from '@mui/icons-material/Key'

export default function AuthVerify() {
  const [answer, setAnswer] = useState('')
  const [securityQuestion, setSecurityQuestion] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle verification logic here
    console.log('Submitted question:', securityQuestion)
    console.log('Submitted answer:', answer)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        maxWidth: '400px',
        mx: 'auto',
        px: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(67, 97, 238, 0.1)',
          borderRadius: '50%',
          p: 2,
          mb: 1,
        }}
      >
        <KeyIcon
          sx={{
            color: '#4361ee',
            fontSize: 32,
          }}
        />
      </Box>

      <Typography
        variant="h5"
        component="h1"
        sx={{
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        Verify User
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          textAlign: 'center',
          mb: 2,
        }}
      >
        Fill the details as given during the time of sign up
      </Typography>

      <TextField
        fullWidth
        label="Security Question"
        variant="outlined"
        value={securityQuestion}
        onChange={(e) => setSecurityQuestion(e.target.value)}
        placeholder="Enter your security question"
        required
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Answer"
        variant="outlined"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        required
        sx={{ mb: 3 }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: '#4361ee',
          py: 1.5,
          textTransform: 'none',
          fontSize: '1rem',
          '&:hover': {
            backgroundColor: '#3451db',
          },
        }}
      >
        Submit
      </Button>
    </Box>
  )
}