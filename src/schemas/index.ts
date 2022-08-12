import * as yup from 'yup'

export const signInSchema = yup.object().shape({
  email: yup.string().required("email obrigatório").email("email inválido"),
  password: yup.string().required("senha obrigatória"),
});