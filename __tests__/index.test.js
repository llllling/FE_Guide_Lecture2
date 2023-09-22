import { render } from "@testing-library/react";
import Home from "../src/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("강의 목록이 렌더링 되어야 한다.", () => {
    const { getByTitle } = render(<Home />);
    const lectureList = getByTitle("lectureList", { name: "" });

    expect(lectureList).toBeInTheDocument();
  });
});
