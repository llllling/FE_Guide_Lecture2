import React from "react";
import LectureItem from "./LectureItem";
import useLectures from "@/hooks/useLectures";

type LectureListProps = {};

const LectureList = (props: LectureListProps) => {
  const { isLoading, data } = useLectures("Programming");

  if (isLoading) return <div>loading</div>;

  const lectrueItems = data?.lectureList.map((lecture) => {
    return <LectureItem key={lecture.id} lecture={lecture} />;
  });

  return <div>{lectrueItems}</div>;
};

export default LectureList;
