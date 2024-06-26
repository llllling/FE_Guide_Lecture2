import React from "react";
import { Lecture } from "../../../interface/Lecture";
import TagList from "../tags/TagList";

interface LectureItemProps {
  lecture: Lecture;
}

const LectureItem = ({ lecture }: LectureItemProps) => {
  return (
    <div>
      <img src={lecture.thumb} alt="초격차 패키지" />
      <span>
        <TagList tags={lecture.tags} />
      </span>
      <h3>{lecture.title}</h3>
      <p>{lecture.description}</p>
    </div>
  );
};

export default LectureItem;
