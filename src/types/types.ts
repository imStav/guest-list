export enum GENDER {
    MALE = "Boy",
    FEMALE = "Girl",
}

interface Guest {
    id: number;
    name: string;
    gender: GENDER;
  }

export type { Guest }