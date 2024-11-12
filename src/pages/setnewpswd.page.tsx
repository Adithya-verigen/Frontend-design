import { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import KeyIcon from '@mui/icons-material/Key'

export default function Component() {
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password reset logic here
    console.log('Password reset submitted:', passwords)
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
        gap: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(67, 97, 238, 0.1)',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 1,
        }}
      >
        <KeyIcon
          sx={{
            color: '#4361ee',
            fontSize: 24,
          }}
        />
      </Box>

      <Typography
        variant="h6"
        component="h1"
        sx={{
          color: '#1a1a1a',
          fontWeight: 500,
        }}
      >
        Set New Password
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          textAlign: 'center',
          mb: 2,
        }}
      >
        Your new password must be different to previously used passwords.
      </Typography>

      <TextField
        fullWidth
        type="password"
        label="New Password"
        value={passwords.newPassword}
        onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
        helperText="Must be at least 8 characters."
        sx={{
          maxWidth: 400,
          mb: 1,
        }}
      />

      <TextField
        fullWidth
        type="password"
        label="Confirm New Password"
        value={passwords.confirmPassword}
        onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })}
        sx={{
          maxWidth: 400,
          mb: 3,
        }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: '#4361ee',
          maxWidth: 400,
          py: 1.5,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#3451db',
          },
        }}
      >
        Reset Password
      </Button>
    </Box>
  )
}