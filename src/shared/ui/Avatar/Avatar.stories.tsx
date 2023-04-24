import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Avatar } from './Avatar';
import AvatarImg from './avatar.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    alt: 'textALT',
    src: AvatarImg,
    size: 150,
};

export const Small = Template.bind({});
Small.args = {
    alt: 'textALT',
    src: AvatarImg,
    size: 50,
};
