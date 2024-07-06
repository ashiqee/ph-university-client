import React, { createElement } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps, theme } from 'antd';
import { Outlet,NavLink } from 'react-router-dom';
import { adminPaths, adminSidebarItems } from '../../routes/admin.routes';
import { sidebarItemsGenerator } from '../../utils/sidebarItemGenarator';
import Sidebar from './Sidebar';


const { Header, Content, Footer } = Layout;

// const items:MenuProps['items'] = [
//     {
//         key:'Dashboard',
//         label: <NavLink to='/admin/dashboard'>Dashboard</NavLink>,
//     },
//       {
//         key:'User Management',
//         label:'User Management',
//         children:[
//             {
//                 key:'create admin',
//                 label:<NavLink to='/admin/create-admin'>create admin</NavLink>
//             },
//             {
//                 key:'create faculty',
//                 label:<NavLink to='/admin/create-faculty'>create faculty</NavLink>
//             },
//             {
//                 key:'create student',
//                 label:<NavLink to='/admin/create-student'>create student</NavLink>
//             },
           
//         ]
//     },
// ]


const MainLayout = () => {
    return (
        <Layout style={{height:'100vh'}}>
        <Sidebar/>
        <Layout>
          <Header style={{ padding: 0,  }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                
              }}
            >
             <Outlet/>
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    );
};

export default MainLayout;