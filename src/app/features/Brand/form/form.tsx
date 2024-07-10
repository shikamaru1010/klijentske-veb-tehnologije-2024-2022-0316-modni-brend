import { useState } from 'react';
import {Segment,Header,Form,Button} from 'semantic-ui-react'
import { AppQuestion } from '../../../types/collection';
import { createId } from '@paralleldrive/cuid2';


type Props={
    setFormOpen: (value: boolean) => void;
    addQuestion: (question: AppQuestion) => void;
}

export default function form({setFormOpen,addQuestion}:Props) {
    const initialValues = {
        title: '',
        species: '',
        description: '',
        date: ''
    }
   
    const [values,setvalues] = useState(initialValues);

    function onSubmit(){
        addQuestion({...values, id: createId(),name: 'Marko',species: 'Buying',date: '',description: 'opis'});
        setFormOpen(false);
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        const {name,value} = e.target;
        setvalues({...values, [name]:value})
    }


  return (
    <Segment clearing>
        <Header content = "Ask us" />
        <Form onSubmit={onSubmit}>
            <Form.Field>
                <input 
                type='text' placeholder='Question title' value={values.title}
                name='title'
                onChange={e => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='Question species'
                value={values.species}
                name='species'
                onChange={e => handleInputChange(e)} />
            </Form.Field>
            <Form.Field>
                <input type='date' placeholder='Date'
                value={values.date}
                name='date'
                onChange={e => handleInputChange(e)}/>
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='Description' style={{height: '15rem'}}
                value={values.description}
                name='description'
                onChange={e => handleInputChange(e)}/>
            </Form.Field>

        

            <Button type='submit' floated='right' positive content="Submit"/>
            <Button 
            onClick={() => setFormOpen(false)}
            floated='right' positive content='Cancel'/>
        </Form>
    </Segment>
  )
}
