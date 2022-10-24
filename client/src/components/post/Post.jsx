import './post.css';
import { MoreVert } from '@mui/icons-material';

export default function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg' src="/assets/person/1.jpeg" alt="" />
            <span className="postUsername">Sample User</span>
            <span className="postDate">5 minutes ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">First sample post here</span>
          <img src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' src="/assets/like.png" alt="" />
            <img className='likeIcon' src="/assets/heart.png" alt="" />
            <span className="postLikeCounter">32 people liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 Comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
