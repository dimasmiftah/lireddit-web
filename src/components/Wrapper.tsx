import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  variant?: 'small' | 'regular';
};

const Wrapper = ({ children, variant = 'regular' }: Props) => {
  return (
    <Box
      maxW={variant == 'regular' ? '800px' : '400px'}
      mt={8}
      mx='auto'
      w='100%'
    >
      {children}
    </Box>
  );
};

export default Wrapper;
