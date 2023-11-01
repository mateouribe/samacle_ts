import { NavigateFunction } from "react-router-dom";

export const navigateToPage = (navigate: NavigateFunction, page: string) => {
  navigate(page);
};
