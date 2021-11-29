import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/avatar.jpg';
import {NavLink} from "react-router-dom";

let UsersOld = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img
                            src={u.photos.small != null ? u.photos.small : userPhoto}
                            className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followUnfollowInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id);
                            /*props.toggleFollowUnfollowInProgress(true, u.id);
                            usersAPI.unfollow(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                                props.toggleFollowUnfollowInProgress(false, u.id);
                            })*/
                        }}>Unfollow</button>
                        : <button disabled={props.followUnfollowInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id);
                            /*props.toggleFollowUnfollowInProgress(true, u.id);
                            usersAPI.follow(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                                props.toggleFollowUnfollowInProgress(false, u.id);
                            })*/
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}


export default UsersOld;