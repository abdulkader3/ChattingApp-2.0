import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import { Bounce } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  //   fire base
  const auth = getAuth();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up successfully
          const user = userCredential.user;
          console.log("Registered user:", user);

          console.log(user);
          // You can redirect the user or perform additional actions here

        




        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          console.error("Registration error:", errorCode, errorMessage);
          if( errorCode == 'auth/email-already-in-use'){
            toast.error('email already in use !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
                
          }
        });

      // virefition
      sendEmailVerification(auth.currentUser).then(() => {
        // Email verification sent!
        // ... 
        console.log(sendEmailVerification)
        toast.success(' Email verification sent !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
      });
    }
  };

  return (
    <div className="register-container">
      <div className="background-shapes">
        <div className="circle large"></div>
        <div className="circle small"></div>
        <div className="wave"></div>
      </div>
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <p className="options">
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
