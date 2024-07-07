import {Item,ItemGroup,Segment, SegmentGroup,List,Button } from "semantic-ui-react";
import CollectionListAttendee from "./CollectionListAttendee";

export default function CollectionListItem() {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
            <Item>
                <Item.Image size='small' src='./hotstuff3.jpg' />
                <Item.Content>
                    <Item.Header>Outfit + bonus hat</Item.Header>
                    <Item.Description>Step out in style with our Casual Cool Outfit, a perfect blend of classic pieces that every wardrobe needs. This thoughtfully curated ensemble features light denim jeans, a crisp white T-shirt, and a sleek black sweatshirt. Designed for ultimate comfort and effortless style, this outfit is ideal for casual outings, weekend hangouts, or just a relaxed day out.</Item.Description>
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
            <span>9990,00 din</span>
            <Button color = 'teal' floated='right' content='View' />
      </Segment>
    </SegmentGroup>
  )
}
