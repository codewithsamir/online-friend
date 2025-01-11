import React from 'react'
import { useParams,useLocation } from 'react-router-dom'
import {ScenarioModel, ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'



const Chat = () => {
    const {chatid} = useParams()
    // const url = useLocation()
    const url = window.location.href
    console.log(url)

    const mychat = async (element)=>{
        const appId = 1210984795;
        const serversecret = "deccb62f634ac7fa1ac5b43d24df66bf";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serversecret,chatid,Date.now().toString(),chatid)

        const zc = ZegoUIKitPrebuilt.create(kitToken)
    

        zc.joinRoom({
            container:element,
            videoResolutionList: [
                ZegoUIKitPrebuilt.VideoResolution_360P,
                ZegoUIKitPrebuilt.VideoResolution_180P,
                ZegoUIKitPrebuilt.VideoResolution_480P,
                ZegoUIKitPrebuilt.VideoResolution_720P,
              ],
           videoResolutionDefault: ZegoUIKitPrebuilt.VideoResolution_360P,
           screenSharingConfig: {
            resolution: ZegoUIKitPrebuilt.ScreenSharingResolution_Custom,
            width: 1280, 
            height: 720,
            frameRate: 10,
            maxBitRate: 1130, // Unit is kbps
        }, 
            sharedLinks:[
{name:"Copy Link",
      url:url,
}

            ],
            Scenario:{
                mode:ZegoUIKitPrebuilt.VideoConference,
            },
            showScreenSharingButton:true,
            screenSharingConfig: {
                enableOnMobile: true, // Enable screen sharing on mobile devices
            },

       
            onJoinRoom: () => {
                // Add your custom logic
                alert("successfully join ")
             },
             onLeaveRoom: () => {
               // Add your custom logic
               alert("successfully leave ")
             }
          

        })


    }
  return (
    <div className='chat-app'>
        {/* <h1>{chatid}</h1> */}
        <div ref={mychat} />
    </div>
  )
}

export default Chat