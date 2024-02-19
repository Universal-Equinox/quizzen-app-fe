import React from "react";
import { Answer } from "../types/post";

type AnswerCardProps = {
  answer: Answer;
};

const AnswerCard: React.FC<AnswerCardProps> = ({ answer }) => {
  return <>{answer.text}</>;
};

export default AnswerCard;
