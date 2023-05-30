import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import data from './data'
import Swal from 'sweetalert2'
import swal from 'sweetalert'

export default function useFunctions() {

    const [API, setAPI] = useState([])
    const [APITYPE, setTYPE] = useState([])
    const [Reducer, setReducer] = useReducer(x => x + 1, 0)

    useEffect(() => {
        axios.get(data.Mainurl + data.GET).then((res) => {
            setAPI(res.data.reverse())
        })

        axios.get(data.Mainurl + data.GETTYPE).then((res) => {
            setTYPE(res.data.reverse())
        })
    }, [Reducer])

    function Delete(e) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(data.Mainurl + data.DEL + e._id).then((res) => {
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                        setReducer()
                    })
                }
            });
    }

    const [IMG, setIMG] = useState('')

    function Submit(e) {
        e.preventDefault()
        console.log(IMG)
        const formData = new FormData()
        formData.append('v1typeId', e.target[1].value)
        formData.append('v2image', IMG)
        formData.append('v2Items', e.target[2].value)
        formData.append('v2size', e.target[5].value)
        formData.append('v2sprice', e.target[3].value)
        formData.append('v2qty', e.target[4].value)

        axios.post(data.Mainurl + data.POST, formData).then((res) => {
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
            setReducer()
            setOpen(false);
        })
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return {
        API,
        Delete,
        APITYPE,

        Submit,
        open,
        handleOpen,
        handleClose,
        setIMG
    }
}
