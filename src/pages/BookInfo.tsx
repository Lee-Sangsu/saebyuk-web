import { useLocation } from "react-router-dom";
import { ColumnFlex } from "styles/FlexStyles";
import { BookMainInfoOrg, BookSpecificInfos, PulMuLink } from "components/organisms/BookInfoOrgs";
import { GrayHRLine } from "components/atoms/Lines";

export const BookInfo = () => {
    const locationState = useLocation().state;
    const item = JSON.parse(JSON.stringify(locationState)).item;

    return (
        <div style={{
            ...ColumnFlex,
            width:'100%',
            alignItems:'center'
        }}>
            <BookMainInfoOrg item={item} />
            <GrayHRLine />
            <PulMuLink item={item} />
            <GrayHRLine />
            <BookSpecificInfos item={item} />
            <GrayHRLine />
        </div>
    );
};