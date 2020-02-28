import React from "react";

const someContext = {
  name: "Techid",
  age: 20
};
const MyContext = React.createContext(someContext);

const A = () => <B />;
const B = () => (
  <div>
    <MyContext.Consumer>
      {value => (
        <p>
          {value.name} {value.age}
        </p>
      )}
    </MyContext.Consumer>
  </div>
);

const SandboxPage = () => {
  return (
    <div>
      <A />
      <MyContext.Provider value={{ ...someContext, name: "Boat" }}>
        <A />
      </MyContext.Provider>
    </div>
  );
};

export default SandboxPage;
