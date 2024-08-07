import { AppQuestion } from "../../../types/collection"
import QuestionListItem from "./QuestionListItem";
import { User } from "../product/UserI";
import UserCard  from "../dashboard/UserListI";
type Props = {
    questions: AppQuestion[];
   
}
const users: User[] = [
  { id: '1', name: 'Ratko', email: 'ratkosisovic@gmail.com' },
  { id: '2', name: 'Marko', email: 'msisovic@gmail.com' },
]

export default function QuestionList({questions}: Props) {
  
    return (
    <>
    {questions.map((question:any) =>(
      <QuestionListItem key={question.id} question={question} />))}
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  )
}
