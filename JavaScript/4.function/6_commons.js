/**
 * commons 폴더에 저장된 자바스크립트 모듈 임포트
 */
import {singleGugudan} from '../commons/gugudan.js';
import {multiGugudan} from '../commons/gugudan.js';
// const singleGugudan = require('');

singleGugudan(3);
singleGugudan(7);
multiGugudan(3, 7); //3단~7단 까지 출력


