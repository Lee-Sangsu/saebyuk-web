import React from 'react';
import axios from 'axios';
import { ArchiveBookImgText } from 'components/molecules/BookImgText';
import { ColumnFlex, RowFlex } from 'styles/FlexStyles';
import 'styles/Hovers.css';
import { SubTitle } from 'components/atoms/Texts/Titles';
import Slider from 'react-slick';
import { GenreBox } from 'components/atoms/Boxes/KeywordBox';
// import 'styles/ReactSlick.css';

const GetBooksInMain = () => {
    const [books, setBooks] = React.useState([]);
    const [dataLoaded, setDataLoaded] = React.useState(false);
    const [filter, setFilter] = React.useState("전체");
    const genres = ["전체", "환경", "디자인", "마케팅", "페미니즘"];

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    const getBooks = React.useCallback(() => {
        // newBook
        axios.get(`${process.env.REACT_APP_BASE_URL}/book/main/`)
        .then((res) => {
            var emptyArray = [];
            res.data.forEach( (item) => {
                emptyArray.push(item);
            })
            console.log(emptyArray)
            setBooks(emptyArray);
            setDataLoaded(true);
        })
        .catch((err) => console.log(err))
    }, []);

    React.useEffect(() => {
        setDataLoaded(false);
        if (filter === "전체") {
            getBooks();
        } else{
            axios.get(`${process.env.REACT_APP_BASE_URL}/book/filter/${filter}/`)
            .then((res) => {
                var emptyArray = [];
                res.data.forEach( (item) => {
                    emptyArray.push(item);
                })
                console.log(emptyArray);
                setBooks(emptyArray);
                setDataLoaded(true);
            })
            .catch((err) => console.log(err))
        }
    }, [filter, getBooks])

    return (
        <div style={{
            ...ColumnFlex,
            maxWidth: '100%'
        }}>
            <div style={{
                ...RowFlex,
                margin: "25px 0 10px 10%"
            }}>
                {genres.map((value, index) =>
                    <GenreBox key={index} filter={filter} setFilter={setFilter} id={`keyword-box${index}`} keyword={value} />
                )}
            </div>
            <SubTitle fontSize="20px" fontWeight="bolder" margin="0 70% 0 10%" text="취향별 추천 도서" />
            <div style = {{width: '90%', marginLeft: '10%'}}>
            {dataLoaded ?
                <Slider {...settings}>
                    {books.map((item, index) =>
                        <ArchiveBookImgText key={index} onClick="watchBook" item={item} />
                    )}
                </Slider>
            : <span>책 정보 불러오는 중 ...</span>}
            </div>
        </div>
    )
};
//d
export default GetBooksInMain;
