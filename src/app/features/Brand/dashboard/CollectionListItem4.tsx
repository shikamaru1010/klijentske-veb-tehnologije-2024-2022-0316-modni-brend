import {Item,ItemGroup,Segment, SegmentGroup,List,Button } from "semantic-ui-react";
import CollectionListAttendee from "./CollectionListAttendee";

export default function CollectionListItem() {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
            <Item>
                <Item.Image size='small' src='./card1.jpg' />
                <Item.Content>
                    <Item.Header>Leather jacket</Item.Header>
                    <Item.Description>Elevate your wardrobe with the timeless allure of our Classic Leather Jacket. This iconic piece is designed to bring a touch of sophistication and edge to any outfit. Crafted from premium genuine leather, this jacket is not just a fashion statement but a testament to quality and durability. Perfect for both casual and semi-formal occasions, our leather jacket is a versatile addition to any closet.</Item.Description>
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
            <span>12990,00 din</span>
            <Button color = 'teal' floated='right' content='View' />
      </Segment>
    </SegmentGroup>
  )
}
