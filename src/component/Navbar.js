import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

    const navigate = useNavigate();

    const goToLoginPage = () => {
        navigate('/login');
    };

    const logout = () => {
        alert('로그아웃됨.');
        setAuthenticate(false);
    };

    const goToHome = () => {
        navigate('/');
    };

    const search = (event) => {
        if (event.key === 'Enter') {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    };

    // 메뉴 바깥을 클릭하면 사이드바를 닫음
    const handleClickOutside = (event) => {
        if (isOpen && !event.target.closest('.menu-list') && !event.target.closest('.menu-icon')) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div expand="lg">
            <div className='login-menu-icon-area'>
                <div className="menu-icon" onClick={toggleMenu}>
                    &#9776; {/* 햄버거 아이콘 */}
                </div>
                <div className='login-button' onClick={authenticate ? logout : goToLoginPage}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>{authenticate ? '로그아웃' : '로그인'}</div>
                </div>
            </div>

            <div className='nav-section' onClick={goToHome}>
                <img
                    width={100}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu33MvMQxzeLQWuQTeJbGoEUq_bsuAH1HMag&s"
                    alt=""
                />
            </div>

            <div className='menu-area'>
                <ul className={`menu-list ${isOpen ? 'active' : ''}`}>
                    <li>
                        <button className="close-btn" onClick={toggleMenu}>
                            Close &times;
                        </button>
                    </li>
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
                <div className='search-bar'>
                    <FontAwesomeIcon icon={faSearch} /> <input type="text" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
