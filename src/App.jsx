import React, { useState, useEffect } from 'react';
import './App.css'
import UserInfo from './Component/Props/Props.jsx'
import DidUpdate from './Component/State_lifecycle/DidUpdate.jsx'
function App() {

  const [showChangeBgColor, setShowChangeBgColor] = useState(false);
  const [showClock, setShowClock] = useState(false);
  const [showImageGallery, setShowImageGallery] = useState(false);

  // Thay đổi màu nền khi bấm nút
  function ChangeBackgroundColor() {
    const [bgColor, setBgColor] = useState('#ffffff');

    const changeColor = () => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setBgColor(randomColor);
    };

    return (
      <div style={{ backgroundColor: bgColor, height: '100vh', textAlign: 'center', padding: '50px' }}>
        <button onClick={changeColor}>Change Background Color</button>
      </div>
    );
  }

  // Hiển thị đồng hồ thời gian thực  
  function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => clearInterval(timer); // Dọn dẹp khi component bị hủy
    }, []);

    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Current Time:</h1>
        <h2>{time.toLocaleTimeString()}</h2>
      </div>
    );
  }

  // Hiển thị ảnh theo danh sách URL
  const imageUrls = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/250',
  ];

  function ImageGallery() {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', padding: '20px' }}>
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index + 1}`} style={{ width: '100%' }} />
        ))}
      </div>
    );
  }

  return (
    <div>
     
      <button onClick={() => setShowChangeBgColor(!showChangeBgColor)}>Toggle Change Background</button>
      <button onClick={() => setShowClock(!showClock)}>Toggle Clock</button>
      <button onClick={() => setShowImageGallery(!showImageGallery)}>Toggle Image Gallery</button>

      {showChangeBgColor && <ChangeBackgroundColor />}
      {showClock && <Clock />}
      {showImageGallery && <ImageGallery />}

      <h1>demo props</h1>
      {/* Truyền props cho UserInfo */}
      <UserInfo name="Alice" age={25} email="alice@example.com" />

      <h1>LifeCycle</h1>
      <DidUpdate />

    </div>
  )
}

export default App
