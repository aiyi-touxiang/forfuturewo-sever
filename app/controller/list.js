/**
 * author: huweijian
 * Date: 2018/11/6 - 3:11 PM
 * Name: lists
 * Desc:
 */
'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
  async name () {
    this.ctx.body = [
      {
        id: 1,
        name: '张三'
      }
    ];
  }
  async age () {
    this.ctx.body = [
      {
        id: 1,
        age: 20
      }
    ];
  }
}

module.exports = ListController;
