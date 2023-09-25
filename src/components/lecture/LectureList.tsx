import React from "react";
import LectureItem from "./LectureItem";
import { useQuery } from "@tanstack/react-query";
import { Lecture } from "../../../interface/Lecture";

type LectureListProps = {};

const LectureList = (props: LectureListProps) => {
  const { isLoading, data } = useQuery<{ lectureList: Lecture[] }>(
    ["lecture_list"],
    () => {
      return fetch("/api/lectures")
        .then((res) => res.json())
        .then((data) => data);
    }
  );
  console.log(data);
  if (isLoading) return <div>loading</div>;

  const lectrueItems = data!.lectureList.map((lecture) => {
    return <LectureItem key={lecture.id} lecture={lecture} />;
  });

  return <div>{lectrueItems}</div>;
};

export default LectureList;
