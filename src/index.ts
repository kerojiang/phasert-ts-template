/*
 * Copyright (c)  2022  All Rights Reserved
 * 项目名称:phasertest
 * 文件名称:index.ts
 * 修改日期:2022/04/07 16:47:50
 * 作者:kerojiang
 */

import Phaser from 'phaser'
import logoImg from './assets/logo.png'

class MyGame extends Phaser.Scene {
  //构造函数
  constructor(config: Phaser.Types.Scenes.SettingsConfig) {
    super(config)
  }

  preload() {
    this.load.image('logo', logoImg)
  }

  create() {
    const logo = this.add.image(400, 150, 'logo')

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1,
    })
  }
}

const config = {
  type: Phaser.AUTO,
  parent: '动画测试',
  width: 800,
  height: 800,
  scene: MyGame,
}

new Phaser.Game(config)
