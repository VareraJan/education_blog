import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: '100px' }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args as any} />;

export const Normal = Template.bind({});
Normal.args = {
    value: '123',
    items: [
        { content: '123hhjkk4uh2h44jk24h2', value: '123' },
        { content: '123hhjkk4uh', value: '1234' },
        { content: '33333333333333333', value: '3333' },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    value: '123',
    direction: 'topLeft',
    items: [
        { content: '123hhjkk4uh2h44jk24h2', value: '123' },
        { content: '123hhjkk4uh', value: '1234' },
        { content: '33333333333333333', value: '3333' },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    value: '123',
    direction: 'topRight',
    items: [
        { content: '123hhjkk4uh2h44jk24h2', value: '123' },
        { content: '123hhjkk4uh', value: '1234' },
        { content: '33333333333333333', value: '3333' },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    value: '123',
    direction: 'bottomLeft',
    items: [
        { content: '123hhjkk4uh2h44jk24h2', value: '123' },
        { content: '123hhjkk4uh', value: '1234' },
        { content: '33333333333333333', value: '3333' },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    value: '123',
    direction: 'bottomRight',
    items: [
        { content: '123hhjkk4uh2h44jk24h2', value: '123' },
        { content: '123hhjkk4uh', value: '1234' },
        { content: '33333333333333333', value: '3333' },
    ],
};
