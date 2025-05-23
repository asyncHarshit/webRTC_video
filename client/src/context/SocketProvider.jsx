import React , {createContext,useMemo} from "react";
import io from "socket.io-client";
const SocketContext = createContext(null);
export const SocketProvider = (props)=>{
    const socket = useMemo(() => io('http://localhost:8000'), []);
    return(
        <SocketContext.Provider value={socket}>
            {props.Children}

        </SocketContext.Provider>
    )
}