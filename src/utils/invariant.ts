const prefix: string = 'Invariant failed';

export function invariant(condition: boolean, message?: string): asserts condition {
    if (!condition) {
        const errorMessage = `${prefix}${message ? `: ${message}` : ""}`
        throw new Error(errorMessage);
    }
}