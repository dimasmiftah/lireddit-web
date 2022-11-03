import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useField } from 'formik';
import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const InputField = ({ size: _, ...props }: Props) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel>{props.label}</FormLabel>
      <Input {...field} {...props} placeholder={props.placeholder} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
