import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    ssn: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object({
    ssn: Yup.string().required("Lütfen SSN giriniz."),
    firstName: Yup.string().required("Lütfen adınızı giriniz."),
    lastName: Yup.string().required("Lütfen soyadınızı giriniz."),
    email: Yup.string()
      .email("Geçersiz e-posta adresi") 
      .required("Lütfen e-posta adresinizi giriniz."),
    password: Yup.string()
      .required("Lütfen şifrenizi giriniz.")
      .min(8, "Şifreniz en az 8 karakter içermelidir.")
      .matches(/[a-z]+/, "Şifreniz en az bir küçük harf içermelidir.")
      .matches(/[A-Z]+/, "Şifreniz en az bir büyük harf içermelidir.")
      .matches(/[0-9]+/, "Şifreniz en az bir rakam içermelidir.")
      .matches(/[!@#$%^&*]+/, "Şifreniz en az bir özel karakter içermelidir."),
    address: Yup.string().required("Lütfen adresinizi giriniz."),
    phoneNumber: Yup.string()
    .matches(
      /^(\+?(\d{1,3}))?[-.\s]?(\(?\d{1,4}\)?[-.\s]?)?(\d{1,4}[-.\s]?)?(\d{1,9})$/,
      "Geçersiz telefon numarası"
    )
    .required("Lütfen telefon numaranızı giriniz."),
  });
  

  const onSubmit = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Kayit Basarili");
      navigate("/");
    }, 2000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Card style={{width:"30rem" , margin:"3rem auto"}}>
      <Card.Body>
        <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" >
            <Form.Label>SSN</Form.Label>
            <Form.Control type="text"
            {...formik.getFieldProps("ssn")}
            isInvalid={formik.touched.ssn && formik.errors.ssn}
            isValid={formik.touched.ssn && !formik.errors.ssn} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.ssn}
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group className="mb-3" >
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text"
            {...formik.getFieldProps("firstName")}
            isInvalid={formik.touched.firstName && formik.errors.firstName}
            isValid={formik.touched.firstName && !formik.errors.firstName} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>


          
          <Form.Group className="mb-3" >
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text"
            {...formik.getFieldProps("lastName")}
            isInvalid={formik.touched.lastName && formik.errors.lastName}
            isValid={formik.touched.lastName && !formik.errors.lastName} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>

            
          <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"
            {...formik.getFieldProps("email")}
            isInvalid={formik.touched.email && formik.errors.email}
            isValid={formik.touched.email && !formik.errors.email} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
            {...formik.getFieldProps("password")}
            isInvalid={formik.touched.password && formik.errors.password}
            isValid={formik.touched.password && !formik.errors.password} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Address</Form.Label>
            <Form.Control type="text"
            {...formik.getFieldProps("address")}
            isInvalid={formik.touched.address && formik.errors.address}
            isValid={formik.touched.address && !formik.errors.address} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.address}
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group className="mb-3" >
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number"
            {...formik.getFieldProps("phoneNumber")}
            isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
            isValid={formik.touched.phoneNumber && !formik.errors.phoneNumber} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.phoneNumber}
            </Form.Control.Feedback>
          </Form.Group>

           <Button type="submit" variant="success"
            disabled={!formik.dirty || !formik.isValid || loading}
            >{loading && <Spinner animation="border" />}  Register</Button>

        </Form>
      </Card.Body>
    </Card>
  );
};

export default Register;
