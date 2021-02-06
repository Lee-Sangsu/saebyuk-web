import BookCover from "components/atoms/Imgs/BookCover";
import { ColumnFlex, RowFlex } from "styles/FlexStyles";
import BookMakers from 'components/atoms/Texts/BookMakers';
import {BookTitle, SubTitle} from 'components/atoms/Texts/Titles';
import { ColorfulKerwordBox } from "components/atoms/Boxes/KeywordBox";
import { getRandomLightColor } from "styles/GetRandomColor";
import { BorrowBookBtn } from "components/atoms/Btns";
import { grayText } from "styles/TextStyles";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";

export const BookMainInfoOrg = ({item}:any) => {
    // console.log(item);
    const history = useHistory();
    const bookInfo = item.book_info;
    const borrowThisBook = () => {
        const csrftoken = Cookies.get('csrftoken');
        axios.post(`${process.env.REACT_APP_BASE_URL}/book/borrow/${item.isbn}/`, {
            headers:{
                "Access-Control-Allow-Origin": '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            data: {
                g_school_nickname: window.localStorage.getItem("user"),
                isbn: item.isbn
            }
        })
        .then((res) => {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 7)
            window.alert(`대출 기한은 일주일입니다. ${currentDate.getMonth()+1}월 ${currentDate.getDate()}일 까지 
도서관 새벽으로
반납해주시기 바랍니다.`)
            history.push('/');
        })
        .catch((err) => console.log(err))
    };

    return (
        <div style={{
            ...RowFlex,
            width:'68%',
            padding: '35px 0'
        }}>
            <BookCover margin="0 4% 0 0" src={bookInfo.thumbnail_image} width="184px" height="275px" />
            <div style={{
                ...ColumnFlex,
                width:'100%',
                justifyContent: 'space-between',
                height: '270px'
            }}>
                <div style={{
                    ...ColumnFlex,
                    width:'100%',
                    height:'170px',
                    justifyContent: 'space-around',
                    paddingLeft: '10px'
                }}>
                    <BookTitle title={`${bookInfo.title}`} fontSize="30px" width="60%" />
                    <BookMakers fontWeight="500" makers={`저자 | ${bookInfo.author}`} fontSize="14px" />
                    <BookMakers fontWeight="500" makers={`출판사 | ${bookInfo.publisher}`} fontSize="14px" />
                    <BookMakers fontWeight="500" makers={`출간일 | ${bookInfo.published_date}`} fontSize="14px" />
                    <BookMakers fontWeight="500" makers={`페이지 | ${bookInfo.page}쪽`} fontSize="14px" />
                </div>
                <div style={{
                    ...RowFlex,
                    justifyContent:'space-between',
                    width: '101%',
                    alignItems:'flex-end'
                }}>
                    <div style={{
                        ...ColumnFlex,
                        // width:'100%'
                    }}>
                        <SubTitle margin='0 5px 10px 5px' fontSize="17px" text="키워드 Pick:" />
                        <div style={RowFlex}>
                            {bookInfo.keyword.map((keyword:any, index:number) => 
                                <ColorfulKerwordBox key={index} fontSize="14px" margin='0 10px 0 5px' keyword={keyword} color={getRandomLightColor()} />
                            )}
                        </div>
                    </div>
                    <BorrowBookBtn borrowAvailable={item.borrow_available} onClick={borrowThisBook} />
                </div>
            </div>

        </div>
    );
};

export const PulMuLink = ({item}:any) => {
    return (
        <div style={{
            ...RowFlex,
            width:'68%',
            minWidth:'700px',
            padding: '40px 0',
            justifyContent: 'space-between'
        }}>
            <a href="https://poolmoojil.com/">
                풀무질 로고
            </a>
            <a style={grayText} href={item.purchase_link ? item.purchase_link : ""}>
                {`책 구매하기 >`}
            </a>
        </div>
    );
};

export const BookSpecificInfos = ({item}:any) => {
    const bookInfo = item.book_info;
    console.log(item)
    return (
        <div style={{
            ...ColumnFlex,
            minWidth:'700px',
            width:'68%',
            padding: '40px 0',
            justifyContent: 'space-between'
        }}>
            <SubTitle margin='0 0 15px 0' fontSize="28px" text="부제" />
            <span style={{
                ...grayText,
                lineHeight: '20px',
                textIndent: '5px'
            }}>{bookInfo.subtitle}</span>
            <SubTitle margin='65px 0 15px 0' fontSize="28px" text="책 소개" />
            <span style={{
                ...grayText,
                lineHeight: '26px',
                textIndent: '5px',
                wordBreak: 'keep-all',
            }}>{bookInfo.description}</span>


        </div>
    )
}