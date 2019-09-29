import React, { Component } from 'react';
import styled from 'styled-components'

const P = styled.p`font-size:1.5rem;`

const NameWrapper = styled.div`
    font-size:3rem;
`;

const Wrapper = styled.div`
    margin-right:1rem;
    border:1px solid grey;
    background-color:yellow;
`


class Intro extends Component {
    render() {
        var data = this.props.data;
        var lists = [];

        var alists = [];
        var j = 0;
        while (j < data.favoriteAnimal.length) {
            alists.push(<li key={data.favoriteAnimal[j]}>{data.favoriteAnimal[j]}</li>);
            j = j + 1;
        }

        lists.push(
            <div key={data.name}>
                <h1><NameWrapper>{data.name}</NameWrapper></h1>
                <P>{`안녕하세요. 저는 ${data.univ}대학교의 ${data.major}과에 다니고 있습니다.`}</P>
                <P>{`올해는 ${data.age}살인데 내년엔 ${data.age + 1}이에요.`}</P>
                <P>{`지금 기분은 ${data.feeling}해요!`}</P>

                <h4>좋아하는 동물</h4>
                <nav>
                    <ul>
                        {alists}
                    </ul>
                </nav>
            </div>
        );

        return (
            <Wrapper>
                <article>
                    {lists}
                </article>
            </Wrapper>
        );
    }
}

export default Intro;