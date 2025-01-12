import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './RegistrationForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations.js';
import sprite from '../../assets/icons.svg';
import { selectModalState } from '../../redux/modal/selectors.js';
import { closeModal } from '../../redux/modal/slice.js';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModalState);

  if (!isOpen) return null;

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(registerThunk(values));
    actions.resetForm();
    closeModalHandler();
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .required('This field is required!')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
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
            <h2 className={s.title}>Registration</h2>
            <p className={s.subtitle}>
              Thank you for your interest in our platform! In order to register,
              we need some information. Please provide us with the following
              information.
            </p>
          </div>
          <div className={s.inputContainer}>
            <div className={s.inputBox}>
              <Field
                className={s.input}
                id="name"
                type="text"
                name="name"
                placeholder="Name"
              />
              <label className={s.visuallyHidden} htmlFor="name">
                Name
              </label>
              <ErrorMessage name="name" component="span" className={s.error} />
            </div>
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
            Sing Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
