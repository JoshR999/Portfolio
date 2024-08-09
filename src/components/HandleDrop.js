import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const HandleDrop = function() {
    const [showMenu, setShowMenu] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setShowMenu(false)
    }, [location])

    function toggleMenu() {
        setShowMenu(prev => !prev)
    }

    return [showMenu, toggleMenu]
}
