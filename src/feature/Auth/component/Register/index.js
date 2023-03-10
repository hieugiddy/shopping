import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../../useSlice";
import RegisterForm from "../RegisterForm";

Register.propTypes = {
};

function Register({ handleClose }) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      values.username = values.email;
      const action = register(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      toast.success("Đăng kí thành công !");
      handleClose();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <RegisterForm handleClose={handleClose} onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
