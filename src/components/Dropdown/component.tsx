import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, X, Check } from 'lucide-react';

interface Option {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface DropdownProps {
    options: Option[];
    multiSelect?: boolean;
    placeholder?: string;
    onChange: (selected: string | string[]) => void; //onchange 
    customOptionRenderer?: (option: Option) => React.ReactNode;
    disabled?: boolean
}
const DropDown: React.FC<DropdownProps> = ({
    options,
    multiSelect = false,
    placeholder = 'Select...',
    onChange,
    customOptionRenderer,
    disabled = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string[]>([]);
    const [searchTerm, setSearchterm] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [dropdownHeight, setDropdownHeight] = useState(0);

    useEffect(() => { //
        if (isOpen && dropdownRef.current) {
            setDropdownHeight(dropdownRef.current.scrollHeight);
        } else {
            setDropdownHeight(0);
        }
    }, [isOpen])

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelect = (value: string) => {
        if (multiSelect) { //toggle the selected state of the option 
            const updatedSelected = selected.includes(value)
                ? selected.filter(item => item !== value)//  assign everything but that equal to the option value
                : [...selected, value]; //take the pervious values and add option value to the end
            setSelected(updatedSelected)
            onChange(updatedSelected)
        } else {
            setSelected([value]);
            onChange(value); // hoist value up to parent component
            setIsOpen(false);
        }
    };

    const handleClear = () => {
        setSelected([]); // clear the state first 
        onChange(multiSelect ? [] : ''); // pass an array if multi-select option is on but pass a string if not 
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown' || e.key === 'Arrow up') {
            e.preventDefault(); //preveny default function which may scrolling the page 
            const currentIndex = filteredOptions.findIndex(options => options.value === selected[0])
            const nextIndex = e.key === 'ArrowDown'
                ? (currentIndex + 1) % filteredOptions.length // modulo operation only effects the value if at the end of the list 
                : (currentIndex - 1 + filteredOptions.length) % filteredOptions.length;
        } else if (e.key === 'Enter') {
            setIsOpen(!isOpen) //close the dropdown upon selection 
        }
    }
    return (
        <div className='relative w-full max-w-xs' onKeyDown={handleKeyDown}>
            <div
                className={`flex items-center justify-between w-full px-4 py-2 text-left rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50'
                    }`}
                onClick={() => { !disabled && setIsOpen(!isOpen) }}
            >
                <span className=' block truncate'>
                    {selected.length > 0
                        ? selected.map(s => options.find(o => o.value === s)?.label).join(',')
                        : <span className='text-gray-400'>{placeholder}</span>}
                </span> {/* truncate is a tailwind class ensures that if the text is too long, it will be truncated with and ellipses(...) instead of wrapping */}
                {/* additionally the optional chaining operator (?.) accesses the label property of the found option, even if undefined. */}
                <div className='flex items-center'>
                    {selected.length > 0 && !disabled && (
                        <button
                            type='button'
                            className='p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500'
                            onClick={(e) => {
                                // e.stopPropagation prevents click event from bubbling up to parent elements, preventing dropdown toggle
                                e.stopPropagation();
                                handleClear();
                            }}
                        >
                            <X size={16} /> {/* This is a Lucide React component usage */}
                        </button>
                    )}
                    <ChevronDown
                        size={20}
                        className={`ml-2 text-green-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            </div>

            {isOpen && (
                <div
                    ref={dropdownRef}
                    className='absolute z-10'
                    style={{ maxHeight: `${dropdownHeight}px` }}
                >
                    <div>
                        <input
                            type='text'
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchterm(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                    <ul className='py-1 overflow-auto text-base leading-6 max-h-60'>
                        {filteredOptions.map((option) => (
                            <li
                                key={option.value}
                                className=''
                                onClick={() => !option.disabled && handleSelect(option.value)}
                            >
                                {customOptionRenderer ? (
                                    customOptionRenderer(option)
                                ) : (
                                    <span className='block trunctate'>option.label</span>
                                )}
                                {selected.includes(option.value) && (
                                    <span className='absolute inset-y-0 right-0 flex item-center pr-4'>
                                        <svg className='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>

                </div>
            )}
        </div >
    )
};

export default DropDown



