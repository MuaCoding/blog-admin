import React, { Component } from "react";
import { Input, Button, List } from "antd";

class ListGroup extends Component {
  render() {
    // 4.接收list.js中传递的数据
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>todolist</h1>
        </div>
        <div className="todo-action">
          <Input
            placeholder="todo"
            className="todo-input"
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
            onKeyUp={this.props.handleInputKeyUp}
          />
          <Button className="todo-submit" type="primary" onClick={this.props.handleAddItem}>
            提交
          </Button>
        </div>

        <div className="todo-list">
          <List
            size="large"
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.props.handleDeleteItem.bind(this, index)}>
                {index + 1} - {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default ListGroup;
