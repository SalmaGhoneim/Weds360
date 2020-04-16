import React from "react";
import { render } from "@testing-library/react";
import Services from "./Services";

test("renders Services component without crashing", () => {
  let testData = {
    className: ""
  };
  const { getByTestId } = render(<Services testData />);
  expect(getByTestId("services")).toBeInTheDocument();
});
