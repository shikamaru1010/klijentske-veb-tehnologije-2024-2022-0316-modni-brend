import {Item,ItemGroup,Segment, SegmentGroup,List,Button } from "semantic-ui-react";
import CollectionListAttendee from "./CollectionListAttendee";
import { Link } from "react-router-dom";
import { AppCollection } from "../../../types/collection";

type Props={
  collection: AppCollection;
}
export default function CollectionListItem() {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
            <Item>
                <Item.Image size='small' src='./hotstuff1.jpg' />
                <Item.Content>
                    <Item.Header>Oversized Pink T-Shirt</Item.Header>
                    <Item.Description>Step into the realm of comfort and style with our Oversized Pink T-shirt. Designed for those who love a relaxed fit without compromising on fashion, this T-shirt is perfect for any casual occasion. The gentle pink hue adds a touch of softness to your look, while the oversized silhouette ensures ultimate comfort throughout the day.</Item.Description>
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
            <span>3990,00 din</span>
            <Button color = 'teal' floated='right' content='View' />
      </Segment>
    </SegmentGroup>
  )
}
