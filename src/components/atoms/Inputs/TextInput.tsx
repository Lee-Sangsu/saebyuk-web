const TextInput = ({value, onChange, placeholder, onClick}:any) => {

    return (
        <input type="text" value={value} onClick={onClick} placeholder={`${placeholder}`} onChange={onChange} style={{
            display:'flex',
            width:'290px',
            height:'35px',
            border:'2px solid #B3B3B3', 
            borderRadius: '10px',
            paddingLeft:'10px'
        }} /> 
    )
};

export default TextInput;