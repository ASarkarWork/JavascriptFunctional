export function map(list, fn) {
    let result = [];
    for(let item of list) {
        result.push(fn(item));
    }

    return result;
}
export function filter(list, fn) {
    let result = [];
    for(let item of list) {
        if(fn(item)) {
            // We pass the filter test
            result.push(item);
        }
    }

    return result;
}

export function reduce(list, fn, initial) {
    let accumulator = initial;
    for(let item of list) {
        accumulator = fn(item, accumulator);
    }

    return accumulator;
}

export function forEach(list, fn) {
    for(let item of list) {
        fn(item);
    }
}