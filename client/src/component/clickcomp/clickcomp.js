import { CommonComp } from "../HOC/Commoncomp";

const Clickcomp =({Updatecount,count})=>{
    return(
        <>
        <div>{count}</div>
        <button onClick={Updatecount}>Add</button>
        </>
    )
}

export default CommonComp(Clickcomp);