import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import toast from "react-hot-toast";
import storage from "../firebase/firebase.config";


const Register = () => {

  const { createUser } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState();
  const [profileImage, setProfileImage] = useState(null);

  const naviGate =  useNavigate();


    const handleRegister = e => {
        e.preventDefault();

            // const name = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;



      if (password.length < 6) {
      setRegisterError('Password Should Be At Least 6 Character or Above');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your Password Should Have At Least One Uppercase Character!"
      ); 
      return;
    }


        // create new user
      createUser(email, password)
      .then((userCredential) => {
      if (profileImage) {
        const storageRef = storage.ref();
        const imageRef = storageRef.child(`profile_images/${userCredential.user.uid}`);
        return imageRef.put(profileImage)
          .then(() => imageRef.getDownloadURL())
          .then((imageURL) => {
            return userCredential.user.updateProfile({
              photoURL: imageURL
            });
          });
      }
    })
    .then(() => {
        toast.success("Account Created Successfully!");
        naviGate ('/login')
        e.target.reset();
    })
      .catch(() => setRegisterError("E-Mail Already In Used"))

    }



     const handleImageChange = (e) => {
       const file = e.target.files[0];
       setProfileImage(file);
     };


  return (
    <div className="flex justify-center items-center">
      <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div>
                <h2 className="text-center text-3xl text-rose-300 font-bold mb-7">
                  Register Now
                </h2>
                <p className="text-center text-base text-red-500 font-extrabold mb-7">
                  {registerError}
                </p>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Image</span>
                </label>
                <input
                  type="file"
                  className="file-input w-full input-bordered"
                  name="profileImage"
                  onChange={handleImageChange}
                />
              </div>
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