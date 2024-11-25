import React, { Component } from 'react';

class DidUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    // Lifecycle method: Chạy sau mỗi lần render nếu state hoặc props thay đổi
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log(`Count đã thay đổi: ${this.state.count}`);
        }
    }

    // Hàm xử lý khi bấm nút, cập nhật state
    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };


    render() {
        return (
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h2>Giá trị Count: {this.state.count}</h2>

                <button onClick={this.handleClick}>Tăng Count</button>
            </div>
        );
    }
}

export default DidUpdate;
