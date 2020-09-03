import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar
          alt={user?.display_name}
          src="https://scontent.fdac25-1.fna.fbcdn.net/v/t1.0-9/49822877_2073084529404802_1090937339749859328_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeHlFrEBOh_ho78Pez_h2w6Mvs0fojUMO2K-zR-iNQw7YryKk03A_CbPLyGiJah765RweIIXJde9JNNhuO1aruVE&_nc_ohc=xd1-ovCEbJ4AX_TZLGM&_nc_ht=scontent.fdac25-1.fna&oh=61e7f247bb79177b1cb3e5108e370a16&oe=5F75A454"
        />

        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;

// <Avatar alt={user?.display_name} src={user?.images[0].url} />
