import { sampleData, filtered } from './sample-data-test';
import imageDataFilter from './image-result-helper';

describe('imageDataFilter', () => {
  it('Works as expected by filtering the data and returning an array of images', () => {
    const result = imageDataFilter(sampleData);
    expect(result).toEqual(filtered);
  });
});
