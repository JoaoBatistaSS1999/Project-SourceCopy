import React, { ReactNode } from "react";
import { ButtonCard } from "./styles";

interface IProps {
  children: ReactNode;
}

const Card: React.FC<IProps> = ({ children }) => {
  return <ButtonCard>{children}</ButtonCard>;
};
export default Card;
