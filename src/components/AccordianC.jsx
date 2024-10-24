import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion"
  
  const AccordianC =()=> {
    return (
        <div>
            
        
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className='font-semibold text-xl'>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger  className='font-semibold text-xl'>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger  className='font-semibold text-xl'>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    )
  }
  export default AccordianC
