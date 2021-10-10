import tw, { css } from 'twin.macro';

const Card = () => {
    
    return(
    <div tw="flex flex-col justify-center items-center w-full h-full"> 
        <div tw="flex w-96 h-96 bg-main-color shadow-xl rounded-xl mb-48 text-brand-color z-10">
            <div tw="mt-4 ml-4">
                Class Developer
            </div>
        </div>
    </div>
    )
}

export default Card;