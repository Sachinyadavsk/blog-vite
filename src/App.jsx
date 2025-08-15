import { Routes, Route, Link } from 'react-router-dom'
import Homes from './Home/Homes'
import About from './componets/About'
import NotFound from './componets/NotFound'
import Navbar from './componets/Navbar'
import Reactjs from './course/Reactjs'
import ReactNative from './course/ReactNative'
import Contact from './componets/Contact'


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homes />} />
                <Route path="/about" element={<About />} />
                <Route path="/react-js" element={<Reactjs />} />
                <Route path="/react-native" element={<ReactNative />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}