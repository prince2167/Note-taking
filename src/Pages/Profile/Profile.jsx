import { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import classes from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      alert(error.message);
      toast(error);
    }
    toast.success("Logged out");
  };
  return (
    <div className={classes.profilePage}>
      <div className={classes.profileCard}>
        <h1>User Profile</h1>
        <img
          src="https://res.cloudinary.com/dptfwcnro/image/upload/v1685077996/E-comm%20ATTIREX/avtar/pngtree-beard-family-girl-playing-avatar-image_1138008_f8w31f.jpg"
          alt="user"
          className={classes.userImage}
        />

        {user && (
          <p>
            <strong>Email: </strong>
            {user.email}
          </p>
        )}
        <button className={classes.logoutButton} onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
