import {useEffect, useState} from 'react';
import Comment from '../../commentsMenu/comment/Comment';
import CommentsDetails from '../../commentsMenu/commentDetails/CommentDetails';
export default function Comments (props){

    let {match: {url}} = props;

    let [comments, setcomments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setcomments([...value]);
            });

    }, []);

    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} item={value} url={url}/>)
            }

        </div>
    );
}