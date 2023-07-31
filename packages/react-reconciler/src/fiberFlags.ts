export type Flags = number;

export const NoFlags: Flags = 0b0000000;
export const Placement: Flags = 0b0000001;
export const Update: Flags = 0b0000010;
export const ChildDeletion: Flags = 0b0000100;

export const MutationMask = Placement | Update | ChildDeletion;
