import { useCallback, useEffect, useState } from 'react';
import { useSocket } from '../context/SocketProvider';
import peer from '../service/peer';

const Room = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();

  const handleUserJoined = useCallback(({ email, id }) => {
    setRemoteSocketId(id);
    // console.log("User Joined", email, id);
  }, []);

  const handleUserCall = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true, 
      });
      const offer = await peer.getOffer();
      socket.emit("user:call" , {to: remoteSocketId , offer})
      setMyStream(stream);
    } catch (err) {
      console.error('Failed to get media stream:', err);
    }
  }, []);

  const handleIncomingCall = useCallback(({from , offer})=>{
    console.log("incoming call" , from , offer);
  },[])

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incoming:call" , handleIncomingCall) 
    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incoming:call", handleIncomingCall);
    };
  }, [socket, handleUserJoined,handleIncomingCall]);



  return (
    <div> Room
      <h4>{remoteSocketId ? "Connected" : "No user connected"}</h4>
      {remoteSocketId && <button onClick={handleUserCall}>Call</button>}

      {myStream && (
        <video
          ref={(video) => {
            if (video && !video.srcObject) {
              video.srcObject = myStream;
            }
          }}
          autoPlay
          muted
          height="300"
          width="300"
        />
      )}
    </div>
  );
};

export default Room;
