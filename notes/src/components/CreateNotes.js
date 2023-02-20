import LinearProgress from '@mui/material/LinearProgress';

export default function CreateNotes({inputValue, setInputValue, changeNotes}){
    const total = 100;
    const left= total-inputValue.length;

    return (
        <div className="note">
            <textarea
                cols="10" 
                rows="5"
                placeholder="type..." 
                maxLength='100'
                onChange={setInputValue}
            >
            </textarea>
            <div className="note__footer">
                <span className="label">{left} left</span>
                <button className="note__save" onClick={changeNotes}>save</button>
            </div>
            <LinearProgress className='char__progress' variant="determinate" value={left}></LinearProgress>
        </div>
    )

}