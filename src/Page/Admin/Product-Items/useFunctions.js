import axios from 'axios'
import React, { useEffect, useState } from 'react'
import data from './data'

export default function useFunctions() {

    const [API, setAPI] = useState([])
    useEffect(() => {
        axios.get(data.Mainurl + data.GET).then((res) => {
            setAPI(res.data)
        })
    }, [])

    function Delete(e) {
        alert(e._id)
    }

    return {
        API,
        Delete
    }
}
