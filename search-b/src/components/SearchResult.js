import React from "react";
import "./SearchResult.css";

export const SearchResult = ({name}) => {
    return (
        <div className="result" onClick={(e) => {alert('click')}} >
            {name}
        </div>
    )
}