import { useState } from "react";
import { Minus, ChevronDown } from 'lucide-react';

export type AccordionDataItem = {
	title: string;
	content: string | AccordionDataItem[];
};

export type AccordianDataItems = AccordionDataItem[];

export interface AccordionItemProps {
	title: string;
	children: React.ReactNode;
	expanded?: boolean;
	headerStyle?: {};
}

const AccordionItem = ({ title, children, expanded, headerStyle }: AccordionItemProps) => {
	const [isOpen, setIsOpen] = useState(expanded);
	const icon = isOpen ? <ChevronDown /> : <Minus />;

	return (
		<div className="border border-sky-light rounded-md overflow-hidden w-full">
			<button
				className="w-full text-left px-4 py-2 bg-sky-light"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				style={headerStyle}
			>
				<div className="flex flex-row justify-between items-center">
					<p className="text-bark-dark">{title}</p>
					<span className="text-bark-dark">{icon}</span>
				</div>
			</button>
			{isOpen && (
				<div className="px-4 py-2 text-left">
					{children}
				</div>
			)}
		</div>
	);
};

export interface AccordionProps {
	data: AccordianDataItems;
	expanded?: boolean;
	listStyle?: {
		header?: {};
		item?: {};
		text?: {};
	}
}

export default function Accordion({ data, expanded, listStyle }: AccordionProps) {

	return (
		<div className="overflow-hidden w-full">
			{data.map((item, index) => (
				<div key={index} className="bg-bark-light rounded-md flex flex-row" style={listStyle?.item}>
					<AccordionItem title={item.title} expanded={expanded} headerStyle={listStyle?.header}>
						{Array.isArray(item.content) ? (
							<Accordion data={item.content} expanded={expanded} listStyle={listStyle} />
						) : (
							<p className="text-cloud" style={listStyle?.text}>{item.content}</p>
						)}
					</AccordionItem>
				</div>
			))}
		</div>
	);
}