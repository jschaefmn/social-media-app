import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './profile.css';

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img className='profileCoverImg' src={`${PF}post/3.jpeg`} alt='' />
              <img className='profileUserImg' src={`${PF}person/7.jpeg`} alt='' />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Jake Schaefbauer</h4>
              <span className='profileInfoDesc'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates neque non, autem ut enim sunt ea et
                porro? Veritatis autem quae cupiditate tempora obcaecati aliquid totam minus, consequatur nisi modi?
              </span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed username='test' />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
