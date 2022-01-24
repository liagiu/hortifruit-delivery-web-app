import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import { CarrinhoContext } from "../../providers/carrinho";

const Home: React.FC = () => {
  const carrinho = useContext(CarrinhoContext);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
