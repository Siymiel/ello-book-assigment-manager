import useAvatarColor from '../useAvatarColor';

describe('useAvatarColor Hook', () => {
  test('returns correct color for reading level A', () => {
    const color = useAvatarColor('A');
    expect(color).toBe('#FAAD00');
  });

  test('returns correct color for reading level B', () => {
    const color = useAvatarColor('B');
    expect(color).toBe('#4AA088');
  });

  test('returns default color for unknown reading level', () => {
    const color = useAvatarColor('Z');
    expect(color).toBe('#000000');
  });
});
