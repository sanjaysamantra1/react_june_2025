export default function ListDemo1() {
    let stateNames = ['Odisha', 'Karnataka', 'Bihar', 'Kerala', 'Andhra Pradesh'];
    return <>
        <h3>State List</h3>
        <ol>
            {stateNames.map((stateName, ind) => {
                return <li key={ind}>{stateName}</li>
            })}
        </ol>

        <h3>State Names in Dropdown</h3>
        <select>
            {stateNames.map((stateName, ind) => {
                return <option key={ind}>{stateName}</option>
            })}
        </select>

        <h3>State Names in Datalist</h3>
        <input list="stateNames" name="" id=""></input>
        <datalist id="stateNames">
            {stateNames.map((stateName, ind) => {
                return <option key={ind}>{stateName}</option>
            })}
        </datalist>
    </>
}
