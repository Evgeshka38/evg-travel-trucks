'use client';

import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { IoAlertCircleOutline } from 'react-icons/io5';

import { createBookingRequest } from '@/lib/api/campersApi';

import css from './BookingForm.module.css';

type BookingFormProps = {
  camperId: string;
};

type BookingFormValues = {
  name: string;
  email: string;
};

const initialValues: BookingFormValues = {
  name: '',
  email: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(
      /^[A-Za-zА-Яа-яІіЇїЄєҐґ' -]+$/,
      'Please enter your name.'
    )
    .min(2, 'Please enter your name.')
    .required('Please enter your name.'),

  email: Yup.string()
    .trim()
    .email('Please enter your email.')
    .required('Please enter your email.'),
});

export default function BookingForm({
  camperId,
}: BookingFormProps) {
  return (
    <section className={css.booking}>
      <h2 className={css.title}>
        Book your campervan now
      </h2>

      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik<BookingFormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          try {
            const response =
              await createBookingRequest(
                camperId,
                {
                  name: values.name.trim(),
                  email: values.email.trim(),
                }
              );

            toast.success(
              response.message ||
                'Booking request sent successfully'
            );

            actions.resetForm();
          } catch {
            toast.error(
              'Failed to send booking request'
            );
          } finally {
            actions.setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          touched,
          isSubmitting,
        }) => {
          const nameError =
            touched.name && errors.name;

          const emailError =
            touched.email && errors.email;

          return (
            <Form className={css.form}>
              <div className={css.field}>
                <div
                  className={`${css.inputWrapper} ${
                    nameError
                      ? css.inputWrapperError
                      : ''
                  }`}
                >
                  {nameError && (
                    <label
                      htmlFor="name"
                      className={css.errorLabel}
                    >
                      Name*
                    </label>
                  )}

                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder={
                      nameError
                        ? ''
                        : 'Name*'
                    }
                    className={css.input}
                  />

                  {nameError && (
                    <IoAlertCircleOutline
                      className={css.errorIcon}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <ErrorMessage
                  name="name"
                  component="p"
                  className={css.error}
                />
              </div>

              <div className={css.field}>
                <div
                  className={`${css.inputWrapper} ${
                    emailError
                      ? css.inputWrapperError
                      : ''
                  }`}
                >
                  {emailError && (
                    <label
                      htmlFor="email"
                      className={css.errorLabel}
                    >
                      Email*
                    </label>
                  )}

                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder={
                      emailError
                        ? ''
                        : 'Email*'
                    }
                    className={css.input}
                  />

                  {emailError && (
                    <IoAlertCircleOutline
                      className={css.errorIcon}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <ErrorMessage
                  name="email"
                  component="p"
                  className={css.error}
                />
              </div>

              <button
                type="submit"
                className={css.button}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? 'Sending...'
                  : 'Send'}
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}