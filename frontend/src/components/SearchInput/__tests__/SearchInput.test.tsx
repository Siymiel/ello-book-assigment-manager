import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../SearchInput";
import { SearchInputProps } from "../types";

jest.mock("../../../theme", () => ({
  theme: {
    palette: {
      common: {
        white: "#ffffff",
      },
    },
  },
}));

const renderComponent = (props: Partial<SearchInputProps> = {}) => {
  const defaultProps: SearchInputProps = {
    inputValue: "",
    handleInputChange: jest.fn(),
    handleClearInput: jest.fn(),
  };
  return render(<SearchInput {...defaultProps} {...props} />);
};

describe("SearchInput Component", () => {
  test("renders without crashing", () => {
    renderComponent();
    const inputElement = screen.getByLabelText(/search books/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("displays initial input value", () => {
    const inputValue = "Test Book";
    renderComponent({ inputValue });
    const inputElement = screen.getByDisplayValue(inputValue);
    expect(inputElement).toBeInTheDocument();
  });

  test("calls handleInputChange on input change", () => {
    const handleInputChange = jest.fn();
    renderComponent({ handleInputChange });
    const inputElement = screen.getByLabelText(/search books/i);

    fireEvent.change(inputElement, { target: { value: "New Book" } });
    expect(handleInputChange).toHaveBeenCalledTimes(1);
    expect(handleInputChange).toHaveBeenCalledWith(expect.anything());
  });

  test("displays clear button when input has value", () => {
    const inputValue = "Test Book";
    renderComponent({ inputValue });
    const clearButton = screen.getByRole("button");
    expect(clearButton).toBeInTheDocument();
  });

  test("does not display clear button when input is empty", () => {
    renderComponent();
    const clearButton = screen.queryByRole("button");
    expect(clearButton).not.toBeInTheDocument();
  });

  test("calls handleClearInput on clear button click", () => {
    const handleClearInput = jest.fn();
    const inputValue = "Test Book";
    renderComponent({ inputValue, handleClearInput });
    const clearButton = screen.getByRole("button");

    fireEvent.click(clearButton);
    expect(handleClearInput).toHaveBeenCalledTimes(1);
  });
});
