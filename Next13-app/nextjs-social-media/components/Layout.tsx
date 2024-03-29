interface LayoutProps{
    children:React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({children})=>{
    return(
        <div className="h-screen bg-black">
            <div className="container h-full mx-auto xl:px-30 max-w-fulll">   

            </div>
            {children}
        </div>
    )
}
export default Layout