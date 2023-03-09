const Tabs= ({ tabs, setValue, value })=>{
    return(
        <nav className="tabs">
            <ul>
            {
                tabs.map((item, index)=>{
                    return(
                        <li key={index}>
                            <button className={value===index && 'active'}
                            onClick={()=> setValue(index)}>
                                {item}
                            </button>
                        </li>
                    )
                })
            }
            </ul>
            
        </nav>
    );
};
export default Tabs;