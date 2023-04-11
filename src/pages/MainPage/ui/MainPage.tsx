import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('Главная страница')}
            <HStack>
              <div>asdada</div>
              <ListBox
                defaultValue='Выберите значение'
                onChange={(value: string) => {console.log(value);
                }}
                value={undefined}
                items={[
                  {value: '1', content: '123'},
                  {value: '12', content: 'asfs', disabled: true},
                  {value: '123', content: '123ADDR'},
                ]}
              />
            </HStack>
            <div>asdada</div>
            <div>asdada</div>
            <div>asdada</div>
            <div>asdada</div>
        </Page>
    );
};

export default MainPage;
