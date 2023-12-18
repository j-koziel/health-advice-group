const observe = jest.fn();
const unobserve = jest.fn();

export const mockIntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}));
