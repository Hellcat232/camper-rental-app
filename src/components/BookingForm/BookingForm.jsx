import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import css from "./BookingForm.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectOpenModal } from "../../redux/api/selectors";
import toast from "react-hot-toast";

const Validation = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  date: yup.date().required("Booking date is required"),
});

const BookingForm = ({ item }) => {
  const isOpenModal = useSelector(selectOpenModal);
  // const [modalIsOpen, setIsOpen] = useState(isOpenModal);
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Validation),
  });

  const onClose = () => {
    if (modalIsOpen) {
      setIsOpen(false);
    }
  };

  const toCatalog = () => {
    toast.success("Book success");
    navigate(`/catalog`);
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
    onClose();
  };

  return (
    <div>
      <form
        className={css.form}
        onSubmit={handleSubmit((event) =>
          onSubmit({
            name: event.name,
            email: event.email,
            date: event.date,
            comment: event.comment,
            item: item,
          })
        )}
      >
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
        {errors.email && <p>{errors.email.message}</p>}

        <label></label>
        <input
          type="date"
          className={css.input}
          placeholder="Booking date"
          {...register("date")}
        />
        {errors.date && <p>{errors.date.message}</p>}

        <label></label>
        <textarea
          type="text"
          style={{ height: "115px" }}
          className={css.input}
          placeholder="comment"
          {...register("comment")}
        />
        {errors.comment && <p>{errors.comment.message}</p>}

        <button onClick={toCatalog} type="submit" className={css["send-btn"]}>
          send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
