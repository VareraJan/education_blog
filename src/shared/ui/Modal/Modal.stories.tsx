import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim in sapiente, placeat necessitatibus pariatur cupiditate assumenda ipsa ullam earum ea qui eaque distinctio beatae quibusdam non dolore voluptas vero suscipit!',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim in sapiente, placeat necessitatibus pariatur cupiditate assumenda ipsa ullam earum ea qui eaque distinctio beatae quibusdam non dolore voluptas vero suscipit!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
