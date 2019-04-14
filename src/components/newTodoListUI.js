import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

class newTodoListUI extends React.Component {
    constructor(props){
        super()
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return false
        } else {
            return true
        }
    }
    render() {
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
            <div>
                <Input type="text" 
                    value={this.props.inputValue} 
                    style={{width: '300px',marginRight: '10px'}} 
                    placeholder="todo info"
                    onChange={this.props.handleInputChange}
                    />
                <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
            </div>
            <List
                size="small"
                style={{marginTop: '10px', width: '300px'}}
                bordered
                dataSource={this.props.list}
                renderItem={item => (<List.Item onClick={this.props.deleteItem.bind(this,item)}>{item}</List.Item>)} 
            /> 
        </div>
        )
    }
}

export default newTodoListUI