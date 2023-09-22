import { render, screen } from "@testing-library/react";
import Detail from "../src/app/detail/page";
import "@testing-library/jest-dom";

describe("Detail", () => {
  it("메뉴가 렌더링 되어야 한다.", () => {
    const { getByRole } = render(<Detail />);

    const menu = getByRole("navigation", { name: "fastcampus" });

    expect(menu).toBeInTheDocument();
  });

  it("배너가 렌더링 되어야 한다.", () => {
    const { getByRole } = render(<Detail />);

    const banner = getByRole("banner", { name: "" });

    expect(banner).toBeInTheDocument();
  });

  it("강의 상세가 렌더링 되어야 한다.", () => {
    const { getByTitle } = render(<Detail />);
    const lectureDetail = getByTitle("lectureDetail", { name: "" });

    expect(lectureDetail).toBeInTheDocument();
  });
});
