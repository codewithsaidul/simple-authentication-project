
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";


const Login = () => {

  const {logIn} = useContext(AuthContext)


  const naviGate = useNavigate();

      const handleLogin= (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        

        console.log(email, password)

        logIn(email, password)
        .then(result => {
          console.log(result.user)
          e.target.reset();
          naviGate('/')
        })
        .catch(error => console.log(error.message))
      };

  return (
    <div className="flex justify-center items-center">
      <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div>
                <h2 className="text-center text-3xl text-rose-500 font-bold mb-7">
                  Login In Your Acount
                </h2>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="py-3 px-8 bg-rose-400 font-semibold rounded-3xl">
                  Login
                </button>
              </div>
              <p className="mt-5 text-lg text-gray-500 font-medium">
                New To Here? Please 
                <Link to="/register" className="text-rose-400 font-bold ml-2">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login