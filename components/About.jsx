import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log('Parent Component Did Mount');
  }

  render() {
    // console.log('Parent Render');
    return (
      <div>
        <div className="about">
          <h1>About Us</h1>
          <p>
            Welcome to our website! This is the About Page where you can learn
            more about us.
          </p>
          <p>
            We are passionate about building modern web applications using
            React.
          </p>
        </div>
        <UserClass
          name={"Shiva Pandit (Class)"}
          location={"Sabjibagh, Patna"}
        />
        
      </div>
    );
  }
}

// console.log("About called");
export default About;
