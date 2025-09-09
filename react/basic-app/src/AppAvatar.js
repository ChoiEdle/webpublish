import './App.css';
import './css/Avatar.css';
import Avatar, { AvatarList, AvatarImage, AvatarImageList } from './components/Avatar.jsx';
// import { AvatarImage } from './components/AvatarImage.jsx';
// import { AvatarImageList } from './components/AvatarImageList.jsx';
// import { AvatarList } from './components/AvatarList.jsx';

export default function App() {
  const list = [
    {"img" : "/images/people1.webp", "style" : "avatar-img"},
    {"img" : "/images/people2.webp", "style" : "avatar-img-circle"},
    {"img" : "/images/people3.webp", "style" : "avatar-img"}
  ];
  const alist = [
    {"img" : "/images/people1.webp", "pname" : "James"},
    {"img" : "/images/people2.webp", "pname" : "Smith"},
    {"img" : "/images/people3.webp", "pname" : "Ann"}
  ];
  return (
    <>
      <Avatar img="/images/people3.webp" pname="Ann"/>
      <hr/>
      <AvatarList list={alist} className="avatar-list" />
      <hr/>
      <AvatarImage img="/images/people1.webp" style="avatar-img-circle"/>
      <AvatarImage img="/images/people2.webp" style="avatar-img"/>
      <AvatarImage img="/images/people3.webp" style="avatar-img-circle"/>
      <hr/>
      <AvatarImageList imgList={list} />
    </>
  );
}

