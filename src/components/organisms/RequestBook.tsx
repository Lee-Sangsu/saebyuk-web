import React from 'react';
import SubTitle from 'components/atoms/Texts/SubTitle';
import TextInput from 'components/atoms/Inputs/TextInput';
import RequestBookBtn from 'components/atoms/Btns/RequestBookBtn';
import axios from 'axios';
import Cookies from 'js-cookie';

const RequestBook = () => {
    const userNickName = window.localStorage.getItem('user');

    const [bookTitle, setBookTitle] = React.useState<string>('');
    const [bookAuthor, setBookAuthor] = React.useState<string>('');
    const [interestedSection, setInterestedSection] = React.useState<string>('');
    const [etcInfo, setEtcInfo] = React.useState<string>('');

    const requestBook = () => {
        const csrftoken = Cookies.get('csrftoken');
        if(userNickName){
            if (bookTitle && bookAuthor) {
                axios.post(`${process.env.REACT_APP_BASE_URL}/book/request/`, {
                    headers: {
                        "Access-Control-Allow-Origin": '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrftoken
                    },
                    data: {
                        g_school_nickname: userNickName,
                        book_title: bookTitle,
                        author: bookAuthor,
                        interest_parts: interestedSection,
                        others: etcInfo
                    }
                }).then((res) => {
                    console.log("성공적으로 신청되었습니다.");
                }).catch((e) => console.error(e))
            } else {
                window.alert("도서명과 저자를 입력해주세요.");
            }
        } else {
            window.alert("사용자 정보를 찾을 수 없습니다.");
        }
    };

    React.useEffect(() => {
        if (bookTitle && bookAuthor) {
            document.getElementById("request-btn")!.style.backgroundColor = 'black';
            document.getElementById("request-btn")!.style.color = 'white';
        } else {
            document.getElementById("request-btn")!.style.backgroundColor = '#DFDFDF';
            document.getElementById("request-btn")!.style.color = '#C2C3CB';
        }
    }, [bookTitle, bookAuthor])

    return (
        <div style={{
            display:'flex',
            height: '80%',
            width: '50%',
            marginTop:'10%',
            flexDirection:'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1>신청하기</h1>
                <h3>{`읽고 싶은 책을 알려주세요! ☺️`}</h3>
            </div>

            <SubTitle margin='10px 0' text="도서명*" />
            <TextInput value={bookTitle} placeholder='도서명 입력' onChange={(e:any) => setBookTitle(e.target.value)} />

            <SubTitle margin='20px 0px 5px 0px' text="저자*" />
            <TextInput value={bookAuthor} placeholder='저자 입력' onChange={(e:any) => setBookAuthor(e.target.value)} />
            
            <SubTitle margin='20px 0px 5px 0px' text="관심 분야" />
            <TextInput value={interestedSection} placeholder='관심 분야 입력' onChange={(e:any) => setInterestedSection(e.target.value)} />

            <SubTitle margin='20px 0px 5px 0px' text="기타" />
            <TextInput value={etcInfo} placeholder='기타 정보 입력' onChange={(e:any) => setEtcInfo(e.target.value)} />

            <RequestBookBtn id="request-btn" text="신청" onClick={requestBook} margin="20px 0 0 0" />

        </div>
    )
};

export default RequestBook;