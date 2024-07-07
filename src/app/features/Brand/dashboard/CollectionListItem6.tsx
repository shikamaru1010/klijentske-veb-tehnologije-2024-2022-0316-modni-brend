import {Item,ItemGroup,Segment, SegmentGroup,List,Button } from "semantic-ui-react";
import CollectionListAttendee from "./CollectionListAttendee";

export default function CollectionListItem() {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
            <Item>
                <Item.Image size='small' src='./card6.jpg' />
                <Item.Content>
                    <Item.Header>Burgundy T-Shirt</Item.Header>
                    <Item.Description>Add a touch of sophistication to your wardrobe with our Elegant Burgundy Shirt. This stylish piece is perfect for both professional settings and casual outings, offering a versatile addition to any closet. Made from high-quality fabric, this shirt ensures comfort, durability, and a flattering fit. The rich burgundy color exudes confidence and elegance, making it an essential piece for any fashion-forward individual.</Item.Description>
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
            <span>2990,00 din</span>
            <Button color = 'teal' floated='right' content='View' />
      </Segment>
    </SegmentGroup>
  )
}
