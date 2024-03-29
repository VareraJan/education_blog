import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Hello Kitty!',
            user: {
                id: '1',
                username: 'Vasya',
            },
        },
        {
            id: '2',
            text: 'Ra-ta-ta-ta-ta!',
            user: {
                id: '2',
                username: 'Mause',
            },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
