import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import React, { Component } from 'react'
import Reservation from './components/reservation/Reservation';
import ReservationHistory from './components/reservation-history/ReservationHistory';
import SpaceAllotment from './components/space-allotment/SpaceAllotment';
import SpaceDistribution from './components/space-distribution/SpaceDistribution';
import ViewReservation from './components/view-reservation/ViewReservation';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBar: false
    };
  }
  setSideBarState = (sideBarState) => this.setState({sideBar: sideBarState});
  render() {
    return (
      <div className='container-fluid ps-0 pe-0'>
      <Router>
      <NavBar setSideBarState ={setSideBarState}/>
      <div className={ this.state.sideBar ? 'sidebaropen': 'sidebarclose'}>
      <Routes className={ this.state.sideBar ? 'sidebaropen': 'sidebarclose'}>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/sat/reservation/new' element={<Reservation/>}/>
        <Route path='/sat/reservation/history' element={<ReservationHistory/>}/>
        <Route path='/sat/space/allotment' element={<SpaceAllotment/>}/>
        <Route path='/sat/space/distribute' element={<SpaceDistribution/>}/>
        <Route path='/sat/reservation/view' element={<ViewReservation/>}/>
        <Route path='/logout' element={<Home/>}/>
      </Routes>
      </div>
      </Router>
      </div>
    );
  }
}

export default App
