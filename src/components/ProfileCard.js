import React, { Component } from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 1.5rem;
`;

const NameWrapper = styled.div`
  font-size: 2.5rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  boder: 1px solid grey;
  background-color: #8a7f79;
  color: white;
`;

class ProfileCard extends Component {
  getAnimalList = () => {
    return this.props.profile.animalList.map(value => {
      return <li>{value}</li>;
    });
  };
  render() {
    return (
      <Wrapper>
        <div className="profileCard">
          <NameWrapper>{this.props.profile.name}</NameWrapper>
          <P>
            {`안녕하세요 저는 ${this.props.profile.univ}대학교의 ${this.props.profile.major}에 다니고 있습니다.`}
          </P>
          <P>
            {`올해는 ${this.props.profile.age}살인데 내년엔 ${this.props.profile
              .age + 1}이에요`}
          </P>
          <P>{`지금 기분은 ${
            this.props.profile.isHappy ? "행복" : "불행"
          }해요!`}</P>
          <h2>좋아하는 동물</h2>
          <ul>{this.getAnimalList()}</ul>
        </div>
      </Wrapper>
    );
  }
}

export default ProfileCard;
