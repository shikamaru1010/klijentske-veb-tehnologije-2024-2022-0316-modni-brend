import {Segment,Header,Form,Button} from 'semantic-ui-react'

type Props={
    setFormOpen: (value: boolean) => void;
}

export default function form({setFormOpen}:Props) {
  return (
    <Segment clearing>
        <Header content = "Ask us" />
        <Form>
            <Form.Field>
                <input type='text' placeholder='Question title' />
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='Question species' />
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='Description' style={{height: '15rem'}}/>
            </Form.Field>

            <Button type='submit' floated='right' positive content="Submit"/>
            <Button 
            onClick={() => setFormOpen(false)}
            floated='right' positive content='Cancel'/>
        </Form>
    </Segment>
  )
}
