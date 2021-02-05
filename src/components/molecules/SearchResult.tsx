import React from 'react';
import 'styles/Hovers.css';
import { Link } from 'react-router-dom';
import BookCover from '../atoms/Imgs/BookCover';
import {BookTitle} from 'components/atoms/Texts/Titles';
import BookMakers from 'components/atoms/Texts/BookMakers';

const SearchResults = ({data}:any) => {
    console.log(data);
    data = JSON.parse(JSON.stringify(data));
    
    var publishedDate:string = data.published_date;
    
    if (publishedDate && data.published_date[6] === '0'){
        publishedDate = publishedDate.split(" ")[0]
    }

    if(data.isbn === "" || data.description === ""){
        return <></>;
    }
    return (
        <Link to={{ pathname:`/book/register/item?id=${data.id}`, state:{
            item: data
        }}} id="search-res-box" style={{
             cursor:'pointer', display:'flex', justifyContent: 'flex-start', alignItems:'center', height: '85px', borderBottom: '2px solid #B3B3B3', padding: '0 15px', textDecoration:'none'
        }}>
            <BookCover src={data.thumbnail_image} width='40px' height='55px' margin='15px 15px 15px 0' />
            <div>
                <BookTitle title={data.title} fontSize='12px' />
                <BookMakers makers={`${data.authors}(지은이) | ${data.translators ? `${data.translators}(옮긴이) |` : ''} ${data.publisher} | ${publishedDate} `} fontSize="0.6em" />
            </div>
        </Link>
    )
};

export default SearchResults;