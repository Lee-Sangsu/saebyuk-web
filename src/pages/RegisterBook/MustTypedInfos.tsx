
import {TextInput} from 'components/atoms/TextInputs';
import {AlertTitle} from 'components/atoms/Texts/Titles';
import {RegisterBookImgText} from 'components/molecules/BookImgText';
import RegisterNavigator from 'components/organisms/RegisterNavigator';
import React from 'react';
import { useLocation } from 'react-router-dom';

export const MustTypedInfos = () => {
    const locationState = useLocation().state;
    const item = JSON.parse(JSON.stringify(locationState)).item;

    const [page, setPage]= React.useState("");
    const [subtitle, setSubtitle] = React.useState("");
    const [purchaseLink, setPurchaseLink] = React.useState("");

    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center',
            width:'100%', height: window.innerHeight
        }}>
            <AlertTitle text="기타 정보들을 입력해주세요 ☺️" />
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent: 'space-around',
                alignItems:'center',
                width:'650px', margin: `${window.innerHeight*0.1}px 0`
            }}>
                <RegisterBookImgText item={item} />
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-around',
                    alignItems:'center',
                    width:'350px',
                    height:'200px'
                }}>
                    <div>
                        <TextInput value={page} onChange={(e:any) => {
                            setPage(e.target.value);
                        }} placeholder="쪽수를(숫자만) 입력해주세요 ex) 111" />
                        <a target="_blank" rel="noreferrer" href={`https://book.naver.com/search/search.nhn?sm=sta_hty.book&sug=&where=nexearch&query=${item.title}`}>이 책의 쪽수 알아보기</a>
                    </div>

                    <TextInput value={subtitle} onChange={(e:any) => {
                        setSubtitle(e.target.value);
                    }} placeholder="이 책의 부제를 입력해주세요" />
                    
                    <div>
                        <TextInput value={purchaseLink} onChange={(e:any) => {
                            setPurchaseLink(e.target.value);
                        }} placeholder="풀무질 구매 링크를 입력해주세요" />
                        <a rel="noreferrer" target="_blank" href={`https://poolmoojil.com/product/search.html?banner_action=&keyword=${item.title}`}>풀무질에서 이 책 보기</a>
                    </div>

                </div>
            </div>

            <RegisterNavigator toPrev={{ 
                pathname: `/book/register/keyword/`, 
                state : {
                    item:{
                        ...item
                    }
                }
            }} isRegister={true} item={{
                ...item,
                page: page,
                subtitle: subtitle,
                purchase_link: purchaseLink
            }} />
        </div>
    )
};

// export default MustTypedInfos;