import UserClass from "./UserClass";
import React from "react";
import userContext from "../utils/userContext";

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
      <div className="min-h-screen bg-gray-100 flex flex-col pt-28 items-center py-10 px-6 space-y-8">
        {/* User Info Section */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 text-center">
          <UserClass />
        </div>

        {/* About Section */}
        <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
          <div>
            Logged In User
            <userContext.Consumer>
              {({ loggedInUser }) => <h1>{loggedInUser}</h1>} 
            </userContext.Consumer>
          </div>
          <p className="text-gray-700 text-lg mb-3">
            Welcome to our website! This is the About Page where you can learn
            more about us.
          </p>
          <p className="text-gray-700 text-lg">
            We are passionate about building modern web applications using{" "}
            <span className="font-semibold text-amber-600">React</span>.
          </p>
        </div>
      </div>
    );
  }
}

// console.log("About called");
export default About;
