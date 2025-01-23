import { doc, setDoc } from "firebase/firestore";
import React, { createContext, useContext, useState } from "react";
import { db } from "../services/firebaseConfig";
import { useUserAuth } from "./UserAuthContext";

const userProfileContext = createContext();

export function UserProfileContextProvider({ children }) {
  const [fullName, setFullName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState();
  const [zipCode, setZipCode] = useState();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [birthday, setBirthday] = useState();
  const [sex, setSex] = useState("");
  const [cpf, setCpf] = useState();
  const [username, setUsername] = useState("");

  const { user } = useUserAuth();

  console.log("user.uid", user.uid);

  const createProfile = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "users", user.uid), {
      fullname: fullName,
      surname: surname,
      phone: phone,
      zip: zipCode,
      state: state,
      city: city,
      birthday: birthday,
      sex: sex,
      cpf: cpf,
      username: username,
    });
  };

  return (
    <userProfileContext.Provider
      value={{
        fullName,
        setFullName,
        surname,
        setSurname,
        phone,
        setPhone,
        zipCode,
        setZipCode,
        state,
        setState,
        city,
        setCity,
        birthday,
        setBirthday,
        sex,
        setSex,
        cpf,
        setCpf,
        username,
        setUsername,
        createProfile,
      }}
    >
      {children}
    </userProfileContext.Provider>
  );
}
export function useProfile() {
  return useContext(userProfileContext);
}
