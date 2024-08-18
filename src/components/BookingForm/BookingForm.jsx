import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { TextField } from "@mui/material";
import { TextareaAutosize } from "@mui/material";

const Validation = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Validation),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label></label>
      <input type="name" placeholder="Name" {...register("name")} />
      {errors.email && <p className="">{errors.name.message}</p>}

      <label className=""></label>
      <input type="email" placeholder="Email" {...register("email")} />
      {errors.password && <p>{errors.email.message}</p>}

      <label className=""></label>
      <input
        type="Booking date"
        placeholder="Booking date"
        {...register("Booking date")}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <label className=""></label>
      <textarea type="text" placeholder={""} {...register("comment")} />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">send</button>
    </form>
  );
};

export default BookingForm;
