import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const myContext = createContext({});

export default function Context(props) {
  const [userObject, setUserObject] = useState();
  const [yelpEvents, setYelpEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getUser", { withCredentials: true })
      .then((response) => {
        if (response.data) {
          console.log("User Object:", response.data);
          setUserObject(response.data);
        }
      })
      .catch((error) => {
        console.log("error retrieving user", error);
      });
  }, []);

  return (
    <myContext.Provider
      value={{
        userObject,
        setUserObject,
        yelpEvents,
        setYelpEvents,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
}
