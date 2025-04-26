import { useState } from "react"

export const useSaveImage =()=>{
    const [dataImage,setDataImage] = useState({})
    const [isLoadingImage,setIsLoadingImage] = useState(false)
    const registerImage = async(file)=>{
        try {
            setIsLoadingImage(true)
            const data = new FormData()
            data.append("file",file)
            data.append("upload_preset","almacenadora_cloudinary")
            data.append("cloud_name","dtmwybty7")
            const response = await fetch("https://api.cloudinary.com/v1_1/dtmwybty7/image/upload",{
                method: "POST",
                body: data
            })
            const responseImage = await response.json()
            setIsLoadingImage(false)
            setDataImage(responseImage)
        } catch (error) {
            console.error(error);
        }
    }
    return{
        dataImage:dataImage ,
        isLoadingImage:isLoadingImage,
        registerImage:registerImage
    }
}