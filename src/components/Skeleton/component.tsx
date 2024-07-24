type Shape = "icon" | "image" | "title" | "text" | "user_post" | "image_post"
type Size = "small" | "medium" | "large";
type Style = "pulse" | "shimmer"

export default function Skeleton({shape, size, style}: {shape: Shape, size: Size, style: Style}) {

    //common style for all elements
    const BASE_STYLE = 'bg-bark-light border-bark shadow'

    const ANIMATION_STYLE = {
        pulse: 'animate-pulse',
        shimmer: 'skeleton-shimmer'
    }

    const SKELETON_SHAPES = {
        icon: 'rounded-full',
        image: 'rounded',
        title: 'rounded',
        text: 'rounded'
    }

    const ICON_SIZES = {
        small: 'w-[1.5rem] h-[1.5rem]',
        medium: 'w-[2.5rem] h-[2.5rem]',
        large: 'w-[3.5rem] h-[3.5rem]'
    }
    
    const IMAGE_SIZES = {
        small: 'w-[6rem] h-[6rem]',
        medium: 'w-[9rem] h-[9rem]',
        large: 'w-[12rem] h-[12rem]'
    }
    
    const TITLE_SIZES = {
        small: 'w-[4rem] h-[1rem]',
        medium: 'w-[6rem] h-[1.25rem]',
        large: 'w-[8rem] h-[1.5rem]'
    }
    
    const TEXT_SIZES = {
        small: 'w-[6rem] h-[1rem]',
        medium: 'w-[9rem] h-[1.25rem]',
        large: 'w-[12rem] h-[1.5rem]'
    }

    function getSize(){
        switch (shape) {
            case "icon":
                return ICON_SIZES[size];
            case "image":
                return IMAGE_SIZES[size];
            case "title":
                return TITLE_SIZES[size];
            case "text":
                return TEXT_SIZES[size];
            //add default maybe 
        }
    }

    if (shape === "user_post") {
        return(
            <div className="flex flex-col shadow border-bark bg-tan py-4 px-6 rounded"> 
                <div className="flex flex-row mb-2" >
                    <div className="mr-2"> 
                        <Skeleton shape="icon" size={size} style={style}/> 
                    </div>
                    <div className="flex flex-col justify-center">
                        <Skeleton shape="title" size={size} style={style}/> 
                    </div>
                </div>
                <div className='mb-2'>
                    <Skeleton shape="image" size={size} style={style}/> 
                </div> 
                <div className='mb-2'>
                    <Skeleton shape="text" size={size} style={style}/> 
                </div> 
            </div>

        )
    }

    if (shape === "image_post") {
        return(
            <div className="flex flex-col shadow border-bark bg-tan p-6 rounded"> 
                <div className='mb-2'>
                    <Skeleton shape="image" size={size} style={style}/> 
                </div>
                <div className='mb-2'>
                    <Skeleton shape="title" size={size} style={style}/> 
                </div>
                <div className='mb-2'>
                    <Skeleton shape="text" size={size} style={style}/> 
                </div>
                <div className='mb-2'>
                    <Skeleton shape="text" size={size} style={style}/> 
                </div>

            </div>

        )
    }

return(
    <div className={`${BASE_STYLE} ${getSize()} ${SKELETON_SHAPES[shape]} ${ANIMATION_STYLE[style]}`}> </div> 
)
}