import React, { useEffect, useState } from 'react'
import data from './data'
import axios from 'axios'

export default function useFunctions() {

    const [APITYPE, setAPITYPE] = useState([])
    useEffect(() => {
        axios.get(data.Mainurl + data.get).then((res) => {
            setAPITYPE(res.data)
        })
    }, [])

    return {
        APITYPE
    }
}
