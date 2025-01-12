import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './LoginForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations.js';
import sprite from '../../assets/icons.svg';
import { selectModalState } from '../../redux/modal/selectors.js';
import { closeModal } from '../../redux/modal/slice.js';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModalState);

  if (!isOpen) return null;

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    actions.resetForm();
    closeModalHandler();
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('This field is required!'),
    password: Yup.string()
      .required('This field is required!')
      .min(7, 'No less than 7 digits'),
  });

  return (
    <div className={s.background}>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <button
            className={s.btnClose}
            type="button"
            onClick={closeModalHandler}
          >
            <svg className={s.iconClose} width={30} height={30}>
              s<use href={`${sprite}#icon-x`}></use>
            </svg>
          </button>
          <div className={s.titleContainer}>
            <h2 className={s.title}>Log In</h2>
            <p className={s.subtitle}>
              Welcome back! Please enter your credentials to access your account
              and continue your babysitter search.
            </p>
          </div>
          <div className={s.inputContainer}>
            <div className={s.inputBox}>
              <Field
                className={s.input}
                id="email"
                type="email"
                name="email"
                placeholder="Email"
              />
              <label className={s.visuallyHidden} htmlFor="email">
                Email
              </label>
              <ErrorMessage name="email" component="span" className={s.error} />
            </div>
            <div className={s.inputBox}>
              <Field
                className={s.input}
                id="password"
                type="password"
                name="password"
                placeholder="Password"
              />

              <label className={s.visuallyHidden} htmlFor="password">
                Password
              </label>
              <ErrorMessage
                name="password"
                component="span"
                className={s.error}
              />
            </div>
          </div>
          <button className={s.btnSubmit} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
