import React from "react";

const Like = ({ liked, onClick }) => {
    let cssClass = "fa fa-heart";
    cssClass += liked ? "" : "-o";
    return (
        <i
            style={{ cursor: "pointer" }}
            onClick={onClick}
            className={cssClass}
        />
    );
};

export default Like;
