import React from "react";
import { Link } from "react-router-dom";
const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter/" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'home'?'active':''}`}>
                <i class="bi bi-house-fill"></i>
                Home
            </Link>
            <Link to="/tuiter/" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'home'?'active':''}`}>
                <i class="bi bi-house-fill"></i>
            </Link>

            <Link to="/tuiter/Explore" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'explore'?'active':''}`}>

                Explore
            </Link>
            <Link to="/tuiter/Explore" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'explore'?'active':''}`}>

            </Link>

            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </a>
        </div>

    );
};
export default NavigationSidebar;