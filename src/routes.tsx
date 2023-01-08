import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/Home'
import Points from './pages/Points'
import Detail from './pages/Detail'
import CreatePoint from './pages/CreatePoint'
import Administrator from './pages/Administrator'
import Manage from './pages/Manage'
import Update from './pages/Update'

const AppStack = createStackNavigator()

const Routes = () => {
    return (
        <AppStack.Navigator
        screenOptions={
            {cardStyle: {backgroundColor: '#F0F0F5'}}}>
            <AppStack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <AppStack.Screen name="Points" component={Points} options={{headerShown:false}}/>
            <AppStack.Screen name="Detail" component={Detail} options={{headerShown:false}}/>
            <AppStack.Screen name="CreatePoint" component={CreatePoint} options={{headerShown:false}}/>
            <AppStack.Screen name="Administrator" component={Administrator} options={{headerShown:false}}/>
            <AppStack.Screen name="Manage" component={Manage} options={{headerShown:false}}/>
            <AppStack.Screen name="Update" component={Update} options={{headerShown:false}}/>
        </AppStack.Navigator>
    )
}

export default Routes