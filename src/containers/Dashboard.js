import React from 'react'
import { withRouter } from 'react-router-dom'
import { PrivateRoute } from '../utils/PrivateRoute'


import Header from '../components/Header'
import EventPage from '../containers/EventPage'
import AddEventForm from '../components/AddEventForm'
import EventList from '../components/EventList'

const Dashboard = (props) => {
    const {path} = props.match
    return (
        <>
            <Header /><br></br>
            DASHBOARD
            <PrivateRoute exact path={`${path}`} component={EventList} redirectURL='/' />
            <PrivateRoute exact path={`${path}/addEvent`} component={AddEventForm} redirectURL='/' />
            <PrivateRoute path={`${path}/event/:eventID`} component={EventPage} redirectURL='/' />
        </>
    )
}

export default withRouter(Dashboard)
