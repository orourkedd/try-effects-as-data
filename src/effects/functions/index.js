import { mergeAll } from 'ramda';
import * as code from './code';
import * as challenges from './challenges';

export default mergeAll([code, challenges]);
