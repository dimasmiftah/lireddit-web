import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import InputField from '../components/InputField';
import Wrapper from '../components/Wrapper';
type Props = {};

const Register = (props: Props) => {
  return (
    <Wrapper>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name='username'
              placeholder='username'
              label='Username'
            />
            <Box mt={4}>
              <InputField
                name='password'
                placeholder='password'
                label='Password'
                type={'password'}
              />
            </Box>
            <Button
              type='submit'
              colorScheme='teal'
              mt={4}
              isLoading={isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
