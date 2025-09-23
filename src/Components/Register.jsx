import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./Firebase.config";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
const Register = () => {
  const [registerError, setRegisterError] = useState();
  const [Success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    if (password.length < 6) {
      setRegisterError("Password should be 6 characters or more");
      return;
    } else if (/[A-Z]/.test(password)) {
      setRegisterError("Password should contain at least one uppercase letter");
      return;
    }

    // reset error
    setRegisterError("");
    setSuccess("");

    // create User
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        // e.target.reset();
        setSuccess("User Created Successfully", user);
      })
      .catch((error) => {
        setRegisterError(error.message);
        // console.error('error', error);
      });
  };

  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl py-2 px-4 mb-5">Please Register</h2>
        <form onSubmit={handleRegister} className="p-5 rounded">
          <input
            className="mb-4 w-3/4 border py-2 px-4"
            type="email"
            name="email"
            id=""
            placeholder="Email address"
            required
          />
          <br />
          <div className="relative">
            <input
              className="w-3/4 border py-2 px-4 mb-4"
              type={showPassword ? "text" : "password"}
              name="password"
              id=""
              placeholder="Password"
              required
            />
            <span className="absolute top-2 text-2xl ml-1" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoEyeOffSharp /> : <FaEye />}
            </span>
            <br />
            <input
              className="btn btn-secondary mb-4 w-3/4"
              type="submit"
              value="Register"
            />
          </div>
        </form>
        {registerError && <p className="text-red-600">{registerError}</p>}
        {Success && <p className="text-green-600">{Success}</p>}
      </div>
    </div>
  );
};

export default Register;
