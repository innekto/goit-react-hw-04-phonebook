import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { submitSchema } from 'components/Utils/ContactSchema';

import {
  ErrorMessage,
  Form,
  Label,
  SubtitleForm,
  Field,
  FormButton,
} from './ContactForm.styled';

const ContactForm = ({ contacts, onSubmitData }) => {
  const onSubmit = (values, action) => {
    const obj = {
      name: values.name.trim(),
      number: values.number.trim(),
      id: nanoid(),
    };

    const isIncluded = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase().trim()
    );

    if (isIncluded) {
      action.resetForm();
      alert(`${values.name.trim()} is already in contacts`);
      return;
    }

    onSubmitData(obj);
    action.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={submitSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Label>
            <SubtitleForm>Name</SubtitleForm>
            <Field type="text" name="name" />
            <ErrorMessage component="div" name="name" />
          </Label>
          <Label>
            <SubtitleForm>Number</SubtitleForm>
            <Field type="tel" name="number" />
            <ErrorMessage component="div" name="number" />
          </Label>
          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </Formik>
    </>
  );
};

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export { ContactForm };
