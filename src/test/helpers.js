// eslint-disable-next-line
import faker from 'faker';

export const getRandomWordsBetween = (min, max) => faker.lorem.words(Math.floor(Math.random() * max) + min);
