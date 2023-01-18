
export const useSidebar = () => {
    const sidebarDisplay = () => {
        let sidebar = document.getElementsByClassName('sidebar')
        sidebar[0].style['margin-left'] = '0px'
        let burgerArea = document.getElementsByClassName('burger__area')
        burgerArea[0].style.display = 'block'
    }
    const sidebarHide = () => {
        let sidebar = document.getElementsByClassName('sidebar')
        sidebar[0].style['margin-left'] = ''
        let burgerArea = document.getElementsByClassName('burger__area')
        burgerArea[0].style.display = 'none'
    }
    return [sidebarDisplay, sidebarHide]
}