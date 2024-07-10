import { Grid, SegmentGroup,Segment } from 'semantic-ui-react';
import CollectionList from './CollectionList';
import Form from '../form/form'
import {useEffect, useState} from 'react'
import { AppCollection, AppQuestion } from '../../../types/collection';
import { sampleData } from '../../../api/sampleData';
import { Question } from '../../../api/sampleData1';
import QuestionList from './QuestionList';


type Props = {
  formOpen: boolean
  setFormOpen: (value: boolean) => void
}
export default function CollectionDashboard({formOpen,setFormOpen}: Props) {

  const[collections,setCollections] = useState<AppCollection[]>([]);

  useEffect(() => {
    setCollections(sampleData);
  },[])

  const[questions,setQuestions] = useState<AppQuestion[]>([])

  useEffect(() =>{
    setQuestions(Question);
  },[])

  function addQuestion(question: AppQuestion){
    setQuestions(prevState => {
      return [...prevState, question];
    })
  }



  return (
    <Grid>
        <Grid.Column width={10}>
            <CollectionList collections={collections} />
        </Grid.Column>
        <Grid.Column width={6}>
            {formOpen &&
            <Form setFormOpen={setFormOpen} addQuestion={addQuestion}/>}
            <SegmentGroup>
              <Segment>
                <h2>Recently asked questions</h2>
                <QuestionList questions={questions} />
              </Segment>
            </SegmentGroup>
        </Grid.Column>
    </Grid>
  )
}
