import React, { createContext } from "react";
import { Produto } from "../interfaces/Produto";

export interface CarrinhoInterface {
  produtos: Produto[];
  valorTotal: number;
}

export const CarrinhoDefaultValue: CarrinhoInterface = {
  produtos: [],
  valorTotal: 0.0,
};

export const CarrinhoContext =
  createContext<CarrinhoInterface>(CarrinhoDefaultValue);

export const CarrinhoProvider: React.FC = ({ children }) => {
  return (
    <CarrinhoContext.Provider value={CarrinhoDefaultValue}>
      {children}
    </CarrinhoContext.Provider>
  );
};
