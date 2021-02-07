import { RowFlex } from "styles/FlexStyles";
import 'styles/SearchIcon.css';

export const SearchIcon = () => {
    return (
        <div className="search-icon-div" style={{
            ...RowFlex,
            width: '22px',
            height: '22px'
        }}>
            <i className="circle" />
            <i className="bar" />
        </div>
    );
}