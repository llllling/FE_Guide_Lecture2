import { Tag } from "../../../interface/Lecture";

const TagList = ({ tags }: { tags: Tag[] }) => {
  const list = tags.map((tag) => <span key={tag.id}>{tag.name}</span>);

  return <div>{list}</div>;
};

export default TagList;
