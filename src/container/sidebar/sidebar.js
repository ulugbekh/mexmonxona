import "./main.scss"
import SidebarLinks from "../../components/sidebar";
import { useState } from "react";
import Menu from '../../photo/Line/menu.svg'
import Cal from '../../photo/cal.svg'
import Admin from '../../photo/20) Card/Avatar.png'
import Accardion from "../../components/settings/accardion";

import {
    Dashboard,
    Shaxmatka,
    There,
    Four,
    Roomboard,
    Bar,
    Finance,
    Chat,
    Statistik,
    Setting
} from '../../assets/sidebar-icon/index.js'

import { Link } from "react-router-dom";

const Sidebar = () => {

    const [activPage, setActivPage ] = useState('')
    return ( 
        <div className="sidebar">
            <div className="sidebar-peson-card">
               <div className="person-card-top">
               <div className="person-card-left">
                    <img src={Menu} alt="" className="logo" />
                    <Link to="/" onClick={() => setActivPage('/')}><h5 className={`hotelier1 ${activPage ? 'active' : ''}`}>Hotelier</h5></Link>
                </div>
                <div className="person-card-right">
                    <img src={Cal} alt="" className="path" />
                </div>
                </div>
                <div className="person-card-bottom">
                    <div className="person-card-bottom-left">
                        <img src={Admin} alt="" className="personal-img" />
                        <div className="personal-info">
                            <h6 className="personal-name">Анатолий Токов</h6>
                            <p className="personal-works">Администратор</p>
                        </div>
                    </div>
                    <div className="person-card-bottom-right">
                        <img src="" alt="" className="arrow-to-down" />
                    </div>
                </div>
               
               <div className="sidebar-inner">
                    <Link className="link" to='/Dashboard'>
                        <SidebarLinks
                            title="Dashboard"
                            active={activPage == '/Dashboard'}
                            onClick={() => setActivPage('/Dashboard')}
                            icon={<Dashboard/>}
                        />
                    </Link>

                    <Link className="link" to='/Шахматка'>
                        <SidebarLinks
                            title="Шахматка"
                            active={activPage == 'Шахматка'}
                            onClick={() => setActivPage('Шахматка')}
                            icon={<Shaxmatka/>}
                        />
                    </Link>

                    <Link className="link" to='/Служба приёма'>
                        <SidebarLinks
                            title="Служба приёма"
                            active={activPage == 'Служба приёма'}
                            onClick={() => setActivPage('Служба приёма')}
                            icon={<There/>}
                        />
                    </Link>

                    <Link className="link" to='/Профили гостей'>
                        <SidebarLinks
                            title="Профили гостей"
                            active={activPage == 'Профили гостей'}
                            onClick={() => setActivPage('Профили гостей')}
                            icon={<Four/>}
                        />
                    </Link>

                    <Link className="link" to='/Roomboard'>
                        <SidebarLinks
                            title="Roomboard"
                            active={activPage == 'Roomboard'}
                            onClick={() => setActivPage('Roomboard')}
                            icon={<Roomboard/>}
                        />
                    </Link>

                    <Link className="link" to='/Ресторан и Бар'>
                        <SidebarLinks
                            title="Ресторан и Бар"
                            active={activPage == 'Ресторан и Бар'}
                            onClick={() => setActivPage('Ресторан и Бар')}
                            icon={<Bar/>}
                        />
                    </Link>

                    <Link className="link" to='/Финансы'>
                        <SidebarLinks
                            title="Финансы"
                            active={activPage == 'Финансы'}
                            onClick={() => setActivPage('Финансы')}
                            icon={<Finance/>}
                        />
                    </Link>

                    <Link className="link" to='/Статистика и Отчёты'>
                        <SidebarLinks
                            title="Статистика и Отчёты"
                            active={activPage == 'Статистика и Отчёты'}
                            onClick={() => setActivPage('Статистика и Отчёты')}
                            icon={<Statistik/>}
                        />
                    </Link>

                    <Link className="link" to='/Чат'>
                        <SidebarLinks
                            title="Чат"
                            active={activPage == 'Чат'}
                            onClick={() => setActivPage('Чат')}
                            icon={<Chat/>}
                        />
                    </Link>
                    <Accardion
                        active={activPage == 'setting'}
                        onClick={() => setActivPage('setting')}
                        icon={<Setting/>}
                    />
               </div>
            </div>
        </div>
     );
}
 
export default Sidebar;