import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
    render(){
        return (
        <div>

            <div className="home">
                <p className="sub_title">나와 어울리는 냥 주인님 찾기</p>
                <p>homepage</p>
            </div>
            <Link to="/qna"><button className="start_button">테스트 시작</button></Link>
        </div>
        );
    }
}
export default Home;