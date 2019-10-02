import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

class ProfileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [
        {
          name: "최수민",
          univ: "서강",
          major: "컴퓨터공학",
          age: 25,
          animalList: ["사자", "토끼", "뱀"],
          isHappy: true
        },
        {
          name: "이한길",
          univ: "홍익",
          major: "법학",
          age: 29,
          animalList: ["펭귄"],
          isHappy: false
        },
        {
          name: "김서영",
          univ: "이화여자",
          major: "사이버보안학",
          age: 21,
          animalList: ["웜", "트로이목마"],
          isHappy: false
        }
      ]
    };
  }
  render() {
    const profileList = this.state.profiles.map(value => {
      return <ProfileCard profile={value} />;
    });

    return <Row>{profileList}</Row>;
  }
}

export default ProfileList;
