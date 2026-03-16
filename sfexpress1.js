/**
 * 椤轰赴閫熻繍 澶氳处鍙风増 (BoxJS)
 *
 * 璇存槑锛?
 * 鏀寔浠?BoxJS 璇诲彇澶氫釜璐﹀彿鐨勭櫥褰曚俊鎭?
 * BoxJS Key 鏍煎紡锛歝havy_login_sfexpress_1, chavy_login_sfexpress_2, ...
 * 璐﹀彿鏁伴噺閫氳繃 BoxJS Key: chavy_login_sfexpress_count 璁剧疆锛堥粯璁ゆ煡鎵惧埌绌轰负姝級
 *
 * 鑾峰彇鐧诲綍淇℃伅锛?
 * 1. QX 娣诲姞閲嶅啓瑙勫垯锛坰fexpress.cookie.js锛?
 * 2. 鎵撳紑椤轰赴閫熻繍APP -> 鎴戠殑椤轰赴 -> 浠诲姟涓績 -> 鍘荤鍒?
 * 3. 鐪嬪埌"鑾峰彇浼氳瘽: 鎴愬姛"鍚庯紝BoxJS 涓細鑷姩淇濆瓨鍒?chavy_login_sfexpress
 * 4. 鎵嬪姩灏嗚鍊煎鍒跺埌 chavy_login_sfexpress_1锛堢浜屼釜璐﹀彿澶嶅埗鍒?_2锛屼互姝ょ被鎺級
 *
 * QX 閲嶅啓瑙勫垯锛?
 * [MITM]
 * hostname = ccsp-egmas.sf-express.com
 * [rewrite_local]
 * ^https:\/\/ccsp-egmas\.sf-express\.com\/cx-app-member\/member\/app\/user\/universalSign url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js
 *
 * BoxJS 璁㈤槄锛?
 * https://raw.githubusercontent.com/chavyleung/scripts/master/box/chavy.box.js
 *
 * cron: 1 0 * * *
 */

const $ = new Env('顺丰速运+')

