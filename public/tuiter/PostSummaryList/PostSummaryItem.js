


const PostSummaryItem = (post) => {
    return(`
        <div class="list-group">
            <div class="list-group-item">
                <div class="row ms-2">
                    <div class="col-9">
                        <div class="wd-fg-color-gray wd-small-font"> ${post.topic}</div>
                        <div class="wd-large-font text-white">${post.userName}
                            <i class="fa fa-check-circle"></i>
                            ${post.time}
                        </div>
                        <div>${post.title}</div>
                    </div>
                    <div class="col-3 mb-1">
                        <img class="wd-img-size-100x100 wd-rounded-corners"src=${post.image}/>
                    </div>
                </div>
            </div>
            
        </div>
    `);
}
export default PostSummaryItem;