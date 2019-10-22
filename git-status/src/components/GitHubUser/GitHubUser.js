import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUserAccount, getUserEvents, getUserFollowers, getUserStarredRepos, getUserSubscriptions, getUserFollows } from "../../Utils/AxiosCall.js";
import { withRouter } from "react-router-dom";
import { Descriptions } from 'antd';

// avatar_url: "https://avatars3.githubusercontent.com/u/17069338?v=4"
// bio: "Just a person."
// blog: ""
// company: null
// created_at: "2016-02-04T16:47:20Z"
// email: "trtld2@gmail.com"
// events_url: "https://api.github.com/users/Turtled/events{/privacy}"
// followers: 0
// followers_url: "https://api.github.com/users/Turtled/followers"
// following: 0
// following_url: "https://api.github.com/users/Turtled/following{/other_user}"
// gists_url: "https://api.github.com/users/Turtled/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/Turtled"
// id: 17069338
// location: null
// login: "Turtled"
// name: "Daniel F"
// node_id: "MDQ6VXNlcjE3MDY5MzM4"
// organizations_url: "https://api.github.com/users/Turtled/orgs"
// public_gists: 0
// public_repos: 47
// received_events_url: "https://api.github.com/users/Turtled/received_events"
// repos_url: "https://api.github.com/users/Turtled/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/Turtled/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/Turtled/subscriptions"
// type: "User"
// updated_at: "2019-10-17T23:03:50Z"
// url: "https://api.github.com/users/Turtled"

//PROMISING API THINGS
// login: "Turtled" *********************
// avatar_url: "https://avatars3.githubusercontent.com/u/17069338?v=4"*****************************
// bio: "Just a person." *****************
// created_at: "2016-02-04T16:47:20Z" *********
// email: "trtld2@gmail.com" ****************
// html_url: "https://github.com/Turtled" ******************
// name: "Daniel F" *****************
// followers: 0 ********************
// followers_url: getUserFollowers()
// following: 0 *********************
// following_url: getUserFollows()
// public_repos: 47 *************************
// starred_url: getUserStarredRepos()
// subscriptions_url: getUserSubscriptions()

function GitHubUser(props) {

    const [userAccount, setUserAccount] = useState();
    const [userEvents, setUserEvents] = useState();

    useEffect(() => {
        getUserAccount(props.match.params.username, setUserAccount)
        getUserEvents(props.match.params.username, setUserEvents)
    }, [])

    console.log("User Data", userAccount, userEvents);

    if (!userAccount || !userEvents) return (<p>Loading...</p>);

    return (
        <div className="gitHubUser">
            <Descriptions title={userAccount.login}>
                <img src={userAccount.avatar_url} />
                {/* <a href={userAccount.html_url}><h1>{userAccount.login}</h1></a> */}
                <Descriptions.Item label="Name">{userAccount.name}</Descriptions.Item>
                {/* <hr /> */}
                <Descriptions.Item label="Bio">{userAccount.bio}</Descriptions.Item>
                <Descriptions.Item label="Email">{userAccount.email}</Descriptions.Item>
                <Descriptions.Item label="Created At"> {userAccount.created_at.substring(0, 10)}</Descriptions.Item>
                <Descriptions.Item label="Public Repositories">{userAccount.public_repos}</Descriptions.Item>
                <Descriptions.Item label="Followers">{userAccount.followers}</Descriptions.Item>
                <Descriptions.Item label="Following">{userAccount.following}</Descriptions.Item>
            </Descriptions>
        </div>
    );
};

export default withRouter(GitHubUser);
