import { Layout, Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/sidebarItemGenarator';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';
import { useAppSelector } from '../../redux/hook';
import { useCurrentUser } from '../../redux/features/auth/authSlice';
const {Sider}= Layout;


const userRole = {
    SUPERADMIN :"superAdmin",
    ADMIN :"admin",
    FACULTY: 'faculty',
    STUDENT:"student",
}

const Sidebar = () => {
  const user = useAppSelector(useCurrentUser);

  
    let sidebarItems;
    switch(user?.role){
        case userRole.SUPERADMIN:
        sidebarItems= sidebarItemsGenerator(adminPaths,userRole.ADMIN);
        break;
        case userRole.ADMIN:
        sidebarItems= sidebarItemsGenerator(adminPaths,userRole.ADMIN);
        break;
        case userRole.FACULTY:
            sidebarItems= sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT)
            break;
        default:
            break;
    }
    return (
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div style={{color:'white',textAlign:'center',height:'4rem', 
          display:'flex' , 
          justifyContent:'center',
            alignItems:'center'}}>
            <h1 >PH Uni</h1>
          </div>
          <Menu theme="dark" 
          mode="inline"
           defaultSelectedKeys={['4']}
           items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;