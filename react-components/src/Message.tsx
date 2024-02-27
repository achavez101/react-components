function Message() {
    const name = 'Amy';
    if(name)
        return <h1>Programming Languages that {name} knows</h1>;
    return <h1>Messages</h1>;
}

export default Message;