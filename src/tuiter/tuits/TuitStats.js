import React from "react";
import posts from "tuits.json"
const TuitStats = (
    {
        post = posts,
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-3">
                    <div>{post.replies}</div>

                </div>
                <div className="col-3">

                </div>
                <div className="col-3">
                    <div>{post.userName} . {post.time}</div>

                </div>
                <div className="col-3">
                    <div>{post.userName} . {post.time}</div>

                </div>
            </div>
        </li>
    );
};
export default TuitStats;