
function Greet({ name, msg = 'Good Morning',children }) {
    return <>
        <h2>Hellooooo {name}, {msg}</h2>
        {children}
    </>
}
export default Greet;