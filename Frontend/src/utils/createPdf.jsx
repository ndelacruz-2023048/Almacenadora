import pdfMake from "pdfmake/build/pdfmake";
import pdffonts from "pdfmake/build/vfs_fonts"
import printJS from "print-js";

const createPdf = async (props,output="print") => {
    return new Promise((resolve,reject)=>{
        try{
            const {
                pageSize={
                    width:266.77,
                    height:841.88
                },
                pageMargins=[
                    5.66,5.66,5.66,5.66
                ],
                info={

                },
                styles={

                },
                content={

                }
                
            }=props;
            const docDefinition={
                pageSize,// Tamaño de la hoja
                pageMargins,// Margenes de la hoja
                info,// Metada del pdf
                styles,// Estilos del pdf
                content// Contenido del pdf
            }

            if(output==="b64"){
                const pdfMakeCreatePDF = pdfMake.createPdf(docDefinition)
                pdfMakeCreatePDF.getBase64((data)=>{
                    resolve({
                        success:true,
                        content:data,
                        message:"Archivo generado correctamente"
                    })
                })
                return
            }else if(output==="print"){
                //Enviar a impresion directa
                const pdfMakeCreatePDF = pdfMake.createPdf(docDefinition)
                pdfMakeCreatePDF.getBase64((data)=>{
                    printJS({
                        printable:data,
                        type:"pdf",
                        base64:true
                    })
                    resolve({
                        success:true,
                        content:null,
                        message:"Documento enviado a impresion"
                    })
                })
                return
            }

            reject({
                success:false,
                content:null,
                message:"Debes enviar tipo de salida"
            })
        }catch(error){
            reject({
                success:false,
                content:null,
                message:error?.message ?? 'No se pudo generar el proceso'
            })
        }
    })
}

export default createPdf;