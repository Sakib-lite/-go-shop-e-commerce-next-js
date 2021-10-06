import React, { createContext, useState } from "react";

const StateContext = createContext({
  showCatagories: false,
  showDropdown: false,
  toggleCatagoriesHandler: () => {},
  toggleDropdownHandler: () => {},
});

export function Context(props) {
  const [showCatagories, setShowCatagories] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleCatagoriesHandler = () => {
    setShowCatagories(!showCatagories);
  };

  const toggleDropdownHandler = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <StateContext.Provider
      value={{
        showCatagories: !showCatagories,
        toggleCatagoriesHandler: toggleCatagoriesHandler,
        toggleDropdownHandler: toggleDropdownHandler,
        showDropdown: showDropdown,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}

export default StateContext;
