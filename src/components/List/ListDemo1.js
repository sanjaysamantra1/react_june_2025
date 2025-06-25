export default function ListDemo1() {
    let stateNames = ['Odisha', 'Karnataka', 'Bihar', 'Kerala', 'Andhra Pradesh'];
    return <>
        <h3>State List</h3>
        <ol>
            {stateNames.map((stateName, ind) => {
                return <li key={ind}>{stateName}</li>
            })}
        </ol>
    </>
}
