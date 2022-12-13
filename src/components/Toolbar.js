import React from "react";

function ToolBar({ filters, selected, onSelectFilter }){
    return (
        <div className="Toolbar">
            {filters.map((filter) => {
                return (
                <div key={filter}
                className={filter === selected ? "Toolbar-button-selected Toolbar-button" : "Toolbar-button"}
                onClick={() => onSelectFilter(filter)}
                >{filter}</div>
                )
            })}
        </div>
    );
}




export default ToolBar;