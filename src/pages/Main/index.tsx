import axios from "axios";
import { useState } from "react";

interface User {
  name: string;
}

const Main = () => {
  const [UserData, setUserData] = useState<User[]>([]);

  axios
    .get("https://koreanjson.com/users")
    .then((response) => {
      setUserData(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
  return (
    <div>
      {UserData.map((el, i) => (
        <div>{el.name}</div>
      ))}
    </div>
  );
};

export default Main;
