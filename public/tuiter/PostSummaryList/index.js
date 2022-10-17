import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const RenderPostsList = () => {
    return(`
        
        <ul class="list-group">
            <li class="list-group-item">Who To Follow</li>
            
            ${PostSummaryItem(posts.pop())}
            ${PostSummaryItem(posts.pop())}
            ${PostSummaryItem(posts.pop())}
            ${PostSummaryItem(posts.pop())}
                
    
        </ul>



 `);
}
export default RenderPostsList;