import { useState } from "react";

const User = (props) => {
  const [count]  = useState(0);
  const [count2]  = useState(1);
  return (
    <div className="user-card">
      <h2>Count ={count}</h2>
      <h2>Count ={count2}</h2>
      <h2>Name:{props.name}</h2>
      <h3>Location: Patna, Bihar</h3>
      <h4>Contact: github.com/venou</h4>
    </div>
  );
};
export default User;
