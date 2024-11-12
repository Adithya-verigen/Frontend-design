import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '../components/FormInput';
import { LinkItem } from './login.page';
import { useNavigate } from 'react-router-dom';

const signupSchema = object({
  name: string().min(1, 'Name is required').max(70),
  email: string().min(1, 'Email is required').email('Email is invalid'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  passwordConfirm: string().min(1, 'Please confirm your password'),
  securityQuestion: string().min(1, 'Security question is required'),
  securityAnswer: string().min(1, 'Answer is required'),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'Passwords do not match',
});

type ISignUp = TypeOf<typeof signupSchema>;

const SignupPage: FC = () => {
  const navigate = useNavigate();
  
  const defaultValues: ISignUp = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    securityQuestion: '',
    securityAnswer: '',
  };

  const methods = useForm<ISignUp>({
    resolver: zodResolver(signupSchema),
    defaultValues,
  });

  const onSubmitHandler: SubmitHandler<ISignUp> = (values: ISignUp) => {
    console.log(JSON.stringify(values, null, 4));
    // Handle signup logic here
    // After successful signup, navigate to the verification page
    navigate('/verification');
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
            <Grid
              container
              sx={{
                py: '6rem',
                px: { xs: '2rem', sm: '3rem' },
              }}
            >
              <FormProvider {...methods}>
                <Typography
                  variant='h4'
                  component='h1'
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    mb: '1.5rem',
                    pb: { sm: '3rem' },
                    color: '#333',
                  }}
                >
                  Welcome
                </Typography>
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
                      <Typography
                        variant='h6'
                        component='h1'
                        sx={{ textAlign: 'center', mb: '1.5rem', color: '#555' }}
                      >
                        Create your account
                      </Typography>

                      <FormInput label='Name' type='text' name='name' focused required />
                      <FormInput label='Enter your email' type='email' name='email' focused required />
                      <FormInput type='password' label='Password' name='password' required focused />
                      <FormInput type='password' label='Confirm Password' name='passwordConfirm' required focused />
                      <FormInput label='Security Question' type='text' name='securityQuestion' focused required />
                      <FormInput label='Answer' type='text' name='securityAnswer' focused required />

                      <LoadingButton
                        loading={false}
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
                        Sign Up
                      </LoadingButton>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container justifyContent='center'>
                  <Stack sx={{ mt: '3rem', textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '0.9rem', mb: '1rem' }}>
                      Already have an account? <LinkItem to='/'>Login</LinkItem>
                    </Typography>
                  </Stack>
                </Grid>
              </FormProvider>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignupPage;