import {Item,ItemGroup,Segment, SegmentGroup,List,Button } from "semantic-ui-react";
import CollectionListAttendee from "./CollectionListAttendee";

export default function CollectionListItem() {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
            <Item>
                <Item.Image size='small' src='./htostuff2.jpg' />
                <Item.Content>
                    <Item.Header>Outfit + bonus ball</Item.Header>
                    <Item.Description>Embrace the perfect blend of comfort and style with our Urban Explorer Outfit. This thoughtfully curated ensemble is designed for those who appreciate a sleek, modern look without compromising on practicality. Featuring black shorts, stylish sneakers, a dark green shirt, and a classic black T-shirt, this outfit is versatile enough for any casual or semi-casual occasion.</Item.Description>
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
            <span>11990,00 din</span>
            <Button color = 'teal' floated='right' content='View' />
      </Segment>
    </SegmentGroup>
  )
}
