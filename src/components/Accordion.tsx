import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from '@/constants/index'

const AccordionC = () => <section className="py-20 bg-gray-100">

    <div className="container px-4 mx-auto">
        <h1 className="text-center font-bold md:text-5xl text-xl text-TDarkBlue mb-8">Frequently Asked Questions</h1>

        <div className="w-[70%] mx-auto">{
            faqs.length > 0 && faqs.map((v, i) => <Accordion key={i} type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>{v.question}</AccordionTrigger>
                    <AccordionContent>
                        {v.answer}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>)
        }</div>
    </div>
</section>

export default AccordionC