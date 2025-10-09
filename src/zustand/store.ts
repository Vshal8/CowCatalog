import { create, StateCreator } from 'zustand';
import { Cow, eCowPen, eCowSex, eCowStatus } from '@/utils/schemas/types';
import moment from 'moment';
import { CowState, Filters } from './state.types';

const initialCows: Array<Cow> = [
    {
        earTag: '12345678901',
        sex: eCowSex.Male,
        pen: eCowPen.A1,
        status: eCowStatus.Active,
        lastEventDate: moment().toISOString(),
    },
    {
        earTag: '12345678902',
        sex: eCowSex.Female,
        pen: eCowPen.B2,
        status: eCowStatus.InTreatment,
        lastEventDate: moment().toISOString(),
    },
    {
        earTag: '12345678903',
        sex: eCowSex.Male,
        pen: eCowPen.Quarantine,
        status: eCowStatus.Deceased,
        lastEventDate: moment().toISOString(),
    },
    {
        earTag: '21234567890',
        sex: eCowSex.Male,
        pen: eCowPen.Feeding,
        status: eCowStatus.Active,
        lastEventDate: moment().toISOString(),
    },
    {
        earTag: '21234567891',
        sex: eCowSex.Female,
        pen: eCowPen.Milking,
        status: eCowStatus.Active,
        lastEventDate: moment().toISOString(),
    },
];

const createCowStore: StateCreator<CowState> = (set: (fn: Partial<CowState> | ((state: CowState) => Partial<CowState>)) => void, get: () => CowState) => ({
    allCows: initialCows,
    cows: initialCows,
    addCow: (input: Cow): void => {
        const existingCows = get().allCows;
        const exists = existingCows.some(
            (c: Cow) => c.earTag.toLowerCase() === input.earTag.toLowerCase()
        );
        if (exists) throw new Error('Ear tag must be unique');
        const now: string = moment().toISOString();
        const newCow: Cow = {
            earTag: input.earTag,
            sex: input.sex,
            pen: input.pen,
            status: input.status,
            lastEventDate: now,
        };
        set((state: CowState): Partial<CowState> => ({
            allCows: [newCow, ...state.allCows],
            cows: [newCow, ...state.cows],
        }));
    },
    getById: (earTag: string): Cow | undefined => {
        const { allCows } = get();
        return allCows.find((c: Cow) => c.earTag === earTag);
    },
    getAllCows: (): Cow[] => {
        return get().cows;
    },
    filterCows: (filters: Filters, query: string): void => {
        console.log('query', query);
        const { allCows } = get();
        let filteredCows = allCows;

        // apply filters first
        if (filters.status || filters.pen) {
            filteredCows = filteredCows.filter(
                (c: Cow) =>
                    (!filters.status || c.status === filters.status) &&
                    (!filters.pen || c.pen === filters.pen)
            );
        }

        if (query && query.trim() !== "") {
            console.log('In Query');
            const q = query.toLowerCase();
            filteredCows = filteredCows.filter((c: Cow) =>
                c.earTag.toLowerCase().includes(q)
            );
        }
        if (!query || query.trim() === "") {
            console.log('In Empty query');
            if (!filters.status && !filters.pen) {
                filteredCows = allCows;
            } else {
                filteredCows = allCows.filter(
                    (c: Cow) =>
                        (!filters.status || c.status === filters.status) &&
                        (!filters.pen || c.pen === filters.pen)
                );
            }
        }

        console.log('filteredCows', filteredCows);

        set(() => ({
            cows: filteredCows,
        }));
    },
});

export const useCowStore = create<CowState>(createCowStore);
