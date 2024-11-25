import React, { Component } from 'react';


// -----------sử dụng js trong jsx-------
const name = "React";
const element = <h1>Hello, {name}!</h1>;

//sử dụng toán tử ba ngôi jsx
const isLoggedIn = true;
return (
    <div>
        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
    </div>
);

// sử dụng style trong jsx
const style = { color: 'blue', fontSize: '20px' };
return <h1 style={style}>Hello, styled JSX!</h1>;


// xử lí mảng bằng phương thức .map()
const items = ['toán', 'lí', 'hóa'];
return (
    <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
);


//Hàm xử lý sự kiện được truyền dưới dạng một tham chiếu.
function handleClick() {
    alert('Button clicked!');
}
return <button onClick={handleClick}>Click Me</button>;

