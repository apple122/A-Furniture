import React, { createContext, useState } from 'react'
import Table_Items from './Table.Items'
import Navbar_Admin from '../../../Component/Navbar/Navbar.Admin'
import useFunctions from './useFunctions'

export const Context_Items = createContext(null)

export default function Product_Items() {

    let {
        API,
        Delete
    } = useFunctions()

    return (
        <Context_Items.Provider value={{ API, Delete }}>
            <Navbar_Admin />
            <Table_Items />
        </Context_Items.Provider>
    )
}
