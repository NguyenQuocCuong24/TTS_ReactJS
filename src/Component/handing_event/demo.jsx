import React from 'react'


//Tạo một function và truyền nó như một props
function demo() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}


//Viết trực tiếp event handler vào JSX
<button
    onClick={function handleClick() {
        alert("You clicked me!");
    }}
>
    Click me
</button>

//truyền handler như 1 props
function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`);
    }

    return (
        <Button onClick={handlePlayClick}>
            Play Movie: {movieName}
        </Button>
    );
}


export default demo