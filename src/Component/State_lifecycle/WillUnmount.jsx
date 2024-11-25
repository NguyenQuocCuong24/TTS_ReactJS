import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        console.log("helloo")
        super(props);
        this.state = { seconds: 0 }; // Khởi tạo state lưu số giây.
        this.timerId = null; // Biến lưu ID của interval.
    }

    componentDidMount() {

        // Bắt đầu bộ đếm ngay khi component được gắn vào DOM.
        this.timerId = setInterval(() => {
            this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
            // Cập nhật state để tăng giây mỗi giây.
        }, 1000);
    }

    componentWillUnmount() {
        // Dọn dẹp interval trước khi component bị xóa.
        clearInterval(this.timerId);
        console.log('Component unmounted, timer cleared');
    }

    render() {
        return <p>Số giây: {this.state.seconds}</p>; // Hiển thị số giây.
    }
}

export default Timer;
