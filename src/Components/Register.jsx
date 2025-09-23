import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./Firebase.config";
const Register = () => {

    const handleRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            e.target.reset();
        }) .catch(error =>{
            console.error('error', error);
        })
    }

  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl py-2 px-4 mb-5">Please Register</h2>
        <form onSubmit={handleRegister} className="border p-5 rounded">
          <input className="mb-4 w-3/4 border py-2 px-4" type="email"  name="email" id="" placeholder="Email address"/>
          <br />
          <input className="mb-4 w-3/4 border py-2 px-4" type="password" name="password" id="" placeholder="Password"/>
          <br />
          <input className="btn btn-secondary mb-4 w-3/4" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
