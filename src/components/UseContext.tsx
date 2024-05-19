import { createContext, useEffect, useState } from "react";

export const sampleContext = createContext<any>('forall')

// export const Context = ({children}:any) => {

//     const [name,setName] = useState<string>('hello')

//     return (
//         <sampleContext.Provider value={{name,setName}}>
//             {children}
//         </sampleContext.Provider>
//     )
// }