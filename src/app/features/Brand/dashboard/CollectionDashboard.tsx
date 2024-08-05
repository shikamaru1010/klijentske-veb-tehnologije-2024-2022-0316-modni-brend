import { Grid} from 'semantic-ui-react';
import CollectionList from './CollectionList';

import {useEffect, useState} from 'react'
import { AppCollection } from '../../../types/collection';






export default function CollectionDashboard() {

  const[collections,setCollections] = useState<AppCollection[]>([]);



  useEffect(() => {
    setCollections(collections);
  },[])



 
  

  return (
    <Grid>
        <Grid.Column width={10}>
            <CollectionList />
        </Grid.Column>
        <Grid.Column width={6}>
            <h2>Filters</h2>
        </Grid.Column>
    </Grid>
  )
}
