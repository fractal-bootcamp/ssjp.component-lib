import {useState, useRef, useEffect, ReactNode} from "react";

//content
//customizable positions
//triggers on button hover
//delays

interface TooltipProps {
  children: ReactNode;
  content: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

function Tooltip({children, content, position}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const wrapperRef = useRef<HTMLDivElement | null> (null)

  useEffect(() => {

    const triggerElement = wrapperRef.current
  
    const showTooltip = () => {
      setTimeout(()=> setIsVisible(true), 200)
    };

    const hideTooltip = () => {
      setTimeout(()=> setIsVisible(false), 200) 
    };
  
    if (triggerElement) {
      // hover start
      triggerElement.addEventListener('mouseenter', showTooltip);
      // hover end
      triggerElement.addEventListener('mouseleave', hideTooltip);

      //focus events
      triggerElement.addEventListener('focus', showTooltip);
      triggerElement.addEventListener('blur', hideTooltip);
    }
    return () => {
      if (triggerElement) {
        //hover
        triggerElement.removeEventListener('mouseenter', showTooltip);
        triggerElement.removeEventListener('mouseleave', hideTooltip);

        //focus 
        triggerElement.removeEventListener('focus', showTooltip);
        triggerElement.removeEventListener('blur', hideTooltip);
      }
    };
  }, [])


  return(
    <div ref={wrapperRef}> 
      {children}
      {isVisible && (
      <div>{content}</div> )}
    </div> 
  )
};


export default Tooltip;
