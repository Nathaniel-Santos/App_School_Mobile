import React from 'react'
import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import 'react-native-gesture-handler';

import Home from './src/pages/home'
import LandingPage from './src/pages/LandingPage'
import Escola from './src/pages/escola';
import Login from './src/pages/login';
import NoticiasPorAluno from './src/pages/NoticiaPorAluno';

enableScreens()

const Stack = createSharedElementStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='LandingPage' component={LandingPage} options={{ headerShown: false }} />
                <Stack.Screen name='Escola' component={Escola} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='NoticiaPorAluno' component={NoticiasPorAluno}
                    sharedElements={(route: any) => {
                        const { item } = route.params;
                        return [`item.${item.id}.photo`, item.imageUrl];
                    }}
                    // options={{ headerShown: false }}  
                    options={() => ({
                        headerShown: false,
                        gestureEnabled: false,
                        headerBackTitleVisible: false,
                        transitionSpec: {
                            open: { animation: 'timing', config: { duration: 800 } },
                            close: { animation: 'timing', config: { duration: 800 } },
                        },
                        cardStyleInterpolator: ({ current: { progress } }: any) => {
                            return {
                                cardStyle: {
                                    opacity: progress
                                }
                            }
                        }
                    })}
                />
                {/* <Stack.Group  screenOptions={{presentation: 'modal'}} >
                    <Stack.Screen
                        name='NoticiaPorAluno'
                        component={NoticiasPorAluno}
                        options={{ headerShown: false }} />
                </Stack.Group> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

