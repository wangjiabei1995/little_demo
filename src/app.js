import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.less'

class App extends Component {
    
    render() {
        return <div>
            hello word`17
        </div>
    }
}

// 需要在 index.html 中增加一个 div标签 id 设置为 'app'
ReactDom.render(<App />, document.getElementById('app'));