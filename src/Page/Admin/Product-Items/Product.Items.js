import React, { createContext, useState } from 'react'
import Table_Items from './Table.Items'
import Navbar_Admin from '../../../Component/Navbar/Navbar.Admin'
import useFunctions from './useFunctions'

export const Context_Items = createContext(null)

export default function Product_Items() {

    let {
        API,
        APITYPE,
        Delete,

        Submit, 
        open, 
        handleOpen, 
        handleClose,
        setIMG
    } = useFunctions()

    return (
        <Context_Items.Provider value={{ API, Delete, Submit, open, handleOpen, handleClose, APITYPE, setIMG }}>
            <Navbar_Admin />
            <Table_Items />
        </Context_Items.Provider>
    )
}
