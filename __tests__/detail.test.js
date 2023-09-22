import { render } from "@testing-library/react";
import Detail from "../src/app/detail/page";
import "@testing-library/jest-dom";

describe("Detail", () => {
  it("강의 상세가 렌더링 되어야 한다.", () => {
    const { getByTitle } = render(<Detail />);
    const lectureDetail = getByTitle("lectureDetail", { name: "" });

    expect(lectureDetail).toBeInTheDocument();
  });
});
