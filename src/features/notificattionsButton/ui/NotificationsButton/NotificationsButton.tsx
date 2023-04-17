import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import cls from './NotificationsButton.module.scss';

interface NotificationsButtonProps {
  className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames(cls.NotificationsButton, {}, [className])}
            direction="bottomLeft"
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
