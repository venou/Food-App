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
      <div className="userclass">
        <img src={avatar_url} />
        <h2>Name: {name} </h2>
        <h3>Bio: {bio} </h3>
        <h4>Contact: github.com/venou</h4>
      </div>
    );
  }
}
export default UserClass;
