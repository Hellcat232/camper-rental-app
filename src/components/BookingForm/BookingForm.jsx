import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import css from "./BookingForm.module.css";

const Validation = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  date: yup.string().required("Booking date is required"),
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
    <div>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3>Book your campervan now</h3>
          <p>Stay connected! We are always ready to help you.</p>
        </div>
        <label></label>
        <input
          type="text"
          className={css.input}
          placeholder="Name"
          {...register("name")}
        />
        {errors.name && <p className="">{errors.name.message}</p>}

        <label></label>
        <input
          type="email"
          className={css.input}
          placeholder="Email"
          {...register("email")}
        />
        {errors.password && <p>{errors.email.message}</p>}

        <label></label>
        <input
          type="date"
          className={css.input}
          placeholder="Booking date"
          {...register("Booking date")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label></label>
        <textarea
          type="text"
          style={{ height: "115px" }}
          className={css.input}
          placeholder="comment"
          {...register("comment")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit" className={css["send-btn"]}>
          send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
