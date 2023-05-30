import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import Swal from 'sweetalert2'
import data from './data'
import swal from 'sweetalert'

export default function useFunctions() {

    const [API, setAPI] = useState([])
    const [Reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        axios.get(data.Mainurl + data.GET).then((res) => {
            setAPI(res.data.reverse())
        })
    }, [Reducer])

    const [Preview, setPreview] = useState('')

    function Submit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('Title', e.target[0].value)
        formData.append('Image', Preview)

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
            setPreview('')
            setOpen(false);
        })
    }
    function FileIMG(e) {
        setPreview(e)
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setPreview('')
    }

    function Del(e) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(data.Mainurl + data.DEL + e).then((res) => {
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                        setReducer()
                    })
                }
            });
    }

    return {
        API,
        Submit,
        open,
        handleOpen,
        handleClose,

        Preview,
        FileIMG,

        Del
    }
}
