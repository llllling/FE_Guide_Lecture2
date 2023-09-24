import { render } from "@testing-library/react";
import LectureItem from "../src/components/lecture/LectureItem";
import "@testing-library/jest-dom";

describe("강의 아이템은", () => {
  it("썸네일을 가지고 있어야 한다.", () => {
    const { getByAltText } = render(<LectureItem />);
    const Thumb = getByAltText("초격차 패키지");
    expect(Thumb).toBeInTheDocument();
  });

  it("뱃지를 가지고 있어야 한다.", () => {
    const { getByText } = render(<LectureItem />);
    const Badge = getByText("평생소장");
    expect(Badge).toBeInTheDocument();
  });

  it("강의 제목을 렌더링 할 수 있어야 한다.", () => {
    const { getByRole } = render(<LectureItem />);
    const Title = getByRole("heading", {
      name: "일러스트레이터들을 위한 Stable Diffusion과 포토샵 활용법",
    });
    expect(Title).toBeInTheDocument();
  });

  it("강의 설명을 렌더링 해야한다.", () => {
    const { getByText } = render(<LectureItem />);
    const Desc = getByText(
      "Stable diffusion부터 포토샵까지! 반복 업무 지옥에서 해방시켜줄 AI 활용법"
    );
    expect(Desc).toBeInTheDocument();
  });
});
