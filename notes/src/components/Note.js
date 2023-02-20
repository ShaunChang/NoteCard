import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'

export default function Note ({noteValue,id,deleteNotes}){
    return(
        <div className="note">
            <div className="note__body">{noteValue}</div>
            <div className="note__footer">
               <DeleteForeverOutlinedIcon onClick={()=>{deleteNotes(id)}}></DeleteForeverOutlinedIcon>
            </div>
        </div>
    )
}