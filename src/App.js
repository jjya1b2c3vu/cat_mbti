import React, { Component } from 'react';
import Home from "./component/Home";
import QnA from "./component/QnA";
//import Result from "./component/Result";
//import './css/animate.css'
import './App.css';
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
        {id:1,q:"나는 처음 본 사람에게",a1:"내가 먼저 말을 거는 편이다",a2:"다가오길 기다리는 편이다"},
        {id:2,q:"나는 공부할 때",a1:"손으로 써가면서 하는 걸 좋아한다",a2:"눈으로 보고, 말하면서 하는 걸 좋아한다"},
        {id:3,q:"친구들이 평가하는 나는",a1:"현실적인 사람이다",a2:"배려심이 많은 사람이다"},
        {id:4,q:"나는 시험 공부를 할 때",a1:"계획을 세워서 미리 준비한다",a2:"벼락치기 한다"},
        {id:5,q:"나는 생각, 말, 행동에 대해서",a1:"말과 행동이 앞선다.",a2:"생각을 많이 하는 편이다."},
        {id:6,q:"나는 수업을 들을 때",a1:"빠트리지 않고 메모하는 편이다.",a2:"중요한 단어나 생각나는 것들 위주로 메모한다"},
        {id:7,q:"나는 친구가 울면",a1:"무슨 일이 있었는지 물어본다",a2:"그냥 같이 슬퍼하고, 같이 운다"},
        {id:8,q:"나는 친구와의 약속 시간을",a1:"잘 지킨다",a2:"잘 지키지 않는다고 친구한테 혼난다"},
        {id:9,q:"나와 주말에 데이트를 한다면",a1:"밖에 나가서 논다",a2:"집에 있는게 좋다"},
        {id:10,q:"나는 놀라운 일을 겪으면",a1:"사실 위주로 말한다.",a2:"느낀점에 대해 말한다."},
        {id:11,q:"나는 규칙을 지키는 것은",a1:"당연하다.",a2:"상황에 따라 다르다."},
        {id:12,q:"나는 여행을 갈때",a1:"구체적인 계획을 세운다",a2:"출발, 도착 그리고 장소만 예약한다"}
      ]
    }
  }
  render() {
    return (
      <div className="App">
          <div className="title"><h1>고양이 주인 테스트</h1></div>
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
            {/* <Route exact path="/result"><Result></Result></Route> */}
            <Route path="/">Not found</Route>
          </Switch>
      </div>
    );
  }
}

export default App;
