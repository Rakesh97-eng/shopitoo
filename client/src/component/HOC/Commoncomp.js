import { useState } from "react"

export const CommonComp = (Originalcomp)=>{
    const Hoccomponent = ()=>{

        const[count,setCount] = useState(0);

        const Updatecount = ()=>{
            setCount(count+1)
        }

        return <Originalcomp count={count} Updatecount={Updatecount}></Originalcomp>
    }


    return Hoccomponent
}