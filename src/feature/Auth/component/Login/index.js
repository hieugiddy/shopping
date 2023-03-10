import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { toastError } from "../../../../components/Notification";
import { login } from "../../useSlice";
import LoginForm from "../LoginForm";

Login.propTypes = {
};

function Login({ handleClose }) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      toast.success("Đăng nhập thành công !");
      handleClose();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <LoginForm handleClose={handleClose} onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
