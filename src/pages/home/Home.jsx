
import { GoPlus } from "react-icons/go";
import { TfiAngleRight } from "react-icons/tfi";
import { FaGlobeAsia } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

import "./Home.scss"
import UserPost from "../../components/UserPost/UserPost";
import UserStory from "../../components/UserStory/UserStory";
import storyData from "../../faker/storyData";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import ModalPost from "../../components/ModalPost/ModalPost";
import axios from "axios";
import Swal from "sweetalert2";



const Home = () => {
  const [postModal, setPostModal] = useState(false);
  const [postEditModal, setPostEditModal] = useState(false);
  const [hideSmallModal, setHideSmallModal] = useState(false);
  const [showPostPhotoField, setShowPhotoField] = useState(false);
  const [showPostVideoField, setShowVideoField] = useState(false);
  const [allPost, setAllPost] = useState([]);
  // input fields controll
  const [postInput, setPostInput] = useState({
    postContent: "",
    photo: "",
    video: ""
  });

  // handle post input valu change
  const handlePostFieldValueChange = (e) => {
    setPostInput((prevState) => (
      {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    ))
  }

  // handle post input field show true false
  const handleShowVideoField = () => {
    setShowVideoField(true)
    setShowPhotoField(false)
  }
  const handleShowPhotoField = () => {
    setShowPhotoField(true)
    setShowVideoField(false)

  }

  // get all posts
  const getAllpostData = async() => {
    const response = await axios.get("http://localhost:7070/posts?_sort=id&_order=desc");
    setAllPost(response.data);
  }

  // post deleted
  const haandlePostDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:7070/posts/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your post has been deleted.",
          icon: "success"
        });
        getAllpostData();
        setHideSmallModal(false)
      }
    });
  }

  // handle modal input field reset
  const handleModalEditHide = () => {
    setPostEditModal(false);
    setHideSmallModal(false);
    setShowPhotoField(false);
    setPostInput({
      postContent: "",
      photo: "",
      video: ""
    });
  };

  // handle post data update 
  const handlePostEdit = (id) => {
    let getCerrentPostData = allPost.find(post => post.id === id);
    
    if(getCerrentPostData.photo){
      setShowPhotoField(true)
    }else if(getCerrentPostData.video){
      setShowPhotoField(true)
    }
    setPostInput(getCerrentPostData);
    setPostEditModal(true);
  }

  // handle update post data submit
  const handlePostUpdate = async (e) => {
    e.preventDefault();

    await axios.patch(`http://localhost:7070/posts/${postInput.id}`, postInput).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New post upload",
        showConfirmButton: false,
        timer: 1500
      });
      getAllpostData();
      handleModalEditHide()
    });
  }



  // handle new post upload and send data json server
  const newPostUpload = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:7070/posts", postInput).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New post upload",
        showConfirmButton: false,
        timer: 1500
      });
      setPostInput({
        postContent: "",
        photo: "",
        video: ""
      });
      getAllpostData();
      setPostModal(false);
      
    });
  };

  // get all posts

  useEffect (() => {
    getAllpostData();
  }, [])

  return (
    <>
      {/* Facebook header */}
      <Header />
      {/* Main Content start here */}
      <section id="body-content-wrapper">
        <div className="body-container">
          <div className="sidebar-container">
            <div className="left-sidebar-container">
              <div className="sidebar-inner-container">
                <ul>
                  <li><a href="">
                    <img className="auth-img" src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                    <span>Mamun Mirdha</span>
                  </a></li>
                  <li><a href="">
                    <i data-visualcompletion="css-img" style={{backgroundImage:"url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')", backgroundPosition:"0 -296px", backgroundSize:"auto", width:"36px", height:"36px", backgroundRepeat:"no-repeat", display:"inline-block"}}></i>
                    <span>Friends</span>
                  </a></li>
                  <li><a href="">
                    <i data-visualcompletion="css-img" style={{backgroundImage:"url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')", backgroundPosition:"0 -37px", backgroundSize:"auto", width:"36px", height:"36px", backgroundRepeat:"no-repeat", display:"inline-block"}}></i>
                    <span>Groups</span>
                  </a></li>
                  <li><a href="">
                    <img draggable="false" height="36" width="36" alt="" src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png" />
                    <span>Feeds</span>
                  </a></li>
                  <li><a href="">
                    <i data-visualcompletion="css-img" style={{backgroundImage:"url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')", backgroundPosition:"0 -407px", backgroundSize:"auto", width:"36px", height:"36px", backgroundRepeat:"no-repeat", display:"inline-block"}}></i>
                    <span>Marketplace</span>
                  </a></li>
                  <li><a href="">
                    <i data-visualcompletion="css-img" style={{backgroundImage:"url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')", backgroundPosition:"0 -518px", backgroundSize:"auto", width:"36px", height:"36px", backgroundRepeat:"no-repeat", display:"inline-block"}}></i>
                    <span>Video</span>
                  </a></li>
                  <li className="see-more-link"><a href="">
                    <span className="see-more">
                      <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" style={{color: "#444545"}}><g fillRule="evenodd" transform="translate(-448 -544)"><path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
                    </span>
                    <span>See more</span>
                  </a></li>
                </ul>
                <div className="divider"></div>
                <div className="shortCut">
                  <span>Your shortcuts</span>
                  <a href="">Edit</a>
                </div>
                <div className="shortCut-area">
                  <ul>
                    <li><a href="">
                      <img src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/397991016_10225339293729107_8244497211653447346_n.jpg?stp=c13.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=111&ccb=1-7&_nc_sid=f22548&_nc_ohc=uT1rLsYp7S4AX_XL_rh&_nc_oc=AQk85Q8HEuo1bYeMZIM_RvuewvgTRGttm3BflInYZOynSTx5oK-3jYj_cPFkcg0Gn10&_nc_ht=scontent.fdac41-1.fna&oh=00_AfAHvyRdE7BjSMOerUUXk0f73rPsPv58ngonBaXDwSOyDA&oe=6570847A" alt="" />
                      <span>DSA with DevOps - MERN Stack</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://scontent.fdac41-1.fna.fbcdn.net/v/t1.6435-9/119137358_3718642788164514_8623063901198792879_n.jpg?stp=c19.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=109&ccb=1-7&_nc_sid=f2fd11&_nc_ohc=427MaUGWEZQAX-JL1zH&_nc_ht=scontent.fdac41-1.fna&oh=00_AfDL-Mm5AwZ5Y5CrFXGV8l1_PyrsFveGh-0mGOOhsNXcIQ&oe=65933B67" alt="" />
                      <span>WordPress Bangladesh</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/317647837_10159536894682921_6862086827232811971_n.jpg?stp=c14.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=101&ccb=1-7&_nc_sid=f22548&_nc_ohc=aGYyEkQIwJ0AX_ZwVDM&_nc_ht=scontent.fdac41-1.fna&oh=00_AfCDyu3eazpKNGFzEpc1SvldjcYaVCGTgQM1upOENGlA7w&oe=65716A00" alt="" />
                      <span>CodemanBD Success Stories</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/372004462_6295838890527750_2640925503108889112_n.jpg?stp=c23.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=107&ccb=1-7&_nc_sid=f22548&_nc_ohc=_ZUa_ys-_OIAX_2pfs6&_nc_ht=scontent.fdac41-1.fna&oh=00_AfB95QfrE6MnN-jcNKxMPgnAS6_xD9GuuSzjbtD7ej66cQ&oe=6570E90B" alt="" />
                      <span>Get Orders On Fiverr</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://scontent.fdac41-1.fna.fbcdn.net/v/t1.18169-9/1483207_10150001784124944_240076833_n.png?stp=cp0_dst-png_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=abdf32&_nc_ohc=Op_daXR2bTgAX-UxuTx&_nc_ht=scontent.fdac41-1.fna&oh=00_AfAQVJrFJg97537mNyyXY71HyS0W2U0OaLf-laYJKz-4fA&oe=65935907" alt="" />
                      <span>SoroBindu JavaScript MERN Batch 03</span>
                    </a></li>
                    <li className="see-more-link"><a href="">
                      <span className="see-more">
                        <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" style={{color: "var(--primary-color)"}}><g fillRule="evenodd" transform="translate(-448 -544)"><path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
                      </span>
                      <span>See more</span>
                  </a></li>
                  </ul>
                </div>
              </div>
              <div className="left-side-footer">
                <ul>
                  <li><a href=""> Privacy .</a></li>
                  <li><a href=""> Terms .</a></li>
                  <li><a href="">Advertising .</a></li>
                  <li><a href="">Ad Choices .</a></li>
                  <li><a href="">Cookies  ·</a></li>
                  <li><a href="">More</a></li>
                  <li><a href="">Meta © 2023</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="main-content-container">
            <div className="main-container-wraper">
              <div className="story-area-items">
                <div className="story-area auth-story">
                  <div className="auth-content">
                    <div className="auth-image">
                        <img src="https://www.webdevelopermamun.me/wp-content/uploads/2023/05/Web-Developer-Mamun-2.jpg" alt="" />
                    </div>
                    <div className="auth-box">
                      <span><GoPlus /></span>
                      <p>Create story</p>
                    </div>
                  </div>
                </div>

                {/* Friends new story update */}
                {
                  storyData.map((storyData, item) => (
                    <UserStory key={item} storyImg={storyData.soryPic} userImg={storyData.authPhoto} userName={storyData.authName}  />
                  ))
                }

                <div className="slider-items-icon">
                  <a href="">
                    <TfiAngleRight />
                  </a> 
                </div>
              </div>
              <div className="post-area">
                <div className="post-area-content">
                  <div className="user-post-fild">
                    <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                    
                    <button onClick={() => setPostModal(true)}>{`What's on your mind, Mamun?`}</button>
                  </div>
                  <div className="divider"></div>
                  <div className="user-post-future">
                    <div className="future-item live-future">
                      <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png" alt="" />
                      <span>Live video</span>
                    </div>
                    <div className="future-item images-future">
                      <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png" alt="" />
                      <span>Photo/video</span>
                    </div>
                    <div className="future-item images-future">
                      <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png" alt="" />
                      <span>Feeling/activity</span>
                    </div>
                  </div>
                </div>
              </div>

              { /* user post area start here */

                allPost.length === 0 ? <h2 style={{padding: "20px 0", textAlign: "center", fontSize: "50px"}}>No Post Fount</h2> :
                allPost.map((postData, item) => (
                <UserPost key={item} postImages={postData.photo} postContent={postData.postContent} postVideo={postData.video} postDelete= {() => haandlePostDelete(postData.id)} postEdit = {() => handlePostEdit(postData.id)} smallModal= {hideSmallModal} setSmallModal={setHideSmallModal} />))

              }{/* user post area end here */}

            </div>
          </div>
          <div className="sidebar-container">
            <div className="right-sidebar-container">
              <div className="right-sidebar-inner-items">
                <div className="show-page-profile">
                  <div className="right-sidebar-heading-content">
                    <h4>Your Pages and profiles</h4>
                    <div className="heading-icons">
                      <a href=""><HiDotsHorizontal /></a>
                    </div>
                  </div>
                  <ul>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>Mamun Mirdha</span>
                    </a></li>
                    <li><a href="">
                      <span>
                        <i data-visualcompletion="css-img" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/zDp6oQT_ZrA.png)", backgroundPosition: "0px -272px", backgroundSize: "auto", width: "20px", height: "20px", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                      </span>
                      <span>Create promotion</span>
                    </a></li>
                  </ul>
                  <div className="divider"></div>
                  <div className="right-sidebar-heading-content">
                    <h4>Birthdays</h4>
                  </div>
                  <ul>
                    <li><a href="">
                      <span>
                        <i data-visualcompletion="css-img" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/zDp6oQT_ZrA.png)", backgroundPosition: "0px 0px", backgroundSize: "auto", width: "36px", height: "36px", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                      </span>
                      <span className="birthdays">
                        <a href="">ভাঁবঁ নঁগঁরেঁরঁ রাঁজঁকঁন্ন্যাঁ </a>And <strong>2 others</strong> have birthdays today.
                      </span>
                    </a></li>
                  </ul>
                  <div className="divider"></div>
                  <div className="right-sidebar-heading-content">
                    <h4>Contacts</h4>
                    <div className="heading-icons">
                      <a href=""><IoIosSearch /></a>
                      <a href=""><HiDotsHorizontal /></a>
                    </div>
                  </div>
                  <ul>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>Møhâmmàd Ømõr Gåzî</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>Shafikul Islam Ashik</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>Imam Hossain</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>Kawsar Ahmed Hridoy</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>Sahariar Hasan</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>মাতুব্বর সাহেব</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>মাতুব্বর সাহেব</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>মাতুব্বর সাহেব</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>মাতুব্বর সাহেব</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>মাতুব্বর সাহেব</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>মাতুব্বর সাহেব</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>মাতুব্বর সাহেব</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>মাতুব্বর সাহেব</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>মাতুব্বর সাহেব</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>মাতুব্বর সাহেব</span>
                    </a></li>
                    <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span>মাতুব্বর সাহেব</span>
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* post modal show */}

      {
        postModal &&
        <ModalPost hide={setPostModal} title="Create post">
          <div className="post-popup-content">
            <form onSubmit={newPostUpload}>
              <div className="post-auth-info">
                <div className="post-auth-photo">
                  <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                </div>
                <div className="post-futures">
                  <h2>Mamun Mirdha</h2>
                  <div className="post-show-privacy">
                    <span className="left-side-arrow"><FaGlobeAsia /></span>
                    <select name="" id="">
                      <option value="Public">Public</option>
                      <option value="Friends">Friends</option>
                      <option value="Friends except">Friends except...</option>
                      <option value="Only me">Only me</option>
                      <option value="Specific friends">Specific friends</option>
                      <option value="Custom">Custom</option>
                    </select>
                    <span className="right-side-arrow"><IoMdArrowDropdown /></span>
                  </div>
                </div>
              </div>
              <div className="post-text-box">
                <textarea name="postContent" value={postInput.postContent} onChange={handlePostFieldValueChange} placeholder="What's on your mind, Mamun?"></textarea>
              </div>
              {
                showPostPhotoField && 
                <div className="post-photo-box">
                  <input name="photo" value={postInput.photo} onChange={handlePostFieldValueChange} type="text" placeholder="Photo Url" />
                </div>
              }
              {
                showPostPhotoField &&
                <div className="post-video-box">
                  <input name="video" value={postInput.video} onChange={handlePostFieldValueChange} type="text" placeholder="Video url" />
                </div>
              }

              <div className="post-style-box">
                <img src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" />
                <span title="Emoji" className="read-more-icon"></span>
              </div>
              <div className="add-to-post">
                <span>Add to your post</span>
                <div className="post-uploded-future">
                  <img title="Photo" onClick={handleShowPhotoField} src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeH9bmEDOoDzzDwc7wCXoBZWPL4YoeGsw5I8vhih4azDkl5ch0IS6iy-iCAYeBj8NiMgthtOReWxaBAgq0LTNqu2" alt="" />
                  <img title="Video" onClick={handleShowVideoField} src="https://i0.wp.com/www.followchain.org/wp-content/uploads/2023/05/icons8-tv-show-330.png?fit=330%2C330&ssl=1" alt="" />
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeHa_oSYheHTp5_GhDqrNbxkvPIN-OmHLJy88g346YcsnGQMRImph42zan4YbFnrzW8eMT4BdiyFBqAlmcx8H4e8" alt="" />
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png?_nc_eui2=AeFQirJLkkmsaKS3wO2UT6eR88Ps36vvyGDzw-zfq-_IYICtEPD-IO_RnfX55IZ_NLtrwTnVJBvSUttQC5l5UUiJ" alt="" />
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/NeSKjwaLVhE.png?_nc_eui2=AeHj3sKGJaebTP64Vazsej9CzPoPJqX9vZjM-g8mpf29mBpPHrZaeEjrc3EI3fHM_wh2YGz9V_4KHIsY1VnrBsr6" alt="" />
                  <span className="read-more-icon"></span>
                </div>
              </div>
              <div className="post-boost-option">
                <div className="post-boost-content">
                  <div className="post-boost-icon">
                    <span></span>
                  </div>
                  <div className="boost-content">
                    <h4>Boost post</h4>
                    <p>{`You'll choose settings after you click Post. You can only boost public posts.`}</p>
                  </div>
                </div>
                <input type="checkbox" />
              </div>
              <div className="submit-button">
                {
                  postInput.postContent === "" &&  postInput.photo === "" && postInput.video === ""? 
                  <button style={{cursor: "no-drop"}} disabled type="submit">Post</button> :
                  <button style={{cursor: "pointer", backgroundColor: "var(--primary-color)", color: "#fff"}} type="submit">Post</button> 
                }
              </div>
            </form>
          </div>
        </ModalPost>
      }

      {/* post update modal show */}

      {
        postEditModal &&
        <ModalPost hide={handleModalEditHide} title="Create post">
          <div className="post-popup-content">
            <form onSubmit={handlePostUpdate}>
              <div className="post-auth-info">
                <div className="post-auth-photo">
                  <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                </div>
                <div className="post-futures">
                  <h2>Mamun Mirdha</h2>
                  <div className="post-show-privacy">
                    <span className="left-side-arrow"><FaGlobeAsia /></span>
                    <select name="" id="">
                      <option value="Public">Public</option>
                      <option value="Friends">Friends</option>
                      <option value="Friends except">Friends except...</option>
                      <option value="Only me">Only me</option>
                      <option value="Specific friends">Specific friends</option>
                      <option value="Custom">Custom</option>
                    </select>
                    <span className="right-side-arrow"><IoMdArrowDropdown /></span>
                  </div>
                </div>
              </div>
              <div className="post-text-box">
                <textarea name="postContent" value={postInput.postContent} onChange={handlePostFieldValueChange} placeholder="What's on your mind, Mamun?"></textarea>
              </div>
              {
                showPostPhotoField && 
                <div className="post-photo-box">
                  <input name="photo" value={postInput.photo} onChange={handlePostFieldValueChange} type="text" placeholder="Photo Url" />
                </div>
              }
              {
                showPostVideoField &&
                <div className="post-video-box">
                  <input name="video" value={postInput.video} onChange={handlePostFieldValueChange} type="text" placeholder="Video url" />
                </div>
              }

              <div className="post-style-box">
                <img src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" />
                <span title="Emoji" className="read-more-icon"></span>
              </div>
              <div className="add-to-post">
                <span>Add to your post</span>
                <div className="post-uploded-future">
                  <img title="Photo" onClick={handleShowPhotoField} src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeH9bmEDOoDzzDwc7wCXoBZWPL4YoeGsw5I8vhih4azDkl5ch0IS6iy-iCAYeBj8NiMgthtOReWxaBAgq0LTNqu2" alt="" />
                  <img title="Video" onClick={handleShowVideoField} src="https://i0.wp.com/www.followchain.org/wp-content/uploads/2023/05/icons8-tv-show-330.png?fit=330%2C330&ssl=1" alt="" />
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeHa_oSYheHTp5_GhDqrNbxkvPIN-OmHLJy88g346YcsnGQMRImph42zan4YbFnrzW8eMT4BdiyFBqAlmcx8H4e8" alt="" />
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png?_nc_eui2=AeFQirJLkkmsaKS3wO2UT6eR88Ps36vvyGDzw-zfq-_IYICtEPD-IO_RnfX55IZ_NLtrwTnVJBvSUttQC5l5UUiJ" alt="" />
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/NeSKjwaLVhE.png?_nc_eui2=AeHj3sKGJaebTP64Vazsej9CzPoPJqX9vZjM-g8mpf29mBpPHrZaeEjrc3EI3fHM_wh2YGz9V_4KHIsY1VnrBsr6" alt="" />
                  <span className="read-more-icon"></span>
                </div>
              </div>
              <div className="post-boost-option">
                <div className="post-boost-content">
                  <div className="post-boost-icon">
                    <span></span>
                  </div>
                  <div className="boost-content">
                    <h4>Boost post</h4>
                    <p>{`You'll choose settings after you click Post. You can only boost public posts.`}</p>
                  </div>
                </div>
                <input type="checkbox" />
              </div>
              <div className="submit-button">
                {
                  postInput.postContent === "" &&  postInput.photo === "" && postInput.video === ""? 
                  <button style={{cursor: "no-drop"}} disabled type="submit">Post</button> :
                  <button style={{cursor: "pointer", backgroundColor: "var(--primary-color)", color: "#fff"}} type="submit">Post</button> 
                }
                
              </div>
            </form>
          </div>
        </ModalPost>
      }










    </>
  )
}

export default Home