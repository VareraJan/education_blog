import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ProfileRatingProps {
    className?: string;
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={className}>PROFILE RATING</div>
    );
});
