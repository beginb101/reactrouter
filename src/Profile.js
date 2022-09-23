import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  velopert: {
    name: '김민준',
    description: '리액트를 좋아하는 개발자'
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동전의 주인공'
  }
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  if (!profile) {
    console.log(params);
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;