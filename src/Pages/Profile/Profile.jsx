import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.profilePage}>
      <div className={classes.profileCard}>
        <h1>User Profile</h1>
        <img
          src="https://res.cloudinary.com/dptfwcnro/image/upload/v1685077996/E-comm%20ATTIREX/avtar/pngtree-beard-family-girl-playing-avatar-image_1138008_f8w31f.jpg"
          alt="user"
          className={classes.userImage}
        />
        <p>
          <strong>Name: </strong>
          Prince Singh
        </p>
        <p>
          <strong>Email: </strong>
          Prince@gmail.com
        </p>
        <button className={classes.logoutButton}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
