import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ArticleEditForm } from './articleEditForm';

export default {
    title: 'shared/articleEditForm',
    component: ArticleEditForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditForm>;

const Template: ComponentStory<typeof ArticleEditForm> = (args) => (
    <ArticleEditForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
