import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
    render(){
        return (
        <div>
            <div className="home" >
                <br/>
                <h2 className="sub_title">나와 어울리는 냥 주인님 찾기</h2>
                <br/>
                <p>MBTI 기반으로 집사님과 어울리는 냥 주인님을 찾아 줍니다.</p>
                <p>입양은 신중하고 책임있게, 펫샵보다는 가정분양!</p>
                <div className="produce">
                    <p>개발 : Zhonya_J</p>
                    <p>일러스트 : Anna_P</p>
                    <p>지원 : Lim </p>
                </div>
            </div>
            <Link to="/qna"><button className="start_button">테스트 시작</button></Link>
        </div>
        );
    }
}
export default Home;