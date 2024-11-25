import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    console.log("hello ")
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {

    setTimeout(() => {
      const fetchedData = 'This data was fetched after mounting.';
      this.setState({ data: fetchedData });
    }, 2000);
  }

  render() {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>ComponentDidMount Example</h2>
        {this.state.data ? (
          <p>Data: {this.state.data}</p> // Hiển thị dữ liệu khi đã tải xong
        ) : (
          <p>Loading data...</p> // Hiển thị "Loading" khi đang tải
        )}
      </div>
    );
  }
}

export default MyComponent; 