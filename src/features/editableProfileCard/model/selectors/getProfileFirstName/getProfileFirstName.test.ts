import { getProfileFirstName } from './getProfileFirstName';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileFirstName.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Russian,
            lastname: 'Zuzukin',
            first: 'Andrey',
            city: 'London',
            currency: Currency.RUB,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileFirstName(state as StateSchema)).toEqual('Andrey');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getProfileFirstName(state as StateSchema)).toEqual('');
    });
});
