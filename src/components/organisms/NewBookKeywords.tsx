import { KeywordBox } from 'components/atoms/Boxes/KeywordBox';
import React from 'react';

const NewBookKeywords = ({setEmpty, keywords, keywordChecked}:any) => {

    const onKeywordsClick = (event: any) => {
        const keyword:string = event.target.value;
        if (keyword === "유익한") {
            keywordChecked[0] = !keywordChecked[0];
        } else if (keyword === "감동적인") {
            keywordChecked[1] = !keywordChecked[1];
        } else if (keyword === "영감을 주는") {
            keywordChecked[2] = !keywordChecked[2];
        } else {
            keywordChecked[3] = !keywordChecked[3];
        } 
        if(keywordChecked.indexOf(true) === -1) {
            setEmpty(true);
        } else {
            setEmpty(false);
        }
    };

    return (
        <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'space-around',
            height:'170px',
            width:'230px',
            flexWrap:'wrap'
        }}>
            {keywords.map((value:any, index:any) => 
                <KeywordBox id={`keyword-box${index}`} keyword={value} onClick={onKeywordsClick} />
            )}
        </div>
    )
};

export default NewBookKeywords;
