export function effectTable() {
    let effectTable = [
        {
            occu: 'hu',
            data: [
                {
                    name: 'ウォークライ/战吼',
                    type: true,
                    restrict: true,
                    restrictWp: null,
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%AF%E3%83%A9%E3%82%A4.png',
                    message: ['一定时间内，引起周围敌人注意。并且攻击命中敌人时更容易积累仇恨值'],
                    maxlevel: 1,
                    level: [{
                        name: '仇恨效果',
                        unit: "%",
                        data: [200]
                    }, {
                        name: '持续时间',
                        unit: "秒",
                        data: [200]
                    }, {
                        name: '冷却时间',
                        unit: "秒",
                        data: [200]
                    }]
                },
                {
                    name: 'マッシブハンター/坚实猎人/霸体',
                    type: true,
                    restrict: false,
                    restrictWp: null,
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%83%9E%E3%83%83%E3%82%B7%E3%83%96%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC.png',
                    message: ['一定时间内减少受到的伤害，不会被击飞或击退'],
                    maxlevel: 5,
                    level: [{
                        name: '伤害减少率（主职业）',
                        unit: "%",
                        data: [50, 45, 40, 35, 30]
                    }, {
                        name: '伤害减少率（副职业）',
                        unit: "%",
                        data: [95, 90, 85, 80, 75]
                    }, {
                        name: '持续时间',
                        unit: "秒",
                        data: [30, 30, 30, 30, 30]
                    }, {
                        name: '冷却时间',
                        unit: "秒",
                        data: [180, 180, 180, 180, 180]
                    }]
                }, {
                    name: 'フラッシュガード/卸力格挡',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%83%95%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%82%AC%E3%83%BC%E3%83%89.png',
                    message: ['减少受到的伤害'],
                    maxlevel: 5,
                    level: [{
                        name: '伤害减少率（主职业）',
                        unit: "%",
                        data: [50, 45, 40, 35, 30]
                    }, {
                        name: '伤害减少率（副职业）',
                        unit: "%",
                        data: [95, 90, 85, 80, 75]
                    },]
                }, {
                    name: 'アイアンウィル/钢铁意志/根性',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%A2%E3%82%A4%E3%82%A2%E3%83%B3%E3%82%A6%E3%82%A3%E3%83%AB.png',
                    message: ['受到超过剩余HP的伤害时HP会剩下1。发动后进入无敌时间'],
                    maxlevel: 1,
                    level: [{
                        name: '持续时间',
                        unit: "秒",
                        data: [10]
                    }, {
                        name: '冷却时间',
                        unit: "秒",
                        data: [180]
                    },]
                }, {
                    name: 'オールガード/全方位格挡',
                    type: false,
                    restrict: false,
                    restrictWp: 'Hu武器',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%AA%E3%83%BC%E3%83%AB%E3%82%AC%E3%83%BC%E3%83%89.png',
                    message: ['武器动作可以格挡来自全部方向的攻击'],
                    maxlevel: 1,
                    level: null
                }, {
                    name: 'ハンターアーツアヴェンジ/Hu战技反击',
                    type: false,
                    restrict: false,
                    restrictWp: 'Hu武器',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC%E3%82%A2%E3%83%BC%E3%83%84%E3%82%A2%E3%83%B4%E3%82%A7%E3%83%B3%E3%82%B8.png',
                    message: ['PA发动后一定时间内如果受到敌人的攻击，该PA的威力上升'],
                    maxlevel: 1,
                    level: [{
                        name: '威力',
                        unit: "%",
                        data: [150]
                    }]
                }, {
                    name: 'ハンターアーツジャストパリング/Hu战技完美格挡',
                    type: false,
                    restrict: false,
                    restrictWp: 'Hu武器',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC%E3%82%A2%E3%83%BC%E3%83%84%E3%82%B8%E3%83%A3%E3%82%B9%E3%83%88%E3%83%91%E3%83%AA%E3%83%B3%E3%82%B0.png',
                    message: ['PA发动时，敌人的攻击会被无效化'],
                    maxlevel: 1,
                    level: null
                }, {
                    name: 'ソードアタックエクストラ/大剑额外攻击',
                    type: false,
                    restrict: false,
                    restrictWp: '大剑',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%82%BF%E3%83%83%E3%82%AF%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%88%E3%83%A9.png',
                    message: ['通常攻击段数增加到最大（5段）'],
                    maxlevel: 1,
                    level: null
                }, {
                    name: 'ソードガードカウンター/大剑格挡反击',
                    type: false,
                    restrict: false,
                    restrictWp: '大剑',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%BD%E3%83%BC%E3%83%89%E3%82%AC%E3%83%BC%E3%83%89%E3%82%AB%E3%82%A6%E3%83%B3%E3%82%BF%E3%83%BC.png',
                    message: ['武器动作格挡成功时自动发生反击'],
                    maxlevel: 1,
                    level: null
                }, {
                    name: 'ソードガードカウンタープラス/大剑格挡追加反击',
                    type: false,
                    restrict: false,
                    restrictWp: '大剑',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%BD%E3%83%BC%E3%83%89%E3%82%AC%E3%83%BC%E3%83%89%E3%82%AB%E3%82%A6%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%97%E3%83%A9%E3%82%B9.png',
                    message: ['大剑格挡反击发动时，进行通常攻击可以追加一次特殊反击'],
                    maxlevel: 1,
                    level: null
                }, {
                    name: 'ワイヤードアタックエクストラ/自在枪额外攻击',
                    type: false,
                    restrict: false,
                    restrictWp: '自在枪',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%83%AF%E3%82%A4%E3%83%A4%E3%83%BC%E3%83%89%E3%82%A2%E3%82%BF%E3%83%83%E3%82%AF%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%88%E3%83%A9.png',
                    message: ['通常攻击段数增加到最大（4段）'],
                    maxlevel: 1,
                    level: null
                }, {
                    name: 'ワイヤードアンカーアドバンス/自在枪锚击强化',
                    type: false,
                    restrict: false,
                    restrictWp: '自在枪',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%83%AF%E3%82%A4%E3%83%A4%E3%83%BC%E3%83%89%E3%82%A2%E3%83%B3%E3%82%AB%E3%83%BC%E3%82%A2%E3%83%89%E3%83%90%E3%83%B3%E3%82%B9.png',
                    message: ['武器动作发动时输入方向键，动作会产生变化'],
                    maxlevel: 1,
                    level: null
                }, {
                    name: 'ワイヤードアンカージャストパリング/自在枪锚击完美格挡',
                    type: false,
                    restrict: false,
                    restrictWp: '自在枪',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%83%AF%E3%82%A4%E3%83%A4%E3%83%BC%E3%83%89%E3%82%A2%E3%83%B3%E3%82%AB%E3%83%BC%E3%82%B8%E3%83%A3%E3%82%B9%E3%83%88%E3%83%91%E3%83%AA%E3%83%B3%E3%82%B0.png',
                    message: ['武器动作发动时，敌人的攻击会被无效化'],
                    maxlevel: 1,
                    level: null
                }, {
                    name: 'ヴォルグラプター/爆裂追击',
                    type: false,
                    restrict: false,
                    restrictWp: '长枪',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%83%B4%E3%82%A9%E3%83%AB%E3%82%B0%E3%83%A9%E3%83%97%E3%82%BF%E3%83%BC.png',
                    message: [
                        '通过长按武器动作，射出可蓄积伤害的光子枪。光子枪经过一定时间或蓄积一定伤害后爆发',
                        '切换持有武器后追击标记消失',
                        '多武器系统中使用另一种武器时效果会维持，但仅累积长枪伤害',
                    ],
                    maxlevel: 1,
                    level: [
                        {
                            name: '伤害蓄积率',
                            unit: "%",
                            data: [50]
                        }, {
                            name: '冷却时间',
                            unit: "秒",
                            data: [60]
                        }
                    ]
                }, {
                    name: 'アサルトチャージ/充能突刺',
                    type: false,
                    restrict: false,
                    restrictWp: '长枪',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%A2%E3%82%B5%E3%83%AB%E3%83%88%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B8.png',
                    message: ['PA发动后，在特定时机按下武器动作，则发动可蓄力的突刺攻击'],
                    maxlevel: 1,
                    level: null
                }, {
                    name: 'アサルトチャージアヴェンジ/充能突刺反击',
                    type: false,
                    restrict: false,
                    restrictWp: '长枪',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%A2%E3%82%B5%E3%83%AB%E3%83%88%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%B4%E3%82%A7%E3%83%B3%E3%82%B8.png',
                    message: ['Hu战技反击成功时，由该PA发动的充能突刺的威力上升'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '威力',
                            unit: "%",
                            data: [150]
                        }
                    ]
                }, {
                    name: 'ハンターアーツアヴェンジPPゲイン/Hu战技反击PP恢复',
                    type: false,
                    restrict: false,
                    restrictWp: 'Hu武器',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC%E3%82%A2%E3%83%BC%E3%83%84%E3%82%A2%E3%83%B4%E3%82%A7%E3%83%B3%E3%82%B8PP%E3%82%B2%E3%82%A4%E3%83%B3.png',
                    message: ['Hu战技反击成功时，恢复PP'],
                    maxlevel: 1,
                    level: [{
                        name: 'PP恢复量',
                        unit: "",
                        data: ['+10']
                    }]
                }, {
                    name: 'セイムアーツスキップアタックHu/重复战技省略攻击Hu',
                    type: false,
                    restrict: false,
                    restrictWp: 'Hu武器',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%BB%E3%82%A4%E3%83%A0%E3%82%A2%E3%83%BC%E3%83%84%E3%82%B9%E3%82%AD%E3%83%83%E3%83%97%E3%82%A2%E3%82%BF%E3%83%83%E3%82%AFHu.png',
                    message: ['同一武器，连续使用相同PA后的通常攻击变成第3段'],
                    maxlevel: 1,
                    level: null
                }, {
                    name: 'アナザーアーツスキップアタックHu/花式战技省略攻击Hu',
                    type: false,
                    restrict: false,
                    restrictWp: 'Hu武器',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%A2%E3%83%8A%E3%82%B6%E3%83%BC%E3%82%A2%E3%83%BC%E3%83%84%E3%82%B9%E3%82%AD%E3%83%83%E3%83%97%E3%82%A2%E3%82%BF%E3%83%83%E3%82%AFHu.png',
                    message: ['同一武器，连续使用不同PA后的通常攻击变成第4段。当通常攻击最大段数在3段及以下时，变为最终段'],
                    maxlevel: 1,
                    level: null
                }, {
                    name: 'スローランディングチャージHu/蓄力落地减缓Hu',
                    type: false,
                    restrict: false,
                    restrictWp: 'Hu武器',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%B9%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B8Hu.png',
                    message: ['PA蓄力过程中，下坠速度减缓'],
                    maxlevel: 1,
                    level: null
                },]
        },
        {
            occu: 'fi',
            data: [
                {
                    name: 'リミットブレイク/突破极限/超限/猫火',
                    type: true,
                    restrict: true,
                    restrictWp: 'Fi武器',
                    icon: null,
                    message: ['一定时间内，以承受伤害增加为代价，提升武器威力'],
                    maxlevel: 1,
                    level: [{
                        name: '威力',
                        unit: "%",
                        data: [120]
                    }, {
                        name: '承受伤害',
                        unit: "%",
                        data: [150]
                    }, {
                        name: '持续时间',
                        unit: "秒",
                        data: [30]
                    }, {
                        name: '冷却时间',
                        unit: "秒",
                        data: [180]
                    }]
                },{
                    name: 'リミットブレイク エンデュランス/超限耐力',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: null,
                    message: ['在突破极限状态中，受到超过剩余HP的伤害时，HP会剩下1，但突破极限状态也会解除。触发时产生无敌时间'],
                    maxlevel: 1,
                    level: [{
                        name: '无敌时间',
                        unit: "秒",
                        data: [5]
                    }]
                },{
                    name: 'ディフィート アドバンテージ/击倒优势',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['对击倒（ダウン）状态的敌人，造成的伤害增加'],
                    maxlevel: 10,
                    level: [{
                        name: '物理击倒时威力（主职业）',
                        unit: "%",
                        data: [106,107,108,109,110,111,112,113,114,115]
                    },{
                        name: '属性击倒时威力（主职业）',
                        unit: "%",
                        data: [106,107,108,109,110,111,112,113,114,115]
                    },{
                        name: '物理击倒时威力（副职业）',
                        unit: "%",
                        data: [101,101,101,102,102,103,103,104,104,105]
                    },{
                        name: '属性击倒时威力（副职业）',
                        unit: "%",
                        data: [101,101,101,102,102,103,103,104,104,105]
                    }]
                },{
                    name: 'ディフィート PPリカバリー/击倒PP恢复',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['攻击击倒状态的敌人时，PP恢复量增加'],
                    maxlevel: 10,
                    level: [{
                        name: '物理击倒时PP恢复率（主职业）',
                        unit: "%",
                        data: [130,133,136,138,140,142,144,146,148,150]
                    },{
                        name: '属性击倒时PP恢复率（主职业）',
                        unit: "%",
                        data: [130,133,136,138,140,142,144,146,148,150]
                    },{
                        name: '物理击倒时PP恢复率（副职业）',
                        unit: "%",
                        data: [110,111,112,113,115,117,119,121,123,125]
                    },{
                        name: '属性击倒时PP恢复率（副职业）',
                        unit: "%",
                        data: [110,111,112,113,115,117,119,121,123,125]
                    }]
                },{
                    name: 'ファイター スキップアーツ/Fi省略战技',
                    type: false,
                    restrict: false,
                    restrictWp: 'Fi武器',
                    icon: null,
                    message: ['不输入方向键使用PA时，从PA的后半部分开始发动'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ナックルアタック エクストラ/钢拳额外攻击',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['钢拳通常攻击段数增加到最大（5段）'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ナックルアタック スイッチ/钢拳攻击转换',
                    type: false,
                    restrict: false,
                    restrictWp: '钢拳',
                    icon: null,
                    message: ['武器动作回避成功后的通常攻击变成第5段'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ナックルスウェー カウンター/钢拳摇摆反击',
                    type: false,
                    restrict: false,
                    restrictWp: '钢拳',
                    icon: null,
                    message: ['武器动作回避成功时自动发生反击'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ナックルスウェー カウンタープラス/钢拳摇摆追加反击',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['钢拳摇摆反击发动时，使用武器动作会产生额外反击'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ダガーアタック エクストラ/双小剑额外攻击',
                    type: false,
                    restrict: false,
                    restrictWp: '双小剑',
                    icon: null,
                    message: ['通常攻击段数增加到最大（4段）'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'アクセルドライブ/加速驱动',
                    type: false,
                    restrict: false,
                    restrictWp: '双小剑',
                    icon: null,
                    message: ['PA发动后，在特定时机按下通常攻击，可以向敌人突进攻击'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ダガースピン カウンター/双小剑回旋反击',
                    type: false,
                    restrict: false,
                    restrictWp: '双小剑',
                    icon: null,
                    message: ['武器动作格挡成功时，进行通常攻击，可以发动反击'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'デッドリーアーチャー/死亡之箭',
                    type: false,
                    restrict: false,
                    restrictWp: '双头剑',
                    icon: null,
                    message: ['在缠绕2阶段旋风的状态下，通过长按武器动作，可以将所有旋风转化为能量，向敌人投出武器'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'スパイラルドライブ/螺旋驱动',
                    type: false,
                    restrict: false,
                    restrictWp: '双头剑',
                    icon: null,
                    message: ['在缠绕2阶段旋风的状态下，通过长按武器动作，可以将所有旋风转化为能量，产生飓风'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'セイバーパリィ カウンター/双剑格挡反击',
                    type: false,
                    restrict: false,
                    restrictWp: '双头剑',
                    icon: null,
                    message: ['武器动作格挡成功时，进行通常攻击，可以发动反击'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'セイバーパリィ アナザーカウンター/双剑格挡反击二式',
                    type: false,
                    restrict: false,
                    restrictWp: '双头剑',
                    icon: null,
                    message: ['武器动作格挡成功时，再次使用武器动作，可以发动特殊的反击'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'アナザーアーツ スキップアタックFi/花式战技省略攻击Fi',
                    type: false,
                    restrict: false,
                    restrictWp: 'Fi武器',
                    icon: null,
                    message: ['同一武器，连续使用不同PA后的通常攻击变成第4段。当通常攻击最大段数在3段及以下时，变为最终段'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'セイムアーツ スキップアタックFi/重复战技省略攻击Fi',
                    type: false,
                    restrict: false,
                    restrictWp: 'Fi武器',
                    icon: null,
                    message: ['同一武器，连续使用相同PA后的通常攻击变成第3段'],
                    maxlevel: 1,
                    level: null
                },
            ]
        },
        {
            occu: 'ra',
            data: [
                {
                    name: 'ウィークバレット/脆化弹（WB）',
                    type: true,
                    restrict: true,
                    restrictWp: '步枪',
                    icon: null,
                    message: ['发射脆化弹，被脆化弹命中的部位所承受的伤害增加'],
                    maxlevel: 5,
                    level: [{
                        name: '威力',
                        unit: "%",
                        data: [120, 120, 120, 120, 120]
                    }, {
                        name: '存储次数上限',
                        unit: "次",
                        data: [3, 3, 3, 3, 3]
                    }, {
                        name: '持续时间',
                        unit: "秒",
                        data: [15, 15, 15, 15, 15]
                    }, {
                        name: '冷却时间',
                        unit: "秒",
                        data: [30, 25, 20, 15, 10]
                    }]
                }, {
                    name: 'ウィークバレットリインフォース/脆化弹强化',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: null,
                    message: ['对脆化弹命中的部位攻击一定次数后，造成的伤害增加，技能的效果时间延长'],
                    maxlevel: 1,
                    level: [{
                        name: '脆化弹强化率',
                        unit: "%",
                        data: [125]
                    }, {
                        name: '脆化弹延长时间',
                        unit: "秒",
                        data: [15]
                    }, {
                        name: '必要次数',
                        unit: "次",
                        data: [100]
                    }]
                }, {
                    name: 'バッドコンディションレジスト/逆境抵抗',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['不容易陷入异常状态'],
                    maxlevel: 10,
                    level: [{
                        name: '状态异常蓄积率（主职业）',
                        unit: "%",
                        data: [75, 71, 67, 64, 61, 58, 56, 54, 52, 50]
                    }, {
                        name: '状态异常蓄积率（副职业）',
                        unit: "%",
                        data: [95, 93, 91, 89, 87, 85, 83, 81, 78, 75]
                    }]
                }, {
                    name: 'バッドコンディションリデュース/缩短逆境',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['减少异常状态的持续时间'],
                    maxlevel: 10,
                    level: [{
                        name: '状态异常时间（主职业）',
                        unit: "%",
                        data: [50, 46, 44, 42, 40, 38, 36, 34, 32, 30]
                    }, {
                        name: '状态异常时间（副职业）',
                        unit: "%",
                        data: [95, 90, 85, 80, 75, 70, 65, 60, 55, 50]
                    }]
                }, {
                    name: 'スプレッドショット/扩域射击',
                    type: true,
                    restrict: false,
                    restrictWp: '步枪',
                    icon: null,
                    message: ['通过消耗由攻击蓄积的能量槽，发射特殊的近距离散弹'],
                    maxlevel: 1,
                    level: null
                }, {
                    name: 'スプレッドショットクイックエスケープ/扩域射击高速退避',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['使用扩域射击时发生无敌时间。并且，输入方向键时的退避距离增加'],
                    maxlevel: 1,
                    level: null
                }, {
                    name: 'ライフルグレネーダー/步枪榴弹改造',
                    type: false,
                    restrict: false,
                    restrictWp: '步枪',
                    icon: null,
                    message: ['长按武器动作可以进行榴弹攻击。同时输入方向键则投掷榴弹，不输入则作为陷阱设置在脚下'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '陷阱威力',
                            unit: "%",
                            data: [500]
                        }, {
                            name: '榴弹威力',
                            unit: "%",
                            data: [400]
                        }, {
                            name: '冷却时间',
                            unit: "秒",
                            data: [30]
                        },
                    ]
                }, {
                    name: 'ライフルスライドショットアドバンス/步枪滑行射击强化',
                    type: false,
                    restrict: false,
                    restrictWp: '步枪',
                    icon: null,
                    message: ['使用武器动作时，发生无敌时间'],
                    maxlevel: 1,
                    level: null
                }, {
                    name: 'スティッキーボムクイックリロード/粘性炸弹快速装填',
                    type: false,
                    restrict: false,
                    restrictWp: '大炮',
                    icon: null,
                    message: ['武器动作发动后，到可以再次使用的所需时间减少'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '冷却时间',
                            unit: "秒",
                            data: [30]
                        }
                    ]
                }, {
                    name: 'ランチャーチャージグルーピング/大炮蓄力聚焦',
                    type: false,
                    restrict: true,
                    restrictWp: '大炮',
                    icon: null,
                    message: ['蓄力状态下进行通常攻击时，输入前方向键，弹道会更加集中'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '威力下降',
                            unit: "%",
                            data: [90]
                        }
                    ]
                }, {
                    name: 'スローランディングアタックRa/攻击落地减缓Ra',
                    type: false,
                    restrict: false,
                    restrictWp: 'Ra武器',
                    icon: null,
                    message: ['通常攻击过程中，下坠速度减缓'],
                    maxlevel: 1,
                    level: null
                }, {
                    name: 'スローランディングチャージRa/蓄力落地减缓Ra',
                    type: false,
                    restrict: false,
                    restrictWp: 'Ra武器',
                    icon: null,
                    message: ['PA蓄力过程中，下坠速度减缓'],
                    maxlevel: 1,
                    level: null
                },
            ]
        },
        {
            occu: 'gu',
            data: [
                {
                    name: 'チェイントリガー/连锁扳机（蓝圈）',
                    type: false,
                    restrict: true,
                    restrictWp: '双机枪',
                    icon: null,
                    message: ['蓄力PA发动后，通过攻击使“连击数”增加，再次使用蓄力PA命中时，会发生强力的“连锁终结”效果'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'チェイントリガークイックリロード/连锁扳机高速装填（蓝圈）',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: null,
                    message: ['连锁终结发动后，根据连击数，缩短连锁扳机的冷却时间'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '减少时间',
                            unit: "秒",
                            data: [0.25]
                        }
                    ]
                },{
                    name: 'チェインブースト/连锁增幅',
                    type: false,
                    restrict: true,
                    restrictWp: '双机枪',
                    icon: null,
                    message: ['连锁终结发动后，一定时间内，武器动作中的攻击动作改变，根据连击数，武器的攻击速度上升'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '持续时间',
                            unit: "秒",
                            data: [45]
                        }, {
                            name: '50连击数以下时攻击速度',
                            unit: "%",
                            data: [100]
                        }, {
                            name: '80连击数以下时攻击速度',
                            unit: "%",
                            data: [105]
                        }, {
                            name: '81连击数以上时攻击速度',
                            unit: "%",
                            data: [110]
                        }, {
                            name: '攻击速度上限',
                            unit: "%",
                            data: [120]
                        },
                    ]
                },{
                    name: 'アタックPPリカバリー/攻击PP恢复',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['攻击时的PP恢复量增加'],
                    maxlevel: 10,
                    level: [
                        {
                            name: 'PP自然恢复量（主职业）',
                            unit: "%",
                            data: [120,122,123,124,125,126,127,128,129,130]
                        }, {
                            name: 'PP自然恢复量（副职业）',
                            unit: "%",
                            data: [110,111,112,113,114,115,116,117,118,120]
                        }
                    ]
                },{
                    name: 'オーバーウェルム/征服',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['攻击BOSS以外的敌人时，PP恢复量增加'],
                    maxlevel: 10,
                    level: [
                        {
                            name: 'PP恢复量（主职业）',
                            unit: "%",
                            data: [120,122,123,124,125,126,127,128,129,130]
                        }, {
                            name: 'PP恢复量（副职业）',
                            unit: "%",
                            data: [110,111,112,113,114,115,116,117,118,120]
                        }
                    ]
                },{
                    name: 'スタイリッシュロールアーツ/潇洒空翻战技',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['武器动作中按下PA键，可以消耗PP进行更强力的攻击'],
                    maxlevel: 1,
                    level: [
                        {
                            name: 'PP消耗量',
                            unit: "",
                            data: ['+10']
                        }
                    ]
                },{
                    name: 'スタイリッシュロールストライクバック/潇洒空翻还击',
                    type: false,
                    restrict: false,
                    restrictWp: '双机枪',
                    icon: null,
                    message: ['武器动作回避成功时，下一次使用的PA的PP消耗量增加，威力上升'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '威力',
                            unit: "%",
                            data: [120]
                        }, {
                            name: 'PP消耗量',
                            unit: "%",
                            data: [120]
                        }
                    ]
                },{
                    name: 'スタイリッシュオンスロート/潇洒空翻猛攻',
                    type: false,
                    restrict: false,
                    restrictWp: '双机枪',
                    icon: null,
                    message: ['不按方向键使用武器动作时，改变为向前方突进的动作'],
                    maxlevel: 1,
                    level: [
                        {
                            name: 'PP消耗量',
                            unit: "",
                            data: ['+10']
                        }
                    ]
                },{
                    name: 'スローランディングチャージGu/蓄力落地减缓Gu',
                    type: false,
                    restrict: false,
                    restrictWp: 'Gu武器',
                    icon: null,
                    message: ['PA蓄力过程中，下坠速度减缓'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'スローランディングアタックGu/攻击落地减缓Gu',
                    type: false,
                    restrict: false,
                    restrictWp: 'Gu武器',
                    icon: null,
                    message: ['通常攻击过程中，下坠速度减缓'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'スプレッドショット/扩域射击',
                    type: true,
                    restrict: false,
                    restrictWp: '步枪',
                    icon: null,
                    message: ['通过消耗由攻击蓄积的能量槽，发射特殊的近距离散弹'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'スプレッドショットクイックエスケープ/扩域射击高速退避',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['使用扩域射击时发生无敌时间。并且，输入方向键时的退避距离增加'],
                    maxlevel: 1,
                    level: null
                },
            ]
        },
        {
            occu: 'fo',
            data: [
                {
                    name: 'PPコンバート/PP转换',
                    type: true,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['发动时，以消耗最大HP的一定比率为代价，一定时间内，PP自然恢复速度增加'],
                    maxlevel: 5,
                    level: [
                        {
                            name: '最大HP减少率',
                            unit: "%",
                            data: [20,20,20,20,20]
                        }, {
                            name: 'PP自然回复量（主职业）',
                            unit: "%",
                            data: [600,630,660,680,700]
                        }, {
                            name: 'PP自然回复量（副职业）',
                            unit: "%",
                            data: [400,450,500,550,600]
                        }, {
                            name: '持续时间',
                            unit: "秒",
                            data: [30,30,30,30,30]
                        }, {
                            name: '冷却时间',
                            unit: "秒",
                            data: [180,180,180,180,180]
                        }
                    ]
                },{
                    name: 'PPコンバートインクリース/PP转换',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['PP转换的存储次数上限增加'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '存储次数上限',
                            unit: "次",
                            data: [2]
                        }
                    ]
                },{
                    name: 'フォトンフレア/光子闪耀',
                    type: false,
                    restrict: true,
                    restrictWp: 'Fo武器',
                    icon: null,
                    message: ['一定时间内，最大PP增加，武器威力上升'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '威力',
                            unit: "%",
                            data: [120]
                        }, {
                            name: '增加PP',
                            unit: "",
                            data: ['+50']
                        }, {
                            name: '持续时间',
                            unit: "秒",
                            data: [30]
                        }, {
                            name: '冷却时间',
                            unit: "秒",
                            data: [180]
                        }
                    ]
                },{
                    name: 'フォトンフレアショートチャージ/光子闪耀蓄力缩短',
                    type: false,
                    restrict: true,
                    restrictWp: 'Fo武器',
                    icon: null,
                    message: ['光子闪耀发动中，法术威力减少，蓄力时间缩短'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '威力',
                            unit: "%",
                            data: [90]
                        }, {
                            name: '蓄力时间',
                            unit: "%",
                            data: [60]
                        }
                    ]
                },{
                    name: 'フォトンフレアアフターPPゲイン/光子闪耀结束PP获取',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: null,
                    message: ['光子闪耀结束时，根据光子闪耀中的PP消耗量来恢复PP'],
                    maxlevel: 1,
                    level: [
                        {
                            name: 'PP恢复率',
                            unit: "%",
                            data: [25]
                        }, {
                            name: '最大PP恢复量',
                            unit: "",
                            data: [100]
                        }
                    ]
                },{
                    name: 'PPリカバリーアップ/PP恢复增加',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['PP的自然恢复量增加'],
                    maxlevel: 10,
                    level: [
                        {
                            name: 'PP恢复量（主职业）',
                            unit: "%",
                            data: [150,156,162,166,172,178,184,190,195,200]
                        }, {
                            name: 'PP恢复量（副职业）',
                            unit: "%",
                            data: [110,114,118,122,126,130,135,140,145,150]
                        }
                    ]
                },{
                    name: 'キリングPPゲイン/击杀PP获取/灭域辉与',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['自身周围的敌方被击倒或被击杀时，恢复PP'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '死亡时PP恢复量',
                            unit: "%",
                            data: [50]
                        }
                    ]
                },{
                    name: 'テクニックチャージPPウェルアップ/法术蓄力PP流动',
                    type: false,
                    restrict: false,
                    restrictWp: 'Fo武器',
                    icon: null,
                    message: ['蓄力法术中PP也会自然恢复'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '死亡时PP恢复量',
                            unit: "%",
                            data: [50]
                        }
                    ]
                },{
                    name: 'エレメンタルバレット/元素弹',
                    type: false,
                    restrict: false,
                    restrictWp: '长杖',
                    icon: null,
                    message: ['武器动作格挡成功后使用法术时，追加相同属性的法击弹攻击'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ロッドテクニックキープ/长杖法术保存',
                    type: false,
                    restrict: false,
                    restrictWp: '长杖',
                    icon: null,
                    message: ['蓄力法术时，即便使用武器动作或滑步也会维持蓄力状态，下一次使用相同法术时不需要消耗PP，蓄力时间缩短'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ロッドリアクトアドバンス/长杖反应强化',
                    type: false,
                    restrict: false,
                    restrictWp: '长杖',
                    icon: null,
                    message: ['武器动作格挡成功，或滑步回避成功后，使用法术会产生无敌时间'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ステイPPゲイン/静止PP获取',
                    type: false,
                    restrict: false,
                    restrictWp: '长杖',
                    icon: null,
                    message: ['法术发动后，不进行攻击或回避时，恢复PP'],
                    maxlevel: 1,
                    level: [
                        {
                            name: 'PP恢复量',
                            unit: "",
                            data: [15]
                        }
                    ]
                },{
                    name: 'トリッキーキャパシタ/奇术导体',
                    type: true,
                    restrict: false,
                    restrictWp: '导具',
                    icon: null,
                    message: ['攻击时，通过消费蓄积的能量槽，进行特殊的远距离攻击'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'フロートトーチカマルチロック/浮游阵地多重锁定',
                    type: false,
                    restrict: false,
                    restrictWp: '导具',
                    icon: null,
                    message: ['武器动作发动时，不输入方向键，一定时间内断续地对多个敌人进行攻击'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'レスタフィールドFo/回春领域Fo',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: null,
                    message: ['使用回春信标（治愈花）时，也恢复周围的角色'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'タリスブルームリヴォーク/导具展开解除',
                    type: false,
                    restrict: false,
                    restrictWp: '导具',
                    icon: null,
                    message: ['通过长按武器动作，可以解除PA造成的导具展开状态'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'スローランディングチャージFo/蓄力落地减缓Fo',
                    type: false,
                    restrict: false,
                    restrictWp: 'Fo武器',
                    icon: null,
                    message: ['法术蓄力过程中，下坠速度减缓'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'バータブロット/渗透冻结',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['不蓄力的冰属性法术，命中敌人一定次数后，会刻印冰的纹章。此后使用蓄力的相同属性法术命中时，会引爆纹章造成追加伤害'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ゾンデクラッド/电流外装',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['不蓄力的雷属性法术，命中敌人一定次数后，自身会变成带电状态。此后使用蓄力的相同属性法术时，带电状态解除并强化该法术'],
                    maxlevel: 1,
                    level: null
                },
            ]
        },
        {
            occu: 'te',
            data: [
                {
                    name: 'シフタ・デバンド/炎冰强化法术（红蓝Buff）',
                    type: true,
                    restrict: true,
                    restrictWp: null,
                    icon: null,
                    message: ['一定时间内，自己与周围的角色，对敌人造成的伤害增加，受到的伤害减少'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '威力',
                            unit: "%",
                            data: [105]
                        }, {
                            name: '伤害减少率',
                            unit: "%",
                            data: [90]
                        }, {
                            name: '持续时间',
                            unit: "秒",
                            data: [60]
                        }, {
                            name: '最大持续时间',
                            unit: "秒",
                            data: [60]
                        }, {
                            name: '冷却时间',
                            unit: "秒",
                            data: [15]
                        },
                    ]
                },{
                    name: 'シフタ・デバンドパーティーシェア/炎冰强化法术组队共享',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: null,
                    message: ['炎冰强化法术发动时，即使在范围外的同队角色也能得到效果'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'シフタ・デバンドエクステンド/炎冰强化法术延长',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: null,
                    message: ['炎冰强化法术发动时，即使在范围外的同队角色也能得到效果'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '持续时间',
                            unit: "秒",
                            data: [180]
                        },{
                            name: '最大持续时间',
                            unit: "秒",
                            data: [180]
                        },
                    ]
                },{
                    name: 'シフタエフェクトアンプリファイ/炎强化法术增幅',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: null,
                    message: ['炎冰强化法术追加对敌人造成的击倒值增加的效果'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '物理击倒值增加',
                            unit: "%",
                            data: [105]
                        },{
                            name: '法术击倒值增加',
                            unit: "%",
                            data: [105]
                        },
                    ]
                },{
                    name: 'シフタエフェクトアドバンテージ/炎强化法术优势',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: null,
                    message: ['炎冰强化法术追加对击倒状态的敌人造成的伤害增加的效果'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '威力',
                            unit: "%",
                            data: [105]
                        }
                    ]
                },{
                    name: 'デバンドレジストバッドコンディション/冰强化法术逆境抵抗',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: null,
                    message: ['炎冰强化法术追加不容易陷入异常状态的效果'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '异常状态蓄积率',
                            unit: "%",
                            data: [85]
                        }
                    ]
                },{
                    name: 'デバンドPPリカバリーアップ/冰强化法术PP恢复量增加',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: null,
                    message: ['炎冰强化法术追加PP自然恢复量增加的效果'],
                    maxlevel: 1,
                    level: [
                        {
                            name: 'PP恢复率',
                            unit: "%",
                            data: [120]
                        }
                    ]
                },{
                    name: 'リバースバウンティ/回生奖励',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: null,
                    message: ['对复活的友方施加炎冰强化法术效果'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '持续时间',
                            unit: "秒",
                            data: [60]
                        }
                    ]
                },{
                    name: 'ウィークエレメントアンプリファイ/弱点属性增幅',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['攻击敌方的弱点属性时，光子爆发能量条的蓄积速度增加'],
                    maxlevel: 10,
                    level: [
                        {
                            name: 'PB槽上升量（主职业）',
                            unit: "%",
                            data: [110,112,113,114,115,116,117,118,119,120]
                        },{
                            name: 'PB槽上升量（副职业）',
                            unit: "%",
                            data: [101,102,103,104,105,106,107,108,109,110]
                        },
                    ]
                },{
                    name: 'アウェイクエール/强斗应援',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['BOSS敌人在附近时，光子爆发能量条的蓄积速度增加'],
                    maxlevel: 5,
                    level: [
                        {
                            name: 'PB槽上升量（主职业）',
                            unit: "%",
                            data: [110,113,116,118,120]
                        },{
                            name: 'PB槽上升量（副职业）',
                            unit: "%",
                            data: [102,104,106,108,110]
                        },
                    ]
                },{
                    name: 'ウォンドラバーズ/短杖狂热',
                    type: true,
                    restrict: false,
                    restrictWp: '短杖',
                    icon: null,
                    message: ['一定时间内，对通常攻击追加将敌人的攻击弹开的效果，不会被击退或击飞'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '持续时间',
                            unit: "秒",
                            data: [30]
                        },{
                            name: '冷却时间',
                            unit: "秒",
                            data: [90]
                        },
                    ]
                },{
                    name: 'ウォンドガードリフレクション/短杖格挡反射',
                    type: false,
                    restrict: false,
                    restrictWp: '短杖',
                    icon: null,
                    message: ['通过武器动作等方法格挡成功时，产生法击爆发'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ウォンドエレメントチェンジ/短杖元素转换',
                    type: false,
                    restrict: false,
                    restrictWp: '短杖',
                    icon: null,
                    message: ['使用蓄力法术时，法击爆发变为相同属性'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ウォンドエレメントリヴォーク/短杖元素消除',
                    type: false,
                    restrict: false,
                    restrictWp: '短杖',
                    icon: null,
                    message: ['通过长按武器动作，可以将由于蓄力法术而改变的法击爆发属性变回默认属性'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ウォンドパリィカウンター/短杖格挡反击',
                    type: false,
                    restrict: false,
                    restrictWp: '短杖',
                    icon: null,
                    message: ['武器动作格挡成功时，进行通常攻击，可以发动反击'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ウォンドパリィカウンターアドバンス/短杖格挡反击强化',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['短杖格挡反击发动时，会产生冲击波'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'トリッキーキャパシタ/奇术导体',
                    type: true,
                    restrict: false,
                    restrictWp: '导具',
                    icon: null,
                    message: ['攻击时，通过消费蓄积的能量槽，进行特殊的远距离攻击'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'フロートトーチカマルチロック/浮游阵地多重锁定',
                    type: false,
                    restrict: false,
                    restrictWp: '导具',
                    icon: null,
                    message: ['武器动作发动时，不输入方向键，一定时间内断续地对多个敌人进行攻击'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'タリスブルームリヴォーク/导具展开解除',
                    type: false,
                    restrict: false,
                    restrictWp: '导具',
                    icon: null,
                    message: ['通过长按武器动作，可以解除PA造成的导具展开状态'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'スローランディングチャージTe/蓄力落地减缓Te',
                    type: false,
                    restrict: false,
                    restrictWp: 'Te武器',
                    icon: null,
                    message: ['PA和法术蓄力过程中，下坠速度减缓'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'レスタフィールドTe/回春领域Te',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: null,
                    message: ['使用回春信标（治愈花）时的恢复量增加，也恢复周围的角色'],
                    maxlevel: 1,
                    level: [
                        {
                            name: '恢复威力上升量',
                            unit: "%",
                            data: [140]
                        }
                    ]
                },{
                    name: 'バータブロット/渗透冻结',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['不蓄力的冰属性法术，命中敌人一定次数后，会刻印冰的纹章。此后使用蓄力的相同属性法术命中时，会引爆纹章造成追加伤害'],
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ゾンデクラッド/电流外装',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: null,
                    message: ['不蓄力的雷属性法术，命中敌人一定次数后，自身会变成带电状态。此后使用蓄力的相同属性法术时，带电状态解除并强化该法术'],
                    maxlevel: 1,
                    level: null
                },
            ]
        },
    ]
    return effectTable
}
