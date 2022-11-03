import React from 'react';
import * as FaIcons from 'react-icons/fa';
export const SideBarData = [{
    "id" : 1,
    "title" : "New Reservation",
    "index" : 1,
    "url" : "sat/reservation/new",
    "icon" : <FaIcons.FaCalendarAlt/>,        
    "roles" : ["EMPLOYEE"]  
  },
  {
    "id" : 2,
    "title" : "Reservation History",
    "index" : 1,
    "url" : "sat/reservation/history",
    "icon" : <FaIcons.FaHistory/>,        
    "roles" : ["EMPLOYEE"]        
  },
  {
    "id" : 3,
    "title" : "Space Allotment",
    "index" : 2,
    "icon" : <FaIcons.FaUserCog/>,
    "url" : "sat/space/allotment",          
    "roles" : ["ADMIN"]
  },
  {
    "id" : 4,
    "title" : "Space Distribution",
    "index" : 4,
    "icon" : <FaIcons.FaUserCog/>,
    "url" : "sat/space/distribute",          
    "roles" : ["MANAGER"]
  },
  {
    "id" : 5,
    "title" : "View Reservation",
    "index" : 3,
    "icon" : <FaIcons.FaSearch/>,
    "url" : "sat/reservation/view",          
    "roles" : ["MANAGER","ADMIN"]
  }         
];