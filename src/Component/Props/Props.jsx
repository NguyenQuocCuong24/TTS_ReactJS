
////truyền một hàm từ component cha xuống component con qua props, và con có thể gọi hàm đó.
// function Button(props) {
//     return <button onClick={props.onClick}>Click Me</button>;
// }

// function App() {
//     const handleClick = () => {
//         alert('Button clicked!');
//     };

//     return <Button onClick={handleClick} />;
// }

// //xác định kiểu dữ liệu của props
// function Greeting(props) {
//     return <h1>Hello, {props.name}!</h1>;
// }

// Greeting.propTypes = {
//     name: PropTypes.string.isRequired,
// };



const UserInfo = (props) => {
    const { name, age, email } = props;

    return (
        <div style={styles.container}>
            <h2>User Information</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    );
};

const styles = {
    container: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif',
    },
};



export default UserInfo; 
