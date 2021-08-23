import React from 'react';
import { IconContext } from 'react-icons';
import { MdDashboard } from 'react-icons/md';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { BsInfoCircle } from 'react-icons/bs';
import { BiCalendar } from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Discover',
    icon: (
      <IconContext.Provider value={{ size: '1.5rem', color: '#72A7CF' }}>
        <MdDashboard />
      </IconContext.Provider>
    ),
    path: '/Discover',
  },
  {
    title: 'Dashboard',
    icon: (
      <IconContext.Provider value={{ size: '1.5rem', color: '#72A7CF' }}>
        <BiCalendar />
      </IconContext.Provider>
    ),
    path: '/Dashboard',
  },
  {
    title: 'Info/About',
    icon: (
      <IconContext.Provider value={{ size: '1.5rem', color: '#72A7CF' }}>
        <BsInfoCircle />
      </IconContext.Provider>
    ),
    path: '/About',
  },
  {
    title: 'Logout',
    icon: (
      <IconContext.Provider value={{ size: '1.5rem', color: '#72A7CF' }}>
        <RiLogoutBoxRFill />
      </IconContext.Provider>
    ),
    path: '#',
  },
];
