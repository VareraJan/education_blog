import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import AdminPanelPage from './AdminPanelPage';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = (args) => <AdminPanelPage {...args as any} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [StoreDecorator({})];
