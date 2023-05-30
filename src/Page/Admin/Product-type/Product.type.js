import React, { createContext, useState } from 'react'
import Navbar_Admin from '../../../Component/Navbar/Navbar.Admin'
import Table_Type from './Table.Type'
import useFunctions from './useFunctions'

export const Context_Type = createContext(null)

export default function Product_type() {

    let {
        Submit,
        open, 
        handleOpen, 
        handleClose,
        API,
        Reload,
        Delete,
        status
    } = useFunctions()

    return (
        <Context_Type.Provider value={{ Submit, open, handleOpen, handleClose , API, Reload, Delete, status }}>
            <Navbar_Admin />
            <Table_Type />
        </Context_Type.Provider>
    )
}
