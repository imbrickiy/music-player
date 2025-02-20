import { Tabs } from "expo-router"

const TabsNavigation = () => {
    return <Tabs>
        <Tabs.Screen name='wishlist'/>
        <Tabs.Screen name='library'/>
        <Tabs.Screen name='(songs)'/>
        <Tabs.Screen name='artists'/>
    </Tabs>
}

export default TabsNavigation