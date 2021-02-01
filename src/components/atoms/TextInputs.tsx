import React from 'react';

export const TextInput = ({value, onChange, placeholder, onClick}:any) => {

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

export const TextArea = ({value, onChange, placeholder}:any) => {
    return (
        <textarea value={value} onChange={onChange} placeholder={placeholder} style={{
            appearance:'textfield',
            resize:'none',
            display:'flex',
            width:'280px',
            height:'195px',
            border:'2px solid #B3B3B3', 
            borderRadius: '10px',
            // paddingLeft:'10px',
            padding:'10px 8px 4px 10px'
        }} />
    )
};