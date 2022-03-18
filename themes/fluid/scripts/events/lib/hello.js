'use strict';

module.exports = (hexo) => {
  const isZh = hexo.theme.i18n.languages[0].search(/zh-CN/i) !== -1;
  if (isZh) {
    hexo.log.info(`

`);
  } else {
    hexo.log.info(`

`);
  }

};
