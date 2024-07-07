import { Grid } from 'semantic-ui-react';
import CollectionList from './CollectionList';
import Form from '../form/form'
import {useEffect, useState} from 'react'
import { AppCollection } from '../../../types/collection';
import { sampleData } from '../../../api/sampleData';


type Props = {
  formOpen: boolean
  setFormOpen: (value: boolean) => void
}
export default function CollectionDashboard({formOpen,setFormOpen}: Props) {

  const[collections,setCollections] = useState<AppCollection[]>([])

  useEffect(() => {
    setCollections(sampleData);
  },[])

  return (
    <Grid>
        <Grid.Column width={10}>
            <CollectionList collections={collections} />
        </Grid.Column>
        <Grid.Column width={6}>
            {formOpen &&
            <Form setFormOpen={setFormOpen}/>}
        </Grid.Column>
    </Grid>
  )
}
