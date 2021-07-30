import {Accordion} from 'react-bootstrap'
import './main.scss'
import SidebarLinks from '../../sidebar/sidebar-links';
const Accardion = ({active, onClick, icon}) => {
    return (
        <div className="">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                    <div className={`acar-block ${active ? 'active' : ''}`} onClick={onClick}>
                    <span className="icon-span">{icon}</span>
                        <span className="button-span">Настройка</span>
                    </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <SidebarLinks
                            // onClick, icon, title, active
                            title={'Ваш объект'}
                            onClick={onClick}
                            active={active}
                            // icon={icon}
                            // onClick={}
                        />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
            );
}

            export default Accardion;