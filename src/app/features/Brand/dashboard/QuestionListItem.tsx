import { Segment,ItemGroup,Item, ItemDescription } from 'semantic-ui-react'


export default function QuestionListItem({question}:any) {
  return (
    <Segment>
      <ItemGroup>
        <Item>
        <Item.Content>
            <Item><h3>Title</h3> {question.title}</Item>
            <Item><h4>Name:</h4> {question.name}</Item>
            <Item><h4>Summary:</h4> {question.species}</Item>
            <Item><h4>Date:</h4> {question.date}</Item>
            <ItemDescription><h4 style={{paddingBottom: '0.5rem'}}>Description:</h4>{question.description}</ItemDescription>
        </Item.Content>
        </Item>
      </ItemGroup>
    </Segment>
  )
}
