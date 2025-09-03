import User from "./User";
import UserClass from "../components/UserClass";
const About = () => {
  return (
    <div>
      <div className="about">
        <h1>About Us</h1>
        <p>
          Welcome to our website! This is the About Page where you can learn
          more about us.
        </p>
        <p>
          We are passionate about building modern web applications using React.
        </p>
      </div>
      <User name={"Shiva Pandit (function)"} />

      <UserClass name={"Shiva Pandit (Class)"} location={"Sabjibagh, Patna"} />
    </div>
  );
};
export default About;
