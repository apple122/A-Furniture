import React, { createContext } from 'react'
import Navbar_Admin from '../../../Component/Navbar/Navbar.Admin'
import Table_slide from './Table.slide'
import useFunctions from './useFunctions'

export const Context_Slide = createContext(null)

export default function Slide() {

    let {
        API,
        Submit,
        open,
        handleOpen,
        handleClose,
        Preview, 
        FileIMG,

        Del,
    } = useFunctions()

    return (
        <Context_Slide.Provider value={{ API, Del, Submit, open, handleOpen, handleClose, Preview, FileIMG }}>
            <Navbar_Admin />
            <Table_slide />
        </Context_Slide.Provider>
    )
}
