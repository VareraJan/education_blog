import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
/** передаем тему глобально, но лучше в компоненте в конкретном сценарии,
 *  конкретную тему добавить */
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouteDecorator);
addDecorator(SuspenseDecorator);
