import React, { useEffect, useState } from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import "./AccCards.css";

import { getDocs } from "firebase/firestore";
import Modal from "react-modal";
import { useAddCash } from "../../context/AddCashContext";
import { useMonth } from "../../context/MonthContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function AccCards() {
  const { month } = useMonth();
  const {
    setAmount,
    setReceiptDate,
    setDescription,
    setCategory,
    addCash,
    addSpend,
    receitasCollectionRef,
    despesasCollectionRef,
  } = useAddCash();

  let subtitle;
  const [modalCashIsOpen, setModalCashIsOpen] = React.useState(false);
  const [modalSpendIsOpen, setModalSpendIsOpen] = React.useState(false);
  const currentMonth = month;
  const [receitas, setReceitas] = useState([]);
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    const getReceitas = async () => {
      const data = await getDocs(receitasCollectionRef);
      setReceitas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getReceitas();
  }, [receitasCollectionRef]);
  useEffect(() => {
    const getDespesas = async () => {
      const data = await getDocs(despesasCollectionRef);
      setDespesas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDespesas();
  }, [despesasCollectionRef]);

  function openModalCash() {
    setModalCashIsOpen(true);
  }

  function afterOpenModalCash() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "blue";
  }

  function closeModalCash() {
    setModalCashIsOpen(false);
  }
  function openModalSpend() {
    setModalSpendIsOpen(true);
  }

  function afterOpenModalSpend() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModalSpend() {
    setModalSpendIsOpen(false);
  }

  const totalReceitas = receitas
    .reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0))
    .toFixed(2);
  const totalDespesas = despesas
    .reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseInt(0))
    .toFixed(2);
  const soma = parseFloat(totalReceitas) - parseFloat(totalDespesas).toFixed(2);
  const Total = parseFloat(soma).toFixed(2);
  return (
    <div className="acc-cards">
      <h2> Contas </h2>
      <div className="acc-container">
        {/* <div className="acc-card">
                    <div className="acc-text">
                        <button><AiOutlinePlus /></button>
                        <p> Nova conta </p>

                    </div>

                </div> */}
        <div className="acc-card">
          <div className="acc-text">
            <h5> Carteira </h5>
            <div className="saldo">
              <h3>Saldo</h3>
              <h3>R${Total}</h3>
            </div>
            <div className="buttons-acc">
              {/* MODAL PARA INSERIR ENTRADA DE DINHEIRO NA CONTA */}
              <Modal
                isOpen={modalCashIsOpen}
                onAfterOpen={afterOpenModalCash}
                onRequestClose={closeModalCash}
                style={customStyles}
                contentLabel="Receitas"
              >
                <div className="acc-text-modal">
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                    Adicionar dinheiro a sua conta
                  </h2>
                  <p>Você está no mes de {currentMonth} </p>
                </div>

                <form>
                  <div className="forms">
                    <div>
                      <input
                        type="number"
                        placeholder="Valor"
                        onChange={(event) => {
                          setAmount(event.target.value);
                        }}
                      />
                      <input
                        type="date"
                        placeholder="Data"
                        onChange={(event) => {
                          setReceiptDate(event.target.value);
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Descrição"
                        onChange={(event) => {
                          setDescription(event.target.value);
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Categoria"
                        list="receita"
                        onChange={(event) => {
                          setCategory(event.target.value);
                        }}
                      />
                      <datalist id="receita">
                        <option value="Salário"></option>
                        <option value="Investimento"></option>
                        <option value="Extra"></option>
                        <option value="Outros"></option>
                      </datalist>
                    </div>
                    <div className="btn-modal">
                      <button onClick={closeModalCash}>Cancelar</button>
                      <button type="submit" onClick={addCash}>
                        Salvar
                      </button>
                    </div>
                  </div>
                </form>
              </Modal>
              {/* FIM DA MODAL PARA INSERIR ENTRADA DE DINHEIRO NA CONTA */}

              {/* MODAL PARA INSERIR OS GASTOS DA CONTA */}
              <Modal
                isOpen={modalSpendIsOpen}
                onAfterOpen={afterOpenModalSpend}
                onRequestClose={closeModalSpend}
                style={customStyles}
                contentLabel="Despesas"
              >
                <div className="acc-text-modal">
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                    Adicionar uma despesa
                  </h2>
                  <p>Você está no mes de {currentMonth} </p>
                </div>

                <form>
                  <div className="forms">
                    <div>
                      <input
                        type="number"
                        placeholder="Valor"
                        onChange={(event) => {
                          setAmount(event.target.value);
                        }}
                      />
                      <input
                        type="date"
                        placeholder="Data"
                        onChange={(event) => {
                          setReceiptDate(event.target.value);
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Descrição"
                        onChange={(event) => {
                          setDescription(event.target.value);
                        }}
                      />

                      <input
                        type="text"
                        placeholder="Categoria"
                        list="despesas"
                        onChange={(event) => {
                          setCategory(event.target.value);
                        }}
                      />
                      <datalist id="despesas">
                        <option value="Casa"></option>
                        <option value="Educação"></option>
                        <option value="Eletrônicos"></option>
                        <option value="Lazer"></option>
                        <option value="Restaurante"></option>
                        <option value="Saúde"></option>
                        <option value="Serviços"></option>
                        <option value="Supermercado"></option>
                        <option value="Transporte"></option>
                        <option value="Vestuário"></option>
                        <option value="Viagem"></option>
                        <option value="Outros"></option>
                      </datalist>
                    </div>

                    <div className="btn-modal">
                      <button onClick={closeModalSpend}>Cancelar</button>
                      <button type="submit" onClick={addSpend}>
                        Salvar
                      </button>
                    </div>
                  </div>
                </form>
              </Modal>
              {/* FIM DA MODAL PARA INSERIR OS GASTOS DA CONTA */}

              <button onClick={openModalCash}>
                <BsFillArrowUpCircleFill />
                <p>Adicionar Receita</p>
              </button>
              <button onClick={openModalSpend}>
                <BsFillArrowDownCircleFill />
                Adicionar Despesa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
