type ParamsToObject<T> = {
    [K in keyof Parameters<T extends (...args: any) => any>]: K
}
