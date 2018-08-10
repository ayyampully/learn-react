import React from "react";
import _ from "lodash";
const Pagination = ({
    itemsCount,
    itemsPerPage,
    onPageChange,
    currentPage
}) => {
    const pageCount = Math.ceil(itemsCount / itemsPerPage);
    if (pageCount === 1) return null;
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        let className = "page-item";
        if (i === currentPage) className += " active";

        pages.push(
            <li
                key={i}
                className={className}
                onClick={() => {
                    onPageChange(i);
                }}
            >
                <a className="page-link">{i}</a>
            </li>
        );
    }
    return (
        <nav aria-label="...">
            <ul className="pagination">{pages}</ul>
        </nav>
    );
};

export default Pagination;
