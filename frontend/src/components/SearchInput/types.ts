import { ChangeEvent } from "react";

export interface SearchInputProps {
    inputValue: string;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleClearInput: () => void;
  }