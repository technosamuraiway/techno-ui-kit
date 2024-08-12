declare module 'clsx' {
    type ClassValue = ClassArray | ClassDictionary | boolean | null | number | string | undefined;
    interface ClassDictionary {
      [id: string]: any;
    }
    interface ClassArray extends Array<ClassValue> {}
    function clsx(...classes: ClassValue[]): string;
    export default clsx;
  }
  