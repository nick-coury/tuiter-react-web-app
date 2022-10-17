

const WhoToFollowListItem = (who) => {

    return(`
    <div class="list-group"> 
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="wd-rounded-corners wd-img-size-50x50" src=${who.avatarIcon}/>
                </div>
                <div class="col-6">
                    <div class="wd-small-font text-white row">
                        <div>
                            ${who.userName}
                            <i class="fa fa-check-circle"></i>
                        </div>
                        <div>
                            ${who.handle}
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-primary wd-rounded-corners"> Follow</button>
                </div>
            </div>
        </li>
    </div>

 `);
}
export default WhoToFollowListItem;