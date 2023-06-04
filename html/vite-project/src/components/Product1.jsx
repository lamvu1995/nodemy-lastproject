import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product1() {
    let params = useParams()
    let [sp, setSP] = useState(null)
    useEffect(() => {
        axios.get(`https://backoffice.nodemy.vn/api/tasks/${params.id}`)
        .then(res => {
            setSP(res.data.data)
            console.log(res);
        })
        .catch(err => {
            setSP(null)
        })
    }, [])
    return (
        <>
        {sp ? <h1>san pham: {sp.attributes?.title}</h1> : 'khong co san pham' }
        </>
    )
}