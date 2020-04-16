import React from "react";
import { render } from "@testing-library/react";
import ImageContainer from "./ImageContainer";

test("renders image container without crashing", () => {
  let testData = {
    image: "/images/weddingDetails.png",
    label: "test Image",
    alt: "",
    className: ""
  };
  const { getByTestId } = render(<ImageContainer testData />);
  expect(getByTestId("imageContainer")).toBeInTheDocument();
});
