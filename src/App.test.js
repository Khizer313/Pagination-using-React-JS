import { render, screen } from "@testing-library/react";
import ConForTest from "./ConForTest";


test("test for input", () => {
 render(<ConForTest/>)
  const b = screen.getByRole("textbox" ,{type:'text'});
  expect(b).toBeInTheDocument();
  const a = screen.getByRole("textbox" ,{type:'number'});
  expect(a).toBeInTheDocument();
});


















// test('the first react app test ', () => {
//   render(<ConForTest />);
//   const text = screen.getByText(/learn react/i);
//   const txt = screen.getByTitle(/image/i);
//   expect(text).toBeInTheDocument();
//   expect(txt).toBeInTheDocument();
// });
