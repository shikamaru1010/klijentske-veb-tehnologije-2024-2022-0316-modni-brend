import {Item,ItemGroup,Segment, SegmentGroup,List,Button } from "semantic-ui-react";
import CollectionListAttendee from "./CollectionListAttendee";

export default function CollectionListItem() {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
            <Item>
                <Item.Image size='small' src='./card7.jpg' />
                <Item.Content>
                    <Item.Header></Item.Header>
                    <Item.Description></Item.Description>
                </Item.Content>
            </Item>
        </ItemGroup>
      </Segment>
      <Segment secondary>
        <List horizontal>
            <h3>People who show interest in this product</h3>
            <CollectionListAttendee />
        </List>
      </Segment>
      <Segment clearing>
            <span>4990,00 din</span>
            <Button color = 'teal' floated='right' content='View'  />
      </Segment>
    </SegmentGroup>
  )
}
