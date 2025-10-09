export enum eCowStatus {
    Active = "Active",
    InTreatment = "In Treatment",
    Deceased = "Deceased",
}

export enum eCowSex {
    Male = "Male",
    Female = "Female",
}

export enum eCowPen {
    A1 = "A1",
    B2 = "B2",
    Quarantine = "Quarantine",
    Feeding = "Feeding",
    Milking = "Milking",
    Other = "Other",
}

export type Cow = {
    earTag: string;
    sex: eCowSex;
    pen: eCowPen;
    status: eCowStatus;
    lastEventDate: string;
};
