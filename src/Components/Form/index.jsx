import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { Button, FormStructure, Input } from "./style";
import { useHistory } from "react-router-dom";

const Form = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must have at least 3 letters")
      .matches(/^[a-zA-Z ]*$/, "Name must have only letters"),
    email: yup.string().email("Invalid e-mail").required("E-mail is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "At least 8 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "At least 8 characters, 1 letters, 1 number and 1 special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "The passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    console.log(data);
    history.push(`/dashboard/${data.name}`);
    toast.success("Mission accomplished! Welcome aboard 🚀");
  };

  return (
    <FormStructure onSubmit={handleSubmit(handleLogin)}>
      <Input placeholder="Name" {...register("name")} />
      <span className="error errorName">{errors.name?.message}</span>
      <Input placeholder="E-mail" {...register("email")} />
      <span className="error errorEmail">{errors.email?.message}</span>
      <Input type="password" placeholder="Password" {...register("password")} />
      <span className="error errorPassword">{errors.password?.message}</span>
      <Input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      <span className="error errorConfirmPassword">
        {errors.confirmPassword?.message}
      </span>
      <Button type="submit">Sign up</Button>
    </FormStructure>
  );
};

export default Form;
