import AlertTitle from 'components/atoms/Texts/AlertTitle';
import {KeywordBox} from 'components/atoms/Boxes/KeywordBox';
import React from 'react';
import { useLocation } from 'react-router-dom';
import BookImgText from 'components/molecules/BookImgText';
import RegisterNavigator from 'components/organisms/RegisterNavigator';
import EmptyState from 'states/EmptyState';
import { useSetRecoilState } from 'recoil';

const SelectGenreOfNewBook = () => {
    const genres = ["환경", "디자인", "마케팅", "페미니즘", "기타"];
    var genreChecked = [false, false, false, false, false];
    const locationState = useLocation().state;
    const item = JSON.parse(JSON.stringify(locationState)).item; // parse 안해주면 locationState.item을 unknown타입으로 인식하는 에러(= "Object is of type 'unknown" 에러) 발생.
    const setEmpty = useSetRecoilState(EmptyState);

    React.useEffect(() => {
        setEmpty(true);
    }, []);
    

    const onKeywordClick = (event:any) => {
        const genre:string = event.target.value;
        if (genre === "환경") {
            genreChecked[0] = !genreChecked[0];
        } else if (genre === "디자인") {
            genreChecked[1] = !genreChecked[1];
        } else if (genre === "마케팅") {
            genreChecked[2] = !genreChecked[2];
        } else if (genre === "페미니즘") {
            genreChecked[3] = !genreChecked[3];
        } else if (genre === "기타") {
            genreChecked[4] = !genreChecked[4];
        } 

        // empty => indexOf() will return -1
        if(genreChecked.indexOf(true) === -1) {
            setEmpty(true);
        } else {
            setEmpty(false);
        }
    };

    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center',
            width:'100%', height: window.innerHeight
        }}>
            <AlertTitle text="등록할 도서의 추천 분야를 선택해주세요 ☺️" />
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent: 'space-around',
                alignItems:'center',
                width:'650px', margin: `${window.innerHeight*0.1}px 0`
            }}>
                <BookImgText item={item} />
                <div style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'space-around',
                    height:'170px',
                    width:'230px',
                    flexWrap:'wrap'
                }}>
                    {genres.map((value, index) => 
                        <KeywordBox id={`keyword-box${index}`} key={index} keyword={value} onClick={onKeywordClick}  />
                    )}
                </div>
            </div>
            <RegisterNavigator toPrev="/book/register/new" isRegister={false} item={item} genreChecked={genreChecked} toNext={{ pathname:`/book/register/keyword/`, state:{
                item: {
                    ...item,
                    genre: genreChecked
                }
            }}} />
        </div>
    )
};

export default SelectGenreOfNewBook;