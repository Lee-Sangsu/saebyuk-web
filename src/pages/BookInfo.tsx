import { useLocation } from "react-router-dom";

export const BookInfo = () => {
    const locationState = useLocation().state;
    const item = JSON.parse(JSON.stringify(locationState)).item;

    console.log(item);

    return (
        <span>bookInfo</span>
    );
};