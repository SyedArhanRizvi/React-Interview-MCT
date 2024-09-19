import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";

function App() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .oneOf(["rishiME@199"], 'Password must be "r__M_9"'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className="main">
           {" "}
      <div className="card">
               {" "}
        <div className="formSide">
                   {" "}
          <form onSubmit={formik.handleSubmit}>
                       {" "}
            <div>
                           {" "}
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name here.."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
                           {" "}
              {formik.touched.name && formik.errors.name ? (
                <p>{formik.errors.name}</p>
              ) : null}
                         {" "}
            </div>
                       {" "}
            <div>
                           {" "}
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email here.."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
                           {" "}
              {formik.touched.email && formik.errors.email ? (
                <p>{formik.errors.email}</p>
              ) : null}
                         {" "}
            </div>
                       {" "}
            <div>
                           {" "}
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password here.."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
                           {" "}
              {formik.touched.password && formik.errors.password ? (
                <p>{formik.errors.password}</p>
              ) : null}
                         {" "}
            </div>
                       {" "}
            <div>
                           {" "}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Your Password here.."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
                           {" "}
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <p>{formik.errors.confirmPassword}</p>
              ) : null}
                         {" "}
            </div>
                       {" "}
            <div>
                           {" "}
              <button
                type="submit"
                className="btn"
                disabled={!(formik.isValid && formik.dirty)}
              >
                                Submit              {" "}
              </button>
                         {" "}
            </div>
                     {" "}
          </form>
                 {" "}
        </div>
               {" "}
        <div className="Photo">
                   {" "}
          <img
            src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt="Form Image"
          />
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </section>
  );
}

export default App;
