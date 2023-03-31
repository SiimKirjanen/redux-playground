interface props {
    children: React.ReactNode,
    title: string
};

const Box = ({children, title}: props) => {
    return (
        <div className="box">
            <div className='title'>{title}</div>
            {children}
        </div>
    )
};

export default Box;