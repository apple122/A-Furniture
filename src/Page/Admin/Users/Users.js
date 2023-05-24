import React, { createContext, useState } from 'react'
import Table_Users from './Table.Users'
import Navbar_Admin from '../../../Component/Navbar/Navbar.Admin'
import useFunctions from './useFunctions'

export const Context_Users = createContext(null)

export default function Users() {

    let {
        open, 
        handleOpen, 
        handleClose,

        Submit,
        API
    } = useFunctions()

    return (
        <Context_Users.Provider value={{ API, Submit, open, handleOpen, handleClose }}>
            <Navbar_Admin />
            <Table_Users />
        </Context_Users.Provider>
    )
}
