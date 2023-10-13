import { CommonComp } from "../HOC/Commoncomp";

const Hovercomp =({Updatecount,count})=>{
    return(
        <>
        <div>{count}</div>
        <button onMouseOver={()=>Updatecount()}>Hover</button>
        </>
    )
}

export default CommonComp( Hovercomp);