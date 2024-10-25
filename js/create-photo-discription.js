import { getRandomInteger, createRandomIdFromRangeGenerator } from './util.js';
import { createComment } from './create-comment.js';

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);

const generateUrlId = createRandomIdFromRangeGenerator(1, 1000);

function createPhotoDiscription() {
  const PhotoDiscription = {
    'id': generatePhotoId(),
    'url': `photos/${generateUrlId()}.jpg`,
    'description': 'картинка',
    'likes': getRandomInteger(15, 200),
    'comments': Array.from({ length: getRandomInteger(0, 30) }, createComment)
  };
  return PhotoDiscription;
}
export {createPhotoDiscription};