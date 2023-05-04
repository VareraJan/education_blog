import { ValidateProfileError } from '../consts/consts';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';

import { profileActions, profileReducer } from './profileSlice';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russian,
    lastname: 'Zuzukin',
    first: 'Andrey',
    city: 'London',
    currency: Currency.RUB,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '' } };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: '123456',
                }),
            ),
        ).toEqual({
            form: { username: '123456' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
