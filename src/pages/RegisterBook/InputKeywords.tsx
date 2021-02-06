import {AlertTitle} from 'components/atoms/Texts/Titles';
import {RegisterBookImgText} from 'components/molecules/BookImgText';
import NewBookKeywords from 'components/organisms/NewBookKeywords';
import RegisterNavigator from 'components/organisms/RegisterNavigator';
import React from 'react';
import { useLocation } from 'react-router-dom';
import EmptyState from 'states/EmptyState';
import { useSetRecoilState } from 'recoil';



const InputKeywords = () => {
    const locationState = useLocation().state;
    const item = JSON.parse(JSON.stringify(locationState)).item;
    // add keywords 때 setKeywords 사용
    // eslint-disable-next-line
    const [keywords, setKeywords] = React.useState<Array<string>>(['유익한', '감동적인', '영감을 주는']);
    var keywordChecked = [false, false, false, false];
    const setEmpty = useSetRecoilState(EmptyState);

    React.useEffect(() => {
        setEmpty(true);
    }, [setEmpty]);

    console.log(item);
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center',
            width:'100%', height: window.innerHeight
        }}>
            <AlertTitle text="등록할 도서를 설명하는 키워드를 입력해주세요 ☺️" />
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent: 'space-around',
                alignItems:'center',
                width:'650px', margin: `${window.innerHeight*0.1}px 0`
            }}>
                <RegisterBookImgText item={item} />
                <NewBookKeywords setEmpty={setEmpty} keywords={keywords} keywordChecked={keywordChecked} />
            </div>
            <RegisterNavigator toPrev={{ 
                pathname: `/book/register/item?id=${item.id}`, 
                state : {
                    item:{
                        ...item
                    }
                }
            }} toNext={{ pathname:`/book/register/etc-infos/`, state:{
                item: {
                    ...item,
                    keyword: keywordChecked
                }
            }}} isRegister={false} item={item} />
        </div>
    )
};

export default InputKeywords;