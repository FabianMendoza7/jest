test('Object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

// Falsy: zero, undefined, null,NaN
test('null is falsy', () => {
    const n = null
    expect(n).toBeFalsy();
});

test('one is truthy', () => {
    const n = 1
    expect(n).toBeTruthy();
});