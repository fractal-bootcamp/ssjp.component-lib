import {useState, useRef, useEffect} from "react";

//content
//customizable positions
//triggers on button hover
//delays

function Tooltip({children, content, position}: {content: string, position: string}) {
  const [isVisible, setIsVisible] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {

    const triggerElement = wrapperRef.current
  
    const showTooltip = () => {
      setTimeout(()=> setIsVisible(true), 300)
    };

    const hideTooltip = () => {
      setTimeout(()=> setIsVisible(false), 300) 
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
