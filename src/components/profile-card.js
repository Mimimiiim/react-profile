import React from 'react'

function ProfileCard(props) {
    let animalList = [];
    for(let i = 0 ;i < props.favoriteAnimals.length ; i++ ) {
        animalList.push(<li>{props.favoriteAnimals[i]}</li>)
    }
    return (
        <div>
            <h1>{props.name}</h1>
            <p>안녕하세요. 저는 {props.univ} {props.major}를 다니고 있습니다.</p>
            <p>올해는 {props.age}살인데 곧 {props.age + 1}살이에요!</p>
            <p>지금 기분은 {props.happy === true ? "행복" : "불행"}해용~</p>
            <h2>좋아하는 동물</h2>
            <ul>{animalList}</ul>
        </div>
    )
}

export default ProfileCard