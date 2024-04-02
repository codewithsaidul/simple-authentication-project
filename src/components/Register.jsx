import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";


const Register = () => {

  const { createUser } = useContext(AuthContext);




    const handleRegister = e => {
        e.preventDefault();

            const name = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            e.target.email.value = '';
            e.target.password.value = "";

        console.log(name, email, password);


        // create new user
      createUser(email, password)
      .then(result => console.log(result.user))
      .catch(error => console.log(error.message))

      
    }


  return (
    <div className="flex justify-center items-center">
      <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div>
                <h2 className="text-center text-3xl text-rose-500 font-bold mb-7">
                  Register Now
                </h2>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Image</span>
                </label>
                <input
                  type="file"
                  className="file-input w-full input-bordered"
                  name="profileImage"
                />
              </div> */}
              <div className="form-control mt-6">
                <button className="py-3 px-8 bg-rose-400 font-semibold rounded-3xl">
                  Register
                </button>
              </div>
              <p className="mt-5 text-lg text-gray-500 font-medium">
                Already Have an Account Please{" "}
                <Link to="/login" className="text-rose-400 font-bold">
                  Login
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register