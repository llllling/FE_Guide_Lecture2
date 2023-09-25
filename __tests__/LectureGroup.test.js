import { render } from "@testing-library/react";
import LectureGroup from "../src/components/lecture/LectureGroup";
import "@testing-library/jest-dom";

describe("강의 그룹은", () => {
  it("제목을 가지고 있어야 한다.", () => {
    const { getByRole } = render(<LectureGroup />);
    const lectureTitle = getByRole("heading", {
      name: "이번주 베스트셀링 강의"
    });

    expect(lectureTitle).toBeInTheDocument();
  });

  it("뱃지를 가지고 있어야 한다.", () => {
    const { getByText } = render(<LectureGroup />);
    const badge = getByText("Best");

    expect(badge).toBeInTheDocument();
  });
});
