import { Story } from '@storybook/react';

// eslint-disable-next-line varera-jan-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'; // не бизнес код можно заигнорить
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
