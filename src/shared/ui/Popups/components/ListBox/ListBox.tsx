import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import popupCls from '../../styles/popup.module.scss';

import cls from './ListBox.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottomRight',
        label,
    } = props;

    const optionsClasses = [popupCls[direction]];

    return (
        <HStack gap="4">
            {label && (
                <span
                    className={classNames(
                        '',
                        { [popupCls.disabled]: readonly },
                        [],
                    )}
                >{`${label}>`}</span>
            )}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames('', {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button
                    disabled={readonly}
                    className={popupCls.trigger}
                >
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    })}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
