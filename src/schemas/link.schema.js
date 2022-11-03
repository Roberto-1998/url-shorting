import * as Yup from 'yup';

export const linkSchema = Yup.object({
  link: Yup.string()
    .url('Please enter a valid link')
    .required('Please add a link'),
});
