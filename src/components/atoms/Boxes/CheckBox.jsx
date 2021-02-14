import 'styles/CheckBox.css';

export const CircleCheckBox = ({onCheck, index, value}) => {
    return (
        <section style={{
            position:'absolute',
            marginLeft: '70px',
            marginTop: "102px"
        }}>
            <div id={`${index}circle`} className="checkboxFour">
                <input type="checkbox" name={`${index}`} id="circle-checkbox" onClick={onCheck} value={value} />
                <label htmlFor="checkboxFourInput" className="check-mark">L</label>
            </div>    
        </section>
    )
};
