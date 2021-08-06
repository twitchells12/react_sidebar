import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import AssessmentIcon from '@material-ui/icons/Assessment';

export const SidebarData = [
{
    title: "Home",
    icon: <HomeIcon/>,
    link:'/home'
},
{
    title: "Mailbox",
    icon: <MailIcon/>,
    link:'/mail'
},
{
    title: "Dashboard",
    icon: <DashboardIcon/>,
    link:'/dashboard'
},
{
    title: "Analytics",
    icon: <AssessmentIcon/>,
    link:'/analytics'
},
{
    title: "Friends",
    icon: <GroupIcon/>,
    link:'/friends'
},
{
    title: "Images",
    icon: <PermMediaIcon/>,
    link:'/images'
},

]

