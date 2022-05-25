import { useState, useContext, createContext } from "react";

const UserContext = createContext([
  {
    prefix: "Sir",
    firstName: "Robert",
    middleName: "Bryson",
    lastName: "Hall",
    suffix: 1,
    email: "bobbobberson@example.com",
  },
  (obj) => obj,
]);

const LevelFive = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <h5 className="pb-4">{`${user.prefix} ${user.firstName} ${user.middleName} ${user.lastName} the ${user.suffix} born`}</h5>
      <button
        className="mx-2 inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-1 text-sm font-medium text-white focus:outline-none"
        onClick={() => {
          setUser(Object.assign({}, user, { suffix: user.suffix + 1 }));
        }}
      >
        Increment
      </button>
    </div>
  );
};

const LevelFour = () => (
  <div>
    <h4 className="pb-2">fourth level</h4>
    <LevelFive />
  </div>
);

const LevelThree = () => (
  <div>
    <h3 className="pb-2">third level</h3>
    <LevelFour />
  </div>
);

const LevelTwo = () => (
  <div>
    <h2 className="pb-2">second level</h2>
    <LevelThree />
  </div>
);

const ContextComponent = () => {
  const userState = useState({
    prefix: "",
    firstName: "Jacques",
    middleName: "Berman",
    lastName: "Webster",
    suffix: 1,
    email: "jamesjameson@example.com",
  });

  return (
    <div className="pt-2 pb-6 text-center">
      <h1 className="pb-2 text-2xl font-bold">useContext</h1>
      <UserContext.Provider value={userState}>
        <h1 className="pb-2">first level</h1>
        <LevelTwo />
      </UserContext.Provider>
    </div>
  );
};

export default ContextComponent;
