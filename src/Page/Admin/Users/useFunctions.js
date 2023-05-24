import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import data from './data'

export default function useFunctions() {

    const [API, setAPI] = useState([])
    useEffect(() => {
        axios.get(data.Mainurl + data.GET).then((res) => {
            setAPI(res.data)
        })
    }, [])

    function Submit(e) {
        e.preventDefault()
        if (e.target[0].value !== '') {
            axios.post(data.Mainurl + data.POST, {
                "UserName": e.target[3].value,
                "Password": e.target[4].value,
                "fullname": e.target[0].value,
                "phone": e.target[2].value,
                "email": e.target[1].value
            }).then((res) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ!'
                })
                // setReducer()
                setOpen(false);
            })
        }
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return {
        open,
        handleOpen,
        handleClose,

        Submit,
        API
    }
}
