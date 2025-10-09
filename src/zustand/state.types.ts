import { Cow, eCowPen, eCowStatus } from "@/utils/schemas/types";

export type Filters = {
    status?: eCowStatus;
    pen?: eCowPen;
};

export type CowState = {
    allCows: Array<Cow>;
    cows: Array<Cow>;
    addCow: (
        c: Cow
    ) => void;
    getById: (id: string) => Cow | undefined;
    getAllCows: () => Array<Cow>;
    filterCows: (filters: Filters, query: string) => void;
};