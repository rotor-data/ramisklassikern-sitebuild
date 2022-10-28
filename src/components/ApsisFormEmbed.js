import React, {useState} from "react";




const ApsisFormEmbed = ({url}) => {

   const [modalActive, setModalActive] = useState(false);
 return (


 
       <iframe src={url} width="100%" height="680" 	style={{border:"0"}}></iframe>
       

  
 )
}

export default ApsisFormEmbed
