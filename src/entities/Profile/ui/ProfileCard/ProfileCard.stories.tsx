import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ProfileCard } from './ProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Russian,
        lastname: 'Zuzukin',
        first: 'Andrey',
        city: 'London',
        currency: Currency.RUB,
        avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
