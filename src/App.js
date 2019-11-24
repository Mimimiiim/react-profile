import React from 'react';
import ProfileCard from './components/profile-card'

function App() {
  return (
    <div className="App">
      <ProfileCard 
      name='윤영미' 
      univ='이화여자대학교' 
      major='산업디자인학과' 
      age={23} 
      happy={true} //참거짓(참이면 happy까지만 거짓이면 그냥 지워도됨)
      favoriteAnimals={["강아지", "고양이", "쿼카"]}
      ></ProfileCard>
       <ProfileCard 
      name='이수연' 
      univ='이화여자대학교' 
      major='언어병리학과' 
      age={28} 
      happy={true} //참거짓(참이면 happy까지만 거짓이면 그냥 지워도됨)
      favoriteAnimals={["강아지", "햄스터", "사슴"]}
      ></ProfileCard>
       <ProfileCard 
      name='최수민' 
      univ='서강대학교' 
      major='컴퓨터공학과' 
      age={30} 
      happy={true} //참거짓(참이면 happy까지만 거짓이면 그냥 지워도됨)
      favoriteAnimals={["사자", "토끼", "뱀"]}
      ></ProfileCard>
    </div>
  );
}

export default App;
