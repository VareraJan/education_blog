import React from 'react';
import { useTranslation } from 'react-i18next';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/CounterSlice';

import { Button } from '@/shared/ui/Button';

export const Counter: React.FC = () => {
    const counterValue = useCounterValue();
    const { decrement, increment, add } = useCounterActions();

    const { t } = useTranslation();

    const handleIncrement = () => {
        increment();
    };

    const handleDecrement = () => {
        decrement();
    };

    const handleAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={handleAddFive}
                data-testid="increment-btn"
            >
                {t('add5')}
            </Button>
            <Button
                onClick={handleIncrement}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                onClick={handleDecrement}
                data-testid="decrement-btn"
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
