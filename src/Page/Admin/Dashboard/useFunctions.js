import React, { useEffect, useState } from 'react'
import data from './data'
import axios from 'axios'

export default function useFunctions() {

    const [APITYPE, setAPITYPE] = useState([])
    const [APIUsers, setAPIUsers] = useState([])
    const [APIITEMS, setAPIITEMS] = useState([])

    useEffect(() => {
        axios.get(data.Mainurl + data.get).then((res) => {
            setAPITYPE(res.data)
        })

        axios.get(data.Mainurl + data.GETUsers).then((res) => {
            setAPIUsers(res.data)
        })

        axios.get(data.Mainurl + data.GETITEMS).then((res) => {
            setAPIITEMS(res.data)
        })

    }, [])

    return {
        APITYPE,
        APIUsers,
        APIITEMS
    }
}
