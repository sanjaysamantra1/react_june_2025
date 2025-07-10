import axios from 'axios';
import React, { useEffect } from 'react'

export default function HttpDemo5() {
    async function fetchData() {
        try {
            const usernames = ['defunkt', 'evanphx', 'sanjaysamantra1'];

            let promiseArr = usernames.map(userName => {
                return axios.get(`https://api.github.com/users/${userName}`);
            })
            const [response1, response2, response3] = await axios.all(promiseArr);
            console.log(response1, response2, response3);
        } catch (err) {
            console.log('Something went wrong...', err)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>Fetch data from Multiple APIs using axios.all()</div>
    )
}
