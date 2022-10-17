import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const RenderWhoToFollowList = () => {
    return(`
        
        <ul class="list-group">
            <li class="list-group-item">Who To Follow</li>
            ${WhoToFollowListItem(who.pop())}
            ${WhoToFollowListItem(who.pop())}
            ${WhoToFollowListItem(who.pop())}
            ${WhoToFollowListItem(who.pop())}
            ${WhoToFollowListItem(who.pop())}
        </ul>



 `);
}
export default RenderWhoToFollowList;