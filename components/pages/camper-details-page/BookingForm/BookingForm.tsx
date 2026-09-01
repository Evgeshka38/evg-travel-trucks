'use client';

import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

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
    .min(2, 'Name must contain at least 2 characters')
    .required('Name is required'),

  email: Yup.string()
    .trim()
    .email('Enter a valid email')
    .required('Email is required'),
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
        }) => (
          <Form className={css.form}>
            <div className={css.field}>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Name*"
                className={`${css.input} ${
                  touched.name &&
                  errors.name
                    ? css.inputError
                    : ''
                }`}
              />

              <ErrorMessage
                name="name"
                component="p"
                className={css.error}
              />
            </div>

            <div className={css.field}>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email*"
                className={`${css.input} ${
                  touched.email &&
                  errors.email
                    ? css.inputError
                    : ''
                }`}
              />

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
        )}
      </Formik>
    </section>
  );
}