import WelcomeSection from "../../components/WelcomSection/WelcomSection";
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";
import css from "./HomePage.module.css";
import { useState } from "react";

export default function HomePage() {
  const [isSignInMode, setIsSignInMode] = useState(true);

  const toggleMode = () => {
    setIsSignInMode(!isSignInMode);
  };

  return (
    <div>
      <WelcomeSection />

      <button onClick={toggleMode} className={css.btn}>
        {isSignInMode
          ? "Don't have an account? Sign Up"
          : "Already have an account? Sign In"}
      </button>

      {isSignInMode ? <SignIn /> : <SignUp />}
    </div>
  );
}
