import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ id: nanoid(), ...values }));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <label>Name</label>
        <Field type="text" name="name" className={css.input} />
        <ErrorMessage name="name" component="span" className={css.error} />
        
        <label>Number</label>
        <Field type="text" name="number" className={css.input} />
        <ErrorMessage name="number" component="span" className={css.error} />
        
        <button type="submit" className={css.btn}>Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;