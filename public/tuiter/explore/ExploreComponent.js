
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <div class="row">
                    <div class="col-10">
                        <div class="input-group mb-3">
                        <span class="input-group-text wd-rounded-corners">
                            <i class="fa fa-search"></i>
                        </span>
                            <input type="text" class="wd-rounded-corners form-control" placeholder="Search Tuiter">
                        </div>
                    </div>
                    <div class="col-2">
                        <i class="fa fa-cog fa-2x mt-1 wd-fg-color-blue"></i>
                    </div>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
           </ul>
           <div class="card">
                <img class="card-img-top col-12" src="starship.jpeg"/>
                <div class="text-stroke text-white card-img-overlay d-flex align-items-end">
                    <h4 class="card-title">
                        SpaceX's Starship
                    </h4>
                </div>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
