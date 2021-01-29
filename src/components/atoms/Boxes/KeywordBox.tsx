import React from 'react';
import "styles/Hovers.css";

export const KeywordBox = ({id, keyword, onClick}:any) => {

    var clicked:boolean = false;

    const btnClicked = (event:any) => {
        onClick(event);
        if (clicked) {
            document.getElementById(id)!.style.backgroundColor = 'white';
            document.getElementById(id)!.style.color = 'black';
        } else {
            document.getElementById(id)!.style.backgroundColor = 'black';
            document.getElementById(id)!.style.color = 'white';
        }
        clicked = !clicked;
    };

    return (
        <button className="keyword-box" id={id} value={keyword} onClick={btnClicked} style={{
            border:'1px solid black',
            borderRadius: '10px',
            padding:'0 20px',
            height:'35px',
            margin: '0 15px'
        }}>
            {keyword}
        </button>
    )
};