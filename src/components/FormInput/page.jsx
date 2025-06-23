import React from "react";

const FormInput = ({
  label,
  name,
  register,
  type = "text",
  errors,
  ...rest
}) => (
  <div>
    <label className="block font-medium">{label}</label>
    <input
      type={type}
      {...register(name)}
      {...rest}
      className="w-full border p-2 rounded mt-1"
    />
    {errors[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
    )}
  </div>
);

export default FormInput;
