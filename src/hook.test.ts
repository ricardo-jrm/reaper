import { renderHook } from '@testing-library/react-hooks';
import {
  useDateFormat,
  useDateRelative,
  useHexRgb,
  useLocalState,
  useNumberFormat,
  useRgbHex,
  useStringCapitalize,
  useStringTruncate,
} from '.';

describe('test exports', () => {
  it('should run useDateFormat', () => {
    const mock = jest.fn(useDateFormat);
    renderHook(() => mock(new Date('2022-01-31')));
    expect(mock).toHaveBeenCalled();
  });
  it('should run useDateRelative', () => {
    const mock = jest.fn(useDateRelative);
    renderHook(() => mock(new Date('2022-01-31')));
    expect(mock).toHaveBeenCalled();
  });
  it('should run useHexRgb', () => {
    const mock = jest.fn(useHexRgb);
    renderHook(() => mock('#30a14e'));
    expect(mock).toHaveBeenCalled();
  });
  it('should run useRgbHex', () => {
    const mock = jest.fn(useRgbHex);
    renderHook(() => mock(48, 161, 78));
    expect(mock).toHaveBeenCalled();
  });
  it('should run useNumberFormat', () => {
    const mock = jest.fn(useNumberFormat);
    renderHook(() => mock(1337));
    expect(mock).toHaveBeenCalled();
  });
  it('should run stringCapitalize', () => {
    const mock = jest.fn(useStringCapitalize);
    renderHook(() => mock('lorem ipsum dolor sit amet'));
    expect(mock).toHaveBeenCalled();
  });
  it('should run useStringTruncate', () => {
    const mock = jest.fn(useStringTruncate);
    renderHook(() => mock('Lorem ipsum dolor sit amet', 20));
    expect(mock).toHaveBeenCalled();
  });
});
