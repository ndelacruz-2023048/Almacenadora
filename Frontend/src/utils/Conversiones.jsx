
export function ConvertirCapitalize(input) {
    return (input.charAt(0).toUpperCase()+input.slice(1).toLowerCase());
  
  }

  export function ConvertirMinusculas(input){
    return input.toLowerCase()
  }
  export function FormatearNumeroDinero(numero,currency,iso){
    if(currency===undefined){
      return;
    }

    const esIso = "es-"+iso
    const numeroconvertido=numero.toLocaleString(esIso,{style:"currency",currency:`${currency}` })
    return numeroconvertido
  }

  export const urlToBase64 = async (imageUrl)=>{
    const response = await fetch(imageUrl)
    const blob = await response.blob()
    const reader = new FileReader()
    return new Promise ((resolve,reject)=>{
      reader.onloadend=()=>{
        resolve(reader.result)
      }

      reader.onerror=reject;
      reader.readAsDataURL(blob)
    })
  }