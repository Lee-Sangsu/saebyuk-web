import React from 'react';
import {SubTitle} from 'components/atoms/Texts/Titles';
import {TextInput, TextArea} from 'components/atoms/TextInputs';
import {RequestBookBtn} from 'components/atoms/Btns';
import axios from 'axios';
// import Cookies from 'js-cookie';

const FAQ = () => {
    const userNickName = window.sessionStorage.getItem('user');

    const [faqTitle, setFAQTitle] = React.useState<string>('');
    const [faqContent, setFAQContent] = React.useState<string>('');
    const [pending, setPending] = React.useState<boolean>(false);


    const faq = () => {
        // const csrftoken = Cookies.get('csrftoken');
        if(userNickName){
            if (faqTitle && faqContent) {
                setPending(true);
                axios.post(`${process.env.REACT_APP_BASE_URL}/book/faq/`, {
                    headers: {
                        "Access-Control-Allow-Origin": '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        // 'X-CSRFToken': csrftoken
                    },
                    data: {
                        title: `${faqTitle}`,
                        body: `${faqContent}`
                    }
                }).then((res) => {
                    // console.log(res);
                    setPending(false);
                    window.alert("문의 내역이 성공적으로 등록되었습니다.");
                }).catch((e) => console.error(e))
            } else {
                window.alert("도서명과 저자를 입력해주세요.");
            }
        } 
        else {
            window.alert("사용자 정보를 찾을 수 없습니다.");
        }
    };


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
                <h3>{`${window.sessionStorage.getItem('user')}님, 무엇을 도와드릴까요? ☺️`}</h3>
            </div>

            <SubTitle margin='10px 0' text="문의 주제*" />
            <TextInput value={faqTitle} placeholder='주제 입력' onChange={(e:any) => setFAQTitle(e.target.value)} />

            <SubTitle margin='20px 0px 5px 0px' text="문의 내용*" />
            {/* textarea로 바꿔야함. */}
            <TextArea value={faqContent} placeholder='문의 내용 입력' onChange={(e:any) => setFAQContent(e.target.value)} />

            {pending ? <h1>문의 내역을 저장하는 중입니다</h1>: <></>}

            <RequestBookBtn id="faq-btn" text="문의" onClick={faq} margin="20px 0 0 0" />

        </div>
    )
};

export default FAQ;