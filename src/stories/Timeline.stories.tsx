import type { Meta, StoryObj } from '@storybook/react';
import Timeline from '../components/Timeline/component';
import { CalendarDays, Rocket, Lightbulb } from 'lucide-react'

const meta: Meta<typeof Timeline> = {
    title: 'Timeline',
    component: Timeline,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Timeline>;

const sampleData = [
    {
        id: 'group1',
        title: 'Ancient Civilizations',
        events: [
            {
                id: 'event1',
                date: '3000 BC',
                title: 'The Great Pyramid',
                description: 'Construction of the Great Pyramid of Giza begins',
                detailedDescription: 'The Great Pyramid of Giza, also known as the Pyramid of Cheops, is the oldest and largest of the three pyramids in the Giza pyramid complex.',
                icon: <CalendarDays />
            },
            {
                id: 'event2',
                date: '1200 BC',
                title: 'Trojan War',
                description: 'The legendary Trojan War takes place',
                detailedDescription: 'The Trojan War was a legendary conflict between the early Greeks and the people of Troy in western Anatolia, dated by later Greek authors to the 12th or 13th century BC.',
                icon: undefined
            },
        ],
    },
    {
        id: 'group2',
        title: 'Age of Exploration',
        events: [
            {
                id: 'event3',
                date: '1492',
                title: 'Columbus Sails the Ocean Blue',
                description: 'Christopher Columbus reaches the Americas',
                detailedDescription: 'On August 3, 1492, Columbus set sail from Spain to find an all-water route to Asia. On October 12, more than two months later, Columbus landed on an island in the Bahamas that he called San Salvador.',
                icon: <Rocket />,
                image: 'https://example.com/columbus-voyage.jpg',
            },
        ],
    },
    {
        id: 'group3',
        title: 'Inventions',
        events: [
            {
                id: 'event4',
                date: '1879',
                title: 'Edison\'s Light Bulb',
                description: 'Thomas Edison invents the light bulb',
                detailedDescription: 'After many experiments, Thomas Edison invented an incandescent light bulb that could be used for about 40 hours without burning out.',
                icon: <Lightbulb />,
            },
        ],
    },
];

export const VerticalTimeline: Story = {
    args: {
        data: sampleData,
        orientation: 'vertical',
    },
};

export const HorizontalTimeline: Story = {
    args: {
        data: sampleData,
        orientation: 'horizontal',
    },
};

export const SingleEventTimeline: Story = {
    args: {
        data: [sampleData[2]],
        orientation: 'vertical',
    },
};

// can add more stories 