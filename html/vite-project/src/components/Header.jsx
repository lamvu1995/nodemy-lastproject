import { useSelector } from 'react-redux'
import './Header.css'
import { useState } from 'react'
function Header(props) {
const user = useSelector(stateTong => stateTong.user.value)
    return <>
    <h1>Hello {user?.username}</h1>
    </>
}
export default Header