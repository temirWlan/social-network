import { useState } from 'react';
import { 
  HomeOutlined, 
  UsergroupAddOutlined, 
  MessageOutlined, 
  BellOutlined, 
  UserOutlined 
} from '@ant-design/icons';
import { NavbarList, NavbarLink } from './styles';


const Navbar: React.FC = () => {
  const [tabs, setTabs] = useState([
    {
      id: Math.random(),
      icon: <HomeOutlined />,
      path: '/'
    },
    {
      id: Math.random(),
      icon: <UsergroupAddOutlined />,
      path: 'friends'
    },
    {
      id: Math.random(),
      icon: <MessageOutlined />,
      path: 'messages'
    },
    {
      id: Math.random(),
      icon: <BellOutlined />,
      path: 'notifications'
    },
    {
      id: Math.random(),
      icon: <UserOutlined />,
      path: 'settings'
    }
  ]);

  const links = tabs.map(({ id, icon, path }) => {
    return (
      <li key={id} >
        <NavbarLink to={path} activeStyle={{ color: '#000' }} >
          {icon}
        </NavbarLink>
      </li>)
  });

  return (
    <NavbarList>
      {links}
    </NavbarList>
  )
}

/*
  - links to other pages
*/

export default Navbar;