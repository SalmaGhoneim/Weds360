import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

test("renders Footer component without crashing", () => {
  let testData = {
    className: ""
  };
  const { getByTestId } = render(<Footer testData />);
  expect(getByTestId("footer")).toBeInTheDocument();
});
