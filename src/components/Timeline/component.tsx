import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';


interface TimelineEvent {
    id: string;
    date: string;
    title: string;
    description: string;
    detailedDescription: string;
    icon?: React.ReactNode;
    image?: string;
}

interface TimelineGroup {
    id: string;
    title: string;
    events: TimelineEvent[];
}

interface TimelineProps {
    data: (TimelineEvent | TimelineGroup)[]
    orientation?: 'vertical' | 'horizontal';
}

const isGroup = (item: TimelineEvent | TimelineGroup): item is TimelineGroup => {
    return 'events' in item;
}

const Timeline: React.FC<TimelineProps> = ({ data, orientation = 'vertical' }) => {
    const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set()) //initializing a new set to track which groups are expanded or collapsed 
    const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

    const toggleGroup = (groupId: string) => {
        setExpandedGroups(prev => {
            const newSet = new Set(prev);
            if (newSet.has(groupId)) {
                newSet.delete(groupId);
            } else {
                newSet.add(groupId);
            }
            return newSet
        });
    };

    const handleEventClick = (eventId: string) => { // if someone 
        setSelectedEvent(prev => prev === eventId ? null : eventId)
    }

    const renderEvent = (event: TimelineEvent) => (
        <div
            key={event.id}
            className={`event-item relative ${orientation === 'vertical' ? 'ml-4 mt-4' : 'mr-4 mt-4'
                }p-4  border-l-2 transition-all duration-300 ease-in-out hover: bg-bark-dark`}
            onClick={() => handleEventClick(event.id)}
        >
            <div className='event-marker absolute -left-[9px] w-4 h-4 rounded-full' />
            <div className='event-content'>
                <div className='flex items-center'>
                    {event.icon && <div className='mr-2'>{event.icon}</div>}
                    <h4 className='font-semibold'>{event.title}</h4>
                </div>
                <p className='text-sm text-gray-500'>{event.date}</p>
                <p className='mt-1'>{event.description}</p>
                {selectedEvent === event.id && (
                    <div className='mt-2'>
                        <p>{event.detailedDescription}</p>
                        {event.image && (
                            <img src={event.image} alt={event.title} className='mt-2 max-w-full h-auto rounded' />
                        )}
                    </div>
                )}
            </div>
        </div>
    );

    const renderGroup = (group: TimelineGroup) => (
        <div key={group.id} className={`timeline-group mb-4 ${orientation === 'horizontal' ? 'mr-4' : ''}`}>
            <div
                className='group-header flex items-center cursor-pointer p-2 rounded-md'
                onClick={() => toggleGroup(group.id)}
            >
                {expandedGroups.has(group.id) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                <h3 className='ml-2 font-bold'>{group.title}</h3>
            </div>
            {expandedGroups.has(group.id) && (
                <div className={`group-events ${orientation === 'horizontal' ? 'flex' : ''}`}>
                    {group.events.map(renderEvent)}
                </div>
            )}
        </div>
    );

    return (
        <div className={`timeline ${orientation === 'horizontal' ? 'flex overflow-x-auto' : 'flex flex-col'}`}>
            {data.map(item => isGroup(item) ? renderGroup(item) : renderEvent(item))}
        </div>
    );
};

export default Timeline