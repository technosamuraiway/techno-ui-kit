export type ClassValue = ClassArray | ClassDictionary | bigint | boolean | null | number | string | undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = ClassValue[];

export function clsx(...inputs: ClassValue[]): string;
export default clsx;