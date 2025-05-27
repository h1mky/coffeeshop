import "../adminPage/AdminPage.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormPanel = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(4, "Min 4 symbols")
      .required("This field is required"),
    password: Yup.string()
      .min(3, "Min 3 symbols")
      .required("This field is required"),
  });

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="text-center mb-4">Sign Up</h2>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form values", values);
          }}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <Field
                name="username"
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </div>

            <button type="submit" className="btn btn-fillter_active w-100">
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormPanel;
