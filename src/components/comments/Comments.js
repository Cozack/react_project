import {useEffect, useState} from 'react';
import Comment from '../comment/Comment';
import "./Comments.css";
import axiosInstance from '../../services/api';

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState(null);

    useEffect(() => {
        axiosInstance.get("/comments").then(value => setComments([...value.data]));
    }, [])

    let commentsDetails = (id) => {
        let newComments = comments.find(value => value.id === id);
        setComment(newComments)
    }


    return (
        <div className={"wraps"}>
            <div className={"leftSide"}>
                {
                    comments.map((value) => <Comment key={value.id} item={value} commentsDetails={commentsDetails}/>)

                }
            </div>
            <div className={"rightSide"}>
                {
                    comment ? <h5>{comment.id} - {comment.body}</h5> : <div>Here Should be Comments describes</div>
                }
            </div>
        </div>
    );
}