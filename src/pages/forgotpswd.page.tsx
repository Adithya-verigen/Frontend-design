import { Container, Grid, Box, Typography, Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '../components/FormInput';
import { Link, useNavigate } from 'react-router-dom'; // Ensure you're using react-router-dom
import styled from '@emotion/styled';
import KeyIcon from '@mui/icons-material/Key';

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`;

const forgotPasswordSchema = object({
  email: string().min(1, 'Email is required').email('Email is invalid'),
});

type IForgotPassword = TypeOf<typeof forgotPasswordSchema>;

const ForgotPasswordPage: FC = () => {
  const navigate = useNavigate();
  const defaultValues: IForgotPassword = {
    email: '',
  };

  const methods = useForm<IForgotPassword>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues,
  });

  const onSubmitHandler: SubmitHandler<IForgotPassword> = (values: IForgotPassword) => {
    console.log(values);
    // Handle password reset logic here
    navigate('/authentication'); // Navigate to authentication page after form submission
  };

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
      <Container
        maxWidth={false}
        sx={{
          height: '100vh',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          sx={{ width: '100%', height: '100%' }}
        >
          <Grid
            item
            sx={{
              maxWidth: '70rem',
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '8px',
              boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
            }}
          >
            <FormProvider {...methods}>
              <Grid
                container
                sx={{
                  py: '6rem',
                  px: { xs: '2rem', sm: '3rem' },
                }}
              >
                <Grid
                  item
                  container
                  justifyContent='center'
                  rowSpacing={5}
                  sx={{
                    maxWidth: { sm: '45rem' },
                    marginInline: 'auto',
                  }}
                >
                  <Grid item xs={12} sm={8}>
                    <Box
                      display='flex'
                      flexDirection='column'
                      component='form'
                      noValidate
                      autoComplete='off'
                      onSubmit={methods.handleSubmit(onSubmitHandler)}
                    >
                      <Box
                        sx={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          bgcolor: 'rgba(54, 131, 220, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 1.5rem',
                        }}
                      >
                        <KeyIcon sx={{ color: '#3683dc', fontSize: '24px' }} />
                      </Box>
                      <Typography
                        variant='h4'
                        component='h1'
                        sx={{
                          textAlign: 'center',
                          mb: '1rem',
                          color: '#333',
                        }}
                      >
                        Forgot Password?
                      </Typography>
                      <Typography
                        variant='body1'
                        sx={{ textAlign: 'center', mb: '2rem', color: '#555' }}
                      >
                        No worries, we'll send you reset instructions.
                      </Typography>

                      <FormInput
                        label='Enter your email'
                        type='email'
                        name='email'
                        focused
                        required
                      />

                      <LoadingButton
                        loading={false} // You can manage loading state if needed
                        type='submit'
                        variant='contained'
                        sx={{
                          py: '0.8rem',
                          mt: 2,
                          width: '80%',
                          marginInline: 'auto',
                          bgcolor: '#3683dc',
                          '&:hover': {
                            bgcolor: '#2a6cb9',
                          },
                        }}
                      >
                        Proceed
                      </LoadingButton>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container justifyContent='center'>
                  <Stack sx={{ mt: '3rem', textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '0.9rem' }}>
                      Remember your password?{' '}
                      <LinkItem to='/login'>Back to login</LinkItem> {/* Ensure this points to the correct route */}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </FormProvider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ForgotPasswordPage;