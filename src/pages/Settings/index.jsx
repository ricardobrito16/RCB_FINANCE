import React from "react";
import Sidebar from "../../components/Sidebar";
import { useProfile } from "../../context/UserProfileContext";
import "./Settings.css";

export default function Settings() {
  const {
    setFullName,
    setSurname,
    setPhone,
    setZipCode,
    setState,
    setCity,
    setBirthday,
    setSex,
    setCpf,
    setUsername,
    createProfile,
  } = useProfile();

  return (
    <>
      <div className="dashboard">
        <div className="sidebar-fixed">
          <Sidebar />
        </div>

        <div className="up-side">
          <h2>Meus Dados</h2>
          <form>
            <div className="user-form">
              <div className="form-left">
                <div>
                  <input
                    type="text"
                    placeholder="Nome completo"
                    onChange={(event) => {
                      setFullName(event.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Apelido"
                    onChange={(event) => {
                      setSurname(event.target.value);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
                  <input
                    type="number"
                    placeholder="Telefone"
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="date"
                    placeholder="Aniversário"
                    onChange={(event) => {
                      setBirthday(event.target.value);
                    }}
                  />
                  <input
                    type="number"
                    placeholder="CPF"
                    onChange={(event) => {
                      setCpf(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-right">
                <div>
                  <input
                    type="number"
                    placeholder="CEP"
                    onChange={(event) => {
                      setZipCode(event.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Estado"
                    onChange={(event) => {
                      setState(event.target.value);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Cidade"
                    onChange={(event) => {
                      setCity(event.target.value);
                    }}
                  />
                </div>
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="masculino"
                    name="sex"
                    value={"Masculino"}
                    onChange={(event) => {
                      setSex(event.target.value);
                    }}
                  />
                  <label htmlFor="Masculino">Masculino</label>
                  <input
                    type="radio"
                    id="feminino"
                    name="sex"
                    value={"Feminino"}
                    onChange={(event) => {
                      setSex(event.target.value);
                    }}
                  />
                  <label htmlFor="feminino">Feminino</label>
                </div>
                <div className="button-save">
                  <button onClick={createProfile} type="submit">
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
