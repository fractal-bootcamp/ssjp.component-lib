import { useState } from "react";

export type AccordionDataItem = {
	title: string;
	content: string | AccordionDataItem[];
};

export type AccordianDataItems = AccordionDataItem[];

const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="border border-leaf-light rounded-md overflow-hidden w-full">
			<button
				className="w-full text-left px-4 py-2 bg-moss-dark"
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className="text-tan-dark">{title}</p>
			</button>
			{isOpen && (
				<div className="px-4 py-2 text-left">
					{children}
				</div>
			)}
		</div>
	);
};


export default function Accordion({ data }: { data: AccordianDataItems }) {

	return (
		<div className="overflow-hidden w-full">
			{data.map((item, index) => (
				<div className="bg-bark-light rounded-md">
				<AccordionItem key={index} title={item.title}>
					{Array.isArray(item.content) ? (
						<Accordion data={item.content} />
					) : (
						<p className="text-leaf-light">{item.content}</p>
					)}
				</AccordionItem>
				</div>
			))}
		</div>
	);
}