import { mergeAll } from 'ramda';
import * as codeActions from './code';
import * as challengeActions from './challenges';

export default mergeAll([codeActions, challengeActions]);
