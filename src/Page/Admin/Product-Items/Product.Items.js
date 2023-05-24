import React, { createContext, useState } from 'react'
import Table_Items from './Table.Items'
import Navbar_Admin from '../../../Component/Navbar/Navbar.Admin'

export const Context_Items = createContext(null)

export default function Product_Items() {
    const [ MS, setMS ] = useState('OK')
    return (
        <Context_Items.Provider value={{ MS, setMS }}>
            <Navbar_Admin />
            <Table_Items />
        </Context_Items.Provider>
    )
}
