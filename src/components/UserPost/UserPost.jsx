import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import { FaRegComment, FaUserFriends } from "react-icons/fa"
import { HiDotsHorizontal } from "react-icons/hi"
import { LiaTimesSolid } from "react-icons/lia"
import { PiShareFatThin } from "react-icons/pi"

import "./UserPost.scss"
import SmallModal from "../smallModal/smallModal"
import { Link } from "react-router-dom"
import { useState } from "react"

const UserPost = ({postContent, postImages, postVideo, postDelete, postEdit }) => {

    const [smallPopup, setSmallPopup] = useState(false)
  return (
    <>
        <div className="user-post-area">
            <div className="post-items-lists">
                <div className="user-post-fild">
                <div className="user-post-area-header">
                    <div className="post-user-info">
                    <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                    <div className="post-user-content">
                        <h3><a href="">Mamun Mirdha</a></h3>
                        <span>18 hours ago· </span>
                        <a href=""><FaUserFriends /></a>
                    </div>
                    </div>
                    <div className="post-future-info">
                        <div className="post-edit-all-future">
                            <Link onClick={() => setSmallPopup(true)}><HiDotsHorizontal /></Link>
                            {
                                smallPopup &&
                                <SmallModal hide={setSmallPopup}>
                                    <div className="post-future-item">
                                        <ul>
                                            <li>
                                                <Link onClick={postEdit}>
                                                    <span className="edit"></span>
                                                    <span>Edit post</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={postDelete}>
                                                    <span className="trash"></span>
                                                    <span>Move to trash</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </SmallModal>
                            }
                            
                        </div>
                        <a onClick={postDelete}><LiaTimesSolid /></a>
                    </div>
                </div>
                <div className="post-wraper">
                    {
                        postContent &&
                        <p>{postContent}</p>
                    }
                    {
                        postImages && 
                        <div className="new-post-imagess">
                            <img src={postImages} alt="" />
                        </div>
                    }
                    {
                        postVideo && 
                        <div className="new-post-imagess">
                            <iframe
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen                            
                                src={`https://www.youtube.com/embed/${postVideo.split('=')[1]}`}
                            ></iframe>
                        </div>
                    }

                </div>
                <div className="post-full-reactions-area">
                    <div className="post-reactions">
                    <div className="post-like">
                        <a href="">
                        <span className="likes"><AiFillLike /></span>
                        <span>10</span>
                        </a>
                    </div>
                    <div className="post-comment">
                        <a href=""> 25 comments</a>
                    </div>
                    </div>
                    <div className="post-reactions-info">
                    <a href=""><AiOutlineLike /> Like</a>
                    <a href=""><FaRegComment /> Comment</a>
                    <a href=""><PiShareFatThin /> Share</a>
                    </div>
                    <div className="view-all-comment">
                    <a href="">View more comments</a>
                    </div>
                    <div className="post-comment-box">
                    <div className="comments-people-info">
                        <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />

                        <div className="people-comments-detels">
                        <div className="personal-details">
                            <a href="">Mamun Mirdha</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, iure.</p>
                        </div>
                        <div className="comment-updated-info">
                            <span>4d</span>
                            <a href="">Like</a>
                            <a href="">Reply</a>
                        </div>
                        </div>
                    </div>
                    <div className="create-new-comment">
                        <div className="current-auth-photo">
                        <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                        </div>
                        <div className="current-auth-comment-box">
                        <form action="">
                            <textarea placeholder="Write a comment..." ></textarea>
                            <div className="comment-future-icons">
                            <div className="reaction-icons">
                                <a href="">
                                <i data-visualcompletion="css-img" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/3d442HB9oLN.png)", backgroundPosition: "0px -1095px", backgroundSize: "21px 1444px", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                                </a>
                                <a href="">
                                <i data-visualcompletion="css-img" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/3d442HB9oLN.png)", backgroundPosition: "0px -1197px", backgroundSize: "21px 1444px", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                                </a>
                                <a href="">
                                <i data-visualcompletion="css-img" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/3d442HB9oLN.png)", backgroundPosition: "0px -1129px", backgroundSize: "21px 1444px", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                                </a>
                                <a href="">
                                <i data-visualcompletion="css-img" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/3d442HB9oLN.png)", backgroundPosition: "0px -1231px", backgroundSize: "21px 1444px", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                                </a>
                                <a href="">
                                <i data-visualcompletion="css-img" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/3d442HB9oLN.png)", backgroundPosition: "0px -1333px", backgroundSize: "21px 1444px", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                                </a>
                            </div>
                            <div className="comment-submit-button">
                                <button type="submit">
                                <i data-visualcompletion="css-img" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/3d442HB9oLN.png)", backgroundPosition: "0px -1282px", backgroundSize: "21px 1444px", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                                </button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserPost