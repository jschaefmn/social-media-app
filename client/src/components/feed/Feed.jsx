import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/')
  }, [])

  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
  );
}
