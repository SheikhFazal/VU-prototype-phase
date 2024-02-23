import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

export default function RHFTextField() {
  const { register, control, handleSubmit, watch } = useForm({
    resolver: yupResolver(),
  });
  return (
    <TextField
      {...register("password", { required: true })}
      size="small"
      type="password"
      sx={{ bgcolor: "white" }}
    />
  );
}
