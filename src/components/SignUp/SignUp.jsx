import { useState } from "react";
import { auth } from "../../firebase/fairbase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import css from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeat) {
      toast.error("Password no matches!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      toast.success("Create account");
      navigate("/catalog");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <div style={{ width: "100%" }}>
          <h3>Create account</h3>
          <p>Join us! We are always ready to help you.</p>
        </div>

        <input
          type="email"
          name="email"
          className={css.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className={css.input}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="passsword"
          className={css.input}
          placeholder="Repeat password"
          value={repeat}
          onChange={(e) => setRepeat(e.target.value)}
        />

        <button type="submit" className={css["send-btn"]}>
          Create
        </button>
      </form>
    </>
  );
};

export default SignUp;
