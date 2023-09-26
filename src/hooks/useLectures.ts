import { useQuery } from "@tanstack/react-query";
import { Lecture } from "../../interface/Lecture";

const useLectures = (categories: string) => {
  return useQuery<{ lectureList: Lecture[] }>(["lecture_list"], () => {
    return fetch(`/api/lectures?categories=${categories}`)
      .then((res) => res.json())
      .then((data) => data);
  });
};

export default useLectures;
