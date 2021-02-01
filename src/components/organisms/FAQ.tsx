import React from 'react';
import SubTitle from 'components/atoms/Texts/SubTitle';
import TextInput from 'components/atoms/Inputs/TextInput';
import RequestBookBtn from 'components/atoms/Btns/RequestBookBtn';
import axios from 'axios';
import Cookies from 'js-cookie';

const FAQ = () => {
    const userNickName = window.localStorage.getItem('user');

    const [faqTitle, setFAQTitle] = React.useState<string>('');
    const [faqContent, setFAQContent] = React.useState<string>('');

    /*
    const faq = () => {
        const csrftoken = Cookies.get('csrftoken');
        if(userNickName){
            // if (bookTitle && bookAuthor) {
                axios.post(`${process.env.REACT_APP_BASE_URL}/book/request/`, {
                    headers: {
                        "Access-Control-Allow-Origin": '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrftoken
                    },
                    data: {
                        g_school_nickname: userNickName,
                        // book_title: bookTitle,
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
        } 
        // else {
        //     window.alert("사용자 정보를 찾을 수 없습니다.");
        // }
    };
    */

    React.useEffect(() => {
        if (faqTitle && faqContent) {
            document.getElementById("faq-btn")!.style.backgroundColor = 'black';
            document.getElementById("faq-btn")!.style.color = 'white';
        } else {
            document.getElementById("faq-btn")!.style.backgroundColor = '#DFDFDF';
            document.getElementById("faq-btn")!.style.color = '#C2C3CB';
        }
    }, [faqTitle, faqContent])

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
                <h1>문의하기</h1>
                <h3>{`${window.localStorage.getItem('user')}님, 무엇을 도와드릴까요? ☺️`}</h3>
            </div>

            <SubTitle margin='10px 0' text="문의 주제*" />
            <TextInput value={faqTitle} placeholder='도서명 입력' onChange={(e:any) => setFAQTitle(e.target.value)} />

            {/* textarea로 바꿔야함. */}
            <SubTitle margin='20px 0px 5px 0px' text="문의 내용*" />
            <TextInput value={faqContent} placeholder='저자 입력' onChange={(e:any) => setFAQContent(e.target.value)} />

            <RequestBookBtn id="faq-btn" text="문의" onClick={console.log('faq')} margin="20px 0 0 0" />

        </div>
    )
};

export default FAQ;