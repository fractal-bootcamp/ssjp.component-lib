import {useState, useRef, useEffect, ReactNode} from "react";
import {motion, AnimatePresence} from "framer-motion"

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
  const [shouldRender, setShouldRender] = useState(false)
  const wrapperRef = useRef<HTMLDivElement | null> (null)

  useEffect(() => {

    const triggerElement = wrapperRef.current
  
    const showTooltip = () => {
      setShouldRender(true)
      setTimeout(()=> 
        setIsVisible(true), 300)
    };

    const hideTooltip = () => {
      setIsVisible(false)
      setTimeout(()=> setShouldRender(false), 200) 
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

  //for conditional styling depending on position
  function getPositionClasses(position: 'top' | 'bottom' | 'left' | 'right'): string {
    switch (position) {
      case 'top': return 'bottom-full left-1/2 transform -translate-x-1/2 pb-2 mb-2';
      case 'bottom': return 'top-full left-1/2 transform -translate-x-1/2 pt-2 mt-2';
      case 'left': return 'right-full top-1/2 transform -translate-y-1/2 pr-2 mr-2';
      case 'right': return 'left-full top-1/2 transform -translate-y-1/2 pl-2 ml-2';
    }
  }
  
  function getCaratPositionClasses(position: 'top' | 'bottom' | 'left' | 'right'): string {
    switch (position) {
      case 'top': return '-bottom-1 left-1/2 -translate-x-1/2';
      case 'bottom': return '-top-1 left-1/2 -translate-x-1/2';
      case 'left': return 'top-1/2 -right-1 -translate-y-1/2';
      case 'right': return 'top-1/2 -left-1 -translate-y-1/2';
    }
  }


  return(
    <div className="relative inline-block" ref={wrapperRef}> 
      {children}
    <AnimatePresence>
      {shouldRender && (
        <motion.div 
          className={`absolute z-10 ${getPositionClasses(position)}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .5 }}>
          <div className="relative font-roboto font-semibold bg-bark-light text-sky p-2 min-w-[150px] w-fit max-w-[300px] rounded-md shadow-lg">
            <div className="
                max-h-[200px] overflow-y-auto
               leading-relaxed
              ">
              <div className="break-words whitespace-normal">
                  {content}
              </div>
            </div> 
            <div className={`absolute w-3 h-3 bg-bark-light transform rotate-45 ${getCaratPositionClasses(position)}`}></div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  )
};


export default Tooltip;
