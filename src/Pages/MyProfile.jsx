import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation } from "react-router";
import { updateProfile, updatePassword, updateEmail, getAuth, reload } from "firebase/auth";
import toast from "react-hot-toast";
import Loading from "../Components/Loading";

const MyProfile = () => {
  const { user, setUser, loading } = useContext(AuthContext);
  const location = useLocation();
  //console.log(user);

  const [showModal, setShowModal] = useState(false);

  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
  e.preventDefault();

  const auth = getAuth(); 
  const currentUser = auth.currentUser; 

  if (!currentUser) {
    toast.error("No authenticated user found");
    return;
  }

  try {
    
    await reload(currentUser);

    
    await updateProfile(currentUser, {
      displayName: formData.name,
      photoURL: formData.photoURL,
    });

    
    // if (formData.email !== currentUser.email) {
    //   await updateEmail(currentUser, formData.email);
    // }

    
    // if (formData.password && formData.password.length >= 6) {
    //   await updatePassword(currentUser, formData.password);
    // }

    
    await reload(currentUser);
    setUser({ ...currentUser });
    setShowModal(false);
    toast.success("Profile updated successfully!");
  } catch (error) {
    console.error(error);
    toast.error(error.message || "Failed to update profile");
  }

  if (loading) {
    return <Loading />;
  }

};

  return (
    <div className="mt-16 max-w-10/12 mx-auto relative">
      <h2 className=" mt-30 text-5xl font-extrabold bg-purple-600 bg-clip-text text-transparent mb-4">
        Profile
      </h2>
      <p className="font-bold text-lg text-gray-600">
        View and edit your profile details here
      </p>

      {!user ? (
        <div className="text-center mt-20 mb-40">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 leading-relaxed">
            No User Found! <br />
            <Link
              state={location.pathname}
              to="/signup"
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:underline font-extrabold"
            >
              Sign Up
            </Link>{" "}
            or{" "}
            <Link
              state={location.pathname}
              to="/login"
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:underline font-extrabold"
            >
              Log In
            </Link>{" "}
            to visit your profile
          </h2>
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-center items-center my-15 gap-7">
            <div className="flex-4 border border-gray-300 rounded-xl min-h-90 w-full">
              <img
                className="h-60 w-60 mt-8 rounded-full cursor-pointer border-8 border-purple-400 mx-auto object-cover"
                src={
                  user.photoURL || "https://i.ibb.co/MBtjqXQ/default-avatar.png"
                }
                alt={user.displayName || "User"}
              />
              <button
                onClick={() => setShowModal(true)} 
                className="btn block mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold text-lg mt-5 px-10 pt-2 pb-9"
              >
                Update Details
              </button>
            </div>

            <div className="w-full flex-6 flex items-center border border-gray-300 rounded-xl min-h-90">
              <div className="mx-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Name:</h2>
                <h1 className="text-xl font-semibold text-gray-600 mb-5">
                  {user.displayName}
                </h1>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Email:</h2>
                <h1 className="text-xl font-semibold text-gray-600 mb-4">
                  {user.email}
                </h1>
              </div>
            </div>
          </div>

          
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              
              <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg relative animate-fadeIn">
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
                  Update Profile
                </h3>

                
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl font-bold"
                >
                  &times;
                </button>

                <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                  <label className="font-semibold text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered w-full rounded-lg"
                  />

                  <label className="font-semibold text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered w-full rounded-lg"
                  />

                  <label className="font-semibold text-gray-700">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    value={formData.photoURL}
                    onChange={handleChange}
                    className="input input-bordered w-full rounded-lg"
                  />

                  <label className="font-semibold text-gray-700">
                    New Password (optional)
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Leave blank to keep current"
                    className="input input-bordered w-full rounded-lg"
                  />

                  <div className="flex justify-center gap-5 mt-5">
                    <button
                      type="submit"
                      className="btn bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-10"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="btn border border-gray-400 text-gray-600 hover:bg-gray-100 px-10"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyProfile;
