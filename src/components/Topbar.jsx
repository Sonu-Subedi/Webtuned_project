import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-Container">
        <div className="top_bar_left">
          <span className="ttm-textcolor-highlight">
            Welcome to Gurkha Jewellery Sydney! Free Shipping over $200
          </span>
        </div>

        <div className="top_bar_right">
          <ul className="topbar-list">
            <li className="topbar-item">
              <FontAwesomeIcon icon={faArrowsRotate} className="icon" />
              <NavLink className="topbar-link" to="/compare">
                Compare(0)
              </NavLink>

              {/* <FontAwesomeIcon icon={faAngleDown} className="icon" /> */}
            </li>
            <li className="topbar-item">
              <FontAwesomeIcon icon={faHeart} className="icon" />
              <NavLink className="topbar-link" to="/wishlist">
                Wishlist(0)
              </NavLink>
              {/* <FontAwesomeIcon icon={faAngleDown} className="icon" /> */}
            </li>
            <li className="topbar-item">
              <NavLink className="topbar-link" to="/setting">
                Setting
              </NavLink>
              <FontAwesomeIcon icon={faAngleDown} className="icon" />
            </li>
            <li className="topbar-item">
              <NavLink className="topbar-link" to="/$usdollar">
                $US dollar
              </NavLink>
              <FontAwesomeIcon icon={faAngleDown} className="icon" />
            </li>
            <li className="topbar-item">
              <NavLink className="topbar-link" to="/english">
                English
              </NavLink>
              <FontAwesomeIcon icon={faAngleDown} className="icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
