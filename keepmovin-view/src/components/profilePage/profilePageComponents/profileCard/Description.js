export default function Description() {
    const cardStyle = {
        width: "380px",
        border: "none",
        borderRadius: "10px",
        padding: "8px",
        backgroundColor: "#FFFFFF",
        position: "relative",
        height: "320px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)"
    }
    return (
        <div style={cardStyle}>
            <h2>About me:</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries,
            </p>
        </div>
    )
}