import css from "./SignIn.module.css";
import { auth } from "../../firebase/fairbase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import toast from "react-hot-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      toast.success("Logged In");
      navigate("/catalog");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      <form action="" className={css.form} onSubmit={handleSubmit}>
        <div style={{ width: "100%" }}>
          <h3>LogIn</h3>
          <p>Come in! We are always ready to help you.</p>
        </div>

        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={css.input}
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={css.input}
          placeholder="Password"
        />

        <button type="submit" className={css["send-btn"]}>
          LogIn
        </button>
      </form>
    </>
  );
};

export default SignIn;
