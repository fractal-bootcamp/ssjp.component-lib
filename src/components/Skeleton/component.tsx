type Shape = "icon" | "image" | "title" | "text";
type Size = "small" | "medium" | "large";

export default function Skeleton({shape, size}: {shape: Shape, size: Size}) {

    //common style for all elements
    const BASE_STYLE = 'bg-tan animate-pulse mb-2'

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
        medium: 'w-[6rem] h-[1.5rem]',
        large: 'w-[8rem] h-[2rem]'
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

return(
    <div className={`${BASE_STYLE} ${getSize()} ${SKELETON_SHAPES[shape]}`}> </div> 
)
}