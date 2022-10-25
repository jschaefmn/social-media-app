import './rightbar.css';

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Example name</b> and <b>3 others</b> have birthdays today</span>
        </div>
      </div>
      <img className='rightbarAd' src="/assets/ad.png" alt="" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendsList">
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img className='rightbarProfileImg' src="/assets/person/3.jpeg" alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">John Carter</span>
        </li>
      </ul>
    </div>
  )
}
