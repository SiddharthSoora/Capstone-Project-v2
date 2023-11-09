export default function Buttt() {
    function click() {
        console.log("Click happened");
    }
    
    return (
        <>
        <div className="text-9xl text-red-800">Hello</div>
        <button onClick={click}>Click Me</button>
        </>
    );
}