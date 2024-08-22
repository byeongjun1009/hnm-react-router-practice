import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ authenticate, setAuthenticate }) => {

    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']

    const navigate = useNavigate();

    const goToLoginPage = () => {
        navigate('/Login')
    }

    const logout = () => {
        alert("로그아웃됨.")
        setAuthenticate(false)
    }

    const goToHome = () => {
        navigate('/')
    }

    return (
        <div>
            <div>
                <div className='login-button' onClick={ authenticate ? logout : goToLoginPage }>
                    <FontAwesomeIcon icon={faUser} />
                    <div>{ authenticate ? "로그아웃" : "로그인" }</div>
                </div>
            </div>


            <div className='nav-section' onClick={ goToHome }>
                <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu33MvMQxzeLQWuQTeJbGoEUq_bsuAH1HMag&s" alt="" />
            </div>
            

            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu => (
                        <li>{menu}</li>
                    )))}
                </ul>
                <div className='search-bar'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar