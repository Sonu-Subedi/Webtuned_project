import SearchBar from "./Searchbar";
import { logo } from "../helpers/common";

const MainHeader = () => {
  const categoryOptions = [
    { value: "", label: "All categories" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="header-wrapper">
      <span className="logo__img-wrapper">
        <img src={logo} alt="logo" />
      </span>
      <SearchBar options={categoryOptions} />
    </div>
  );
};

export default MainHeader;
