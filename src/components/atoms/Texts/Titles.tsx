export const SubTitle = ({fontWeight, fontSize, margin, text}:any) => {
    return (
        <span style={{
            fontWeight: fontWeight,
            fontSize: fontSize,
            textAlign:'start',
            width: '300px',
            margin: margin
        }}>
            {text}
        </span>
    )
};

export const AlertTitle = ({text}:any) => {
    return (
        <span style={{
            fontSize:'20px',
            textAlign:'center'
        }}>{`${text}`}</span>
    )
};

export const BookTitle = ({title, fontSize, minWidth, width}:any) => {
    return (
        <span style={{
            fontWeight: 'bold',
            fontSize:fontSize,
            color:'black',
            margin:'0',
            display:'flex',
            width:width,
            minWidth: minWidth,
            flexWrap:'wrap'
        }}>{title}</span>
    );
};

export const ColoredBookTitle = ({color, title}:any) => {
    return (
        <span style={{
            fontSize: "18px",
            color: color,
            maxWidth: '90%'
        }}>{title}</span>
    )
}