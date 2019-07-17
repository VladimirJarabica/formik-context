import React, { useState } from "react";
import { Formik } from "formik";
import RenderCount from "./RenderCount";

const formContext = React.createContext({});

export const FormProvider = ({ children }) => {
  const [lastAvailableStep, setLastAvailableStep] = useState(0); // Last possible step

  return (
    <Formik
      initialValues={{ name: "", email: "", city: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 1000);
      }}
      validateOnChange={false}
      validate={values => {
        let errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        }
        if (errors.name || errors.email) {
          setLastAvailableStep(0);
          return errors;
        }
        setLastAvailableStep(1);
        if (!values.city) {
          errors.city = "Required";
        }
        return errors;
      }}
      render={props => {
        return (
          <formContext.Provider value={{ ...props, lastAvailableStep }}>
            {children}
            <RenderCount />
          </formContext.Provider>
        );
      }}
    />
  );
};

export default formContext;
