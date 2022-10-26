import { Users } from '../../dummyData';
import Online from '../online/Online';
import './rightbar.css';

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
      <div className='birthdayContainer'>
          <img className='birthdayImg' src='/assets/gift.png' alt='' />
          <span className='birthdayText'>
            <b>Example name</b> and <b>3 others</b> have birthdays today
          </span>
        </div>
        <img className='rightbarAd' src='/assets/ad.png' alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendsList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Omaha</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Eagan</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">In a relationship</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <ProfileRightbar />
      </div>
    </div>
  );
}
