import { render, screen,fireEvent } from '@testing-library/react';
import App,{replaceCamelWithSpaces} from './App';


beforeEach(()=>{
  render(<App/>);
});

test('btn has correct initial color', () => {
  const colorBtn = screen.getByRole('button',{name:/change to midnight blue/i});
  expect(colorBtn).toHaveStyle({backgroundColor:'MediumVioletRed'});
});



test('btn turn blue when clicked', () => {
  const colorBtn = screen.getByRole("button",{name:/change to Midnight Blue/i});
  fireEvent.click(colorBtn);
  expect(colorBtn).toHaveStyle({backgroundColor:'MidnightBlue'});
  expect(colorBtn.textContent).toBe("Change to Medium Violet Red");
});

test('initial checkbox',()=>{
  const chkBox = screen.getByRole("checkbox",{name:/disable/i});
  const colorBtn = screen.getByRole("button",{name:/change to/i});
  expect(chkBox).not.toBeChecked();
  expect(colorBtn).toBeEnabled();
});

test('checkbox disable button',()=>{
  const chkBox = screen.getByRole("checkbox",{name:/disable/i});
  const colorBtn = screen.getByRole("button",{name:/change to/i});
  fireEvent.click(chkBox);
  expect(colorBtn).not.toBeEnabled();
});

test('gray button when disabled',()=>{
  const chkBox = screen.getByRole("checkbox",{name:/disable/i});
  const colorBtn = screen.getByRole("button",{name:/change to/i});
  fireEvent.click(chkBox);
  expect(colorBtn).toHaveStyle({backgroundColor:'gray'});
  fireEvent.click(chkBox);
  expect(colorBtn).toHaveStyle({backgroundColor:'MediumVioletRed'});
  fireEvent.click(colorBtn);
  fireEvent.click(chkBox);
  expect(colorBtn).toHaveStyle({backgroundColor:'gray'});
  fireEvent.click(chkBox);
  expect(colorBtn).toHaveStyle({backgroundColor:'MidnightBlue'});
});

describe("space before camel-case capital letters",()=>{
  test("no inner capital",()=>{
      expect(replaceCamelWithSpaces("Red")).toBe("Red");
   });

  test("1 inner cap",()=>{
      expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
   });

  test("2 inner caps",()=>{
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });


});