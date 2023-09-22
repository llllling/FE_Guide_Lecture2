import { render } from "@testing-library/react";
import Menu from "../src/components/Menu";
import "@testing-library/jest-dom";

describe("Menu는", () => {
  it("fastcampus라는 텍스트를 가지고 있어야 한다.", () => {
    const { getByText } = render(<Menu />);

    const menuText = getByText("fastcampus");

    expect(menuText).toBeInTheDocument();
  });
});
