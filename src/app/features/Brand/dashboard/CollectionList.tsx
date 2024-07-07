import { AppCollection } from "../../../types/collection";
import CollectionListItem1 from "./CollectionListItem1";
import CollectionListItem2 from "./CollectionListItem2";
import CollectionListItem3 from "./CollectionListItem3";
import CollectionListItem4 from "./CollectionListItem4";
import CollectionListItem5 from "./CollectionListItem5";
import CollectionListItem6 from "./CollectionListItem6";


type Props = {
  collections: AppCollection[];
}
export default function CollectionList({collections}: Props) {
  return (
    <>
    <CollectionListItem1 />
    <CollectionListItem2 />
    <CollectionListItem3 />
    <CollectionListItem4 />
    {collections.map((collection: any) =>(
    <CollectionListItem5 key={collection.id}collection={collection}/>
    ))}
    <CollectionListItem6 />
    

    </>
  )
}
