import React from "react";

const Forbidden = () => {
  return (
    <div>
      <h1>
        You are trying to access restricted campaign data. Unlike some other
        companies, we take our data security seriously. The FBI have been
        dispatched.
      </h1>
      <img
        src={`https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Federal_Bureau_of_Investigation.svg/600px-Federal_Bureau_of_Investigation.svg.png`}
      />
      <p>We will call them off if you log in now.</p>
    </div>
  );
};

export default Forbidden;
