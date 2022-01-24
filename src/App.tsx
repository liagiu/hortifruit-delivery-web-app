import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CarrinhoProvider } from "./providers/carrinho";
import Rotas from "./routes";

export default function App() {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </CarrinhoProvider>
  );
}
