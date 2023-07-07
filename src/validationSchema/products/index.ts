import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  seller_id: yup.string().nullable(),
});
