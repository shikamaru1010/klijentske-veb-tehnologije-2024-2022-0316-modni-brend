import { AppQuestion } from "../../../types/collection"
import QuestionListItem from "./QuestionListItem";

type Props = {
    questions: AppQuestion[];
   
}

export default function QuestionList({questions}: Props) {
  
    return (
    <>
    {questions.map((question:any) =>(
      <QuestionListItem key={question.id} question={question} />))}
    </>
  )
}
