import React from 'react'
import axios from 'axios';



export default function Notelist(props) {
    const { data } = props;

    const deleteData = e => {
        console.log(e.target.id);
        axios.delete(`${process.env.REACT_APP_NOTESURL}/${Number(e.target.id)}`, {})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div className='notelist'>
            {data.map(item => {
                console.log(item);
                return (
                    <div className='note' key={item.id}>
                        <div>{item.content}</div>
                        <button id={item.id} onClick={deleteData}><img id={item.id} src='https://www.flaticon.com/svg/static/icons/svg/753/753345.svg' alt='delete'></img></button>
                    </div>
                )
            })}
        </div>
    )
}
