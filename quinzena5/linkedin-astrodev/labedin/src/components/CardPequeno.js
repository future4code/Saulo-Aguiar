import React from "react";
import styled from "styled-components";

const LittleCardEstilizado = styled(CardPequeno)`
  border: 1px solid black;
  background-color: red;
`;

function CardPequeno(props) {
  return (
    <div className="littlecard-container">
      <img src={props.imagem} />
      <div>
        <p>{props.nome}</p>
        <p>{props.descricao}</p>
      </div>
    </div>
  );
}

export default CardPequeno;
