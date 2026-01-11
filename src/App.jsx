import React from 'react'
import { Login } from './components/Login'
import { Browse } from './components/Browse'
import { Body } from './components/Body'
import appStore from './utils/appStore'
import {Provider} from "react-redux"
export const App = () => {
    return (
        <div>
            <Provider store={appStore}><Body/></Provider>
            
            
        </div>
    )
}
