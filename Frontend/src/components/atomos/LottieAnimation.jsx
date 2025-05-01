import Lottie from "lottie-react";

export const LottieAnimacion = ({ alto, ancho, animacion }) => {
    const estilo = {
        height: `${alto}px`,
        width: `${ancho}px`,
    };
    return (
        <Lottie 
            animationData={animacion} 
            loop={true} 
            autoplay={true} 
            style={estilo} 
        />
    );
};