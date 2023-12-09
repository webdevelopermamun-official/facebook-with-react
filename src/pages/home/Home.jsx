import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { TfiAngleRight } from "react-icons/tfi";
import "./Home.scss"
import UserPost from "../../components/UserPost/UserPost";
import postData from "../../faker/postData";
import UserStory from "../../components/UserStory/UserStory";
import storyData from "../../faker/storyData";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";



const Home = () => {
  return (
    <>
      {/* Header Area start here */}
      <header className="fb-header">
        <div className="header-container">
          <div className="sidebar-container">
            <div className="header-logo-content">
              <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" alt="" />
              </a>
              <div className="search-fb">
                <form action="">
                  <label htmlFor="search"><CiSearch /></label>
                  <input type="search" placeholder="Search Facebook" id="search" name="search" />
                </form>
              </div>
            </div>
          </div>
          <div className="middle-container">
            <div className="main-menu">
              <div className="main-menu-items">
                <ul>
                  <li><a className="active" href="">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{color: "var(--primary-color)"}}><path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"></path></svg>
                  </a></li>
                  <li><a href="">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{color: "var(--secondary-icon)"}}><path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"></path><path d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"></path></svg>                  
                  </a></li>
                  <li><a href="">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style= {{color:"var(--secondary-icon)"}}><path d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z"></path></svg>
                  </a></li>
                  <li><a href="">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style= {{color: "var(--secondary-icon)"}} ><path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path><path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12zm2.21-2a9.537 9.537 0 0 0 0 3.993l.3.007A2 2 0 0 0 3 10h-.29zm.663-1.983a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517zM21.5 12a9.55 9.55 0 0 0-.212-2.007l-.265.007H21a2 2 0 0 0-.01 4l.3-.007c.138-.643.21-1.31.21-1.993zM12 21.5a9.455 9.455 0 0 0 4.97-1.402A3 3 0 0 0 14 17.523h-4a3 3 0 0 0-2.97 2.575A9.456 9.456 0 0 0 12 21.5z"></path></svg>
                  </a></li>
                  <li><a href="">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"  style= {{color: "var(--secondary-icon)"}}><path d="M8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"></path><path d="M.5 11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-9a7 7 0 0 1-7-7v-2zm7-5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-9z"></path></svg>
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sidebar-container">
            <div className="user-profile-area">
              <div className="user-future-list">
                <ul>
                  <li><a href="">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style= {{color: "var(--black-primary-icon)"}}><path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>
                  </a></li>
                  <li><a href="">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style= {{color: "var(--black-primary-icon)"}}><path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5c-1.922 0-3.736-.472-5.33-1.308a.63.63 0 0 0-.447-.069l-3.4.882a1.5 1.5 0 0 1-1.828-1.829l.882-3.4a.63.63 0 0 0-.07-.445A11.454 11.454 0 0 1 .5 12zm17.56-1.43a.819.819 0 0 0-1.125-1.167L14 11.499l-3.077-2.171a1.5 1.5 0 0 0-2.052.308l-2.93 3.793a.819.819 0 0 0 1.123 1.167L10 12.5l3.076 2.172a1.5 1.5 0 0 0 2.052-.308l2.931-3.793z"></path></svg>
                  </a></li>
                  <li><a href="">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style= {{color: "var(--black-primary-icon)"}}><path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path></svg>
                  </a></li>
                  <li><a href="">
                      <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                      <span><IoIosArrowDown /></span>
                    </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Area end here */}
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
                    
                    <button>{`What's on your mind, Mamun?`}</button>
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

                postData.map((postData, item) => (
                <UserPost key={item} postImages={postData.image} postContent={postData.content} />))

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
    </>
  )
}

export default Home