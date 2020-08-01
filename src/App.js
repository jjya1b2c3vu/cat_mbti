import React, { Component } from 'react';
import Home from "./component/Home";
import QnA from "./component/QnA";


//import Result from "./component/Result";

import './App.css';
import './CSS/animation.css'
import { Route,Switch} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      mode:1,
      E:0,I:0,
      S:0,N:0,
      T:0,F:0,
      J:0,P:0,
      qna:[
        {id:1,q:"나는 처음 본 고양이에게",a1:"먼저 손을 내미는 편이다",a2:"고양이가 다가오길 기다려준다"},
        {id:2,q:"나는 고양이와 교감할 때",a1:"온몸을 부비며 서로 스킨십하고 껴앉고 싶다",a2:"눈을 마주치며 같이 '애옹애옹'하면서 마음을 나누고 싶다"},
        {id:3,q:"길고양이를 만났을 때 나는",a1:"현실적으로 도움이 될 방법을 생각한다",a2:"고양이가 좋아하는 간식과 장난감을 잔뜩 싸온다"},
        {id:4,q:"입양을 마음먹고 데려올 고양이를 고를 때",a1:"신중하게 체크리스트를 준비해간다",a2:"만나보고 마음에 끌리는 고양이를 바로 데려온다"},
        {id:5,q:"나는 고양이와 함께",a1:"많은 활동을 하며 신나게 놀고 싶다",a2:"골골송(Zzz)을 들으며 누워서 뒹굴거릴 것이다"},
        {id:6,q:"고양이가 나에게 애옹애옹 말을 걸면",a1:"하나하나 대답해주고 들어준다",a2:"특이한 소리를 낼때만 대답해준다"},
        {id:7,q:"고양이가 알 수 없는 행동을 한다면",a1:"행동 자체가 신기하고 귀여워서 연구한다",a2:"고양이가 왜 그러는 마음을 알고 싶어서 고민한다"},
        {id:8,q:"계획한 일을 하는 중 고양이가 다가 온다면",a1:"애써 무시하고 계획된 일 먼저 한다.",a2:"계획은 깨라고 있고 고양이랑 논다."},
        {id:9,q:"나는 힐링을 할때",a1:"밖에 나가야 힐링이 된다",a2:"집에서 뒹굴거리며 푹 쉬어야 힐링이 된다"},
        {id:10,q:"나는 고양이가 놀라는 모습을 본다면",a1:"놀란 모습 자체가 너무 귀엽다",a2:"왜 놀랐을까 원인을 파악한다"},
        {id:11,q:"고양이 밥 주는 시간, 놀이 시간을 계획하고 실행한다.",a1:"당연하다",a2:"상황에 따라 다르다"},
        {id:12,q:"고양이가 조금이라도 아픈 것 같으면",a1:"모든 행동과 상황을 꼼꼼히 체크해서 병원에 간다",a2:"고양이 껴안고 울면서 일단 병원부터 뛰어간다"}
      ]
    }
  }
  
  render() {
    return (
      <div className="App">
          <div className="title"><h1>냥BTI</h1></div>
          <Switch>
            <Route exact path="/"><div className="home"><Home></Home></div></Route>
            <Route exact path="/qna">
              <QnA
                onChangePage1={function(){
                  // 4가지 케이스 분류
                  if ((this.state.mode % 4) === 1)this.setState({E: this.state.E+1}); 
                  else if ((this.state.mode % 4) === 2)this.setState({S: this.state.S+1});
                  else if ((this.state.mode % 4) === 3)this.setState({T: this.state.T+1});
                  else if ((this.state.mode % 4) === 0)this.setState({J: this.state.J+1});
                  if (this.state.mode<13)
                    this.setState({mode: this.state.mode+1});
                   
                }.bind(this)}
                onChangePage2={function(){
                  // 4가지 케이스 분류
                  if ((this.state.mode % 4) === 1)this.setState({I: this.state.I+1}); 
                  else if ((this.state.mode % 4) === 2)this.setState({N: this.state.N+1});
                  else if ((this.state.mode % 4) === 3)this.setState({F: this.state.F+1});
                  else if ((this.state.mode % 4) === 0)this.setState({P: this.state.P+1});
                  if (this.state.mode<13)
                    this.setState({mode: this.state.mode+1});    
                }.bind(this)}
                data={this.state.qna} num={this.state.mode}
                E={this.state.E} I={this.state.I}
                S={this.state.S} N={this.state.N}
                T={this.state.T} F={this.state.F}
                J={this.state.J} P={this.state.P}
              ></QnA></Route>
            
          </Switch>
      </div>
    );
  }
}

export default App;
