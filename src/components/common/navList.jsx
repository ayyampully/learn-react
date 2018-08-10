import React from "react";
import { propTypes } from "prop-types";

const NavList = ({ items, labelKey, valueKey, onClick, selectedGenre }) => {
    return (
        <ul className="list-group">
            {items.map(item => (
                <li
                    key={item[valueKey]}
                    className={getActiveClass(
                        selectedGenre.name,
                        item[labelKey]
                    )}
                    onClick={() => {
                        onClick(item);
                    }}
                >
                    {item[labelKey]}
                </li>
            ))}
        </ul>
    );
};
function getActiveClass(selectedGenre, genre) {
    return selectedGenre === genre
        ? "list-group-item active"
        : "list-group-item";
}
NavList.defaultProps = {
    items: [],
    labelKey: "name",
    valueKey: "_id"
};
export default NavList;
