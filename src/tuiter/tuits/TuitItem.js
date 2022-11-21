import React from "react";
import {useDispatch} from "react-redux";
import TuitStats
    from "./TuitStats"
import posts from "./tuits.json"
import {deleteTuitThunk} from "../../services/tuits-thunks";



const TuitItem = (
    {
        post = posts
    }

) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }


    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">

                    <div>{post.userName} . {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                    <div><TuitStats/></div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                </div>
                <div><i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(post._id)}></i></div>

            </div>
        </li>
    );
};
export default TuitItem;