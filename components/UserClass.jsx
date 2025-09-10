import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
   
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/venou");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
   
    const { name, bio, avatar_url } = this.state.userInfo;
   
    return (
      <div className="userclass m-2 p-2">
        <img className=" rounded-2xl m-2" src={avatar_url} />
        <h2 className=" font-bold flex text-2xl">Name: {name} </h2>
        <h3 className=" font-semibold " >Bio: {bio} </h3>
        <h4 className=" font-semibold">Contact: github.com/venou</h4>
      </div>
    );
  }
}
export default UserClass;
