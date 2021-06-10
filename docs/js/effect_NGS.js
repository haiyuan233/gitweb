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
                    message: '一定时间内，引起周围敌人注意。并且攻击命中敌人时更容易积累仇恨值',
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
                    message: '一定时间内减少受到的伤害，不会被击飞或击退',
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
                },{
                    name: 'フラッシュガード/卸力格挡',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%83%95%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%82%AC%E3%83%BC%E3%83%89.png',
                    message: '减少受到的伤害',
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
                },{
                    name: 'アイアンウィル/钢铁意志/根性',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: null,
                    message: '受到超过剩余HP的伤害时HP会剩下1。发动后进入无敌时间',
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
                },{
                    name: 'オールガード/全方位格挡',
                    type: false,
                    restrict: false,
                    restrictWp:'Hu武器',
                    icon: null,
                    message: '武器动作可以格挡来自全部方向的攻击',
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ハンターアーツアヴェンジ/Hu战技反击',
                    type: false,
                    restrict: false,
                    restrictWp:'Hu武器',
                    icon: null,
                    message: 'PA发动后一定时间内如果受到敌人的攻击，该PA的威力上升',
                    maxlevel: 1,
                    level: [{
                        name: '威力',
                        unit: "%",
                        data: [150]
                    }]
                },{
                    name: 'ハンターアーツジャストパリング/Hu战技完美格挡',
                    type: false,
                    restrict: false,
                    restrictWp:'Hu武器',
                    icon: null,
                    message: 'PA发动时，敌人的攻击会被无效化',
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ソードアタックエクストラ/大剑额外攻击',
                    type: false,
                    restrict: false,
                    restrictWp:'大剑',
                    icon: null,
                    message: '通常攻击段数增加到最大（5段）',
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ソードガードカウンター/大剑格挡反击',
                    type: false,
                    restrict: false,
                    restrictWp:'大剑',
                    icon: null,
                    message: '武器动作格挡成功时自动发生反击',
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ソードガードカウンタープラス/大剑格挡追加反击',
                    type: false,
                    restrict: false,
                    restrictWp:'大剑',
                    icon: null,
                    message: '大剑格挡反击发动时，进行通常攻击可以追加一次特殊反击',
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ワイヤードアタックエクストラ/自在枪额外攻击',
                    type: false,
                    restrict: false,
                    restrictWp:'自在枪',
                    icon: null,
                    message: '通常攻击段数增加到最大（4段）',
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ワイヤードアンカーアドバンス/自在枪锚击强化',
                    type: false,
                    restrict: false,
                    restrictWp:'自在枪',
                    icon: null,
                    message: '武器动作发动时输入方向键，动作会产生变化',
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ワイヤードアンカージャストパリング/自在枪锚击完美格挡',
                    type: false,
                    restrict: false,
                    restrictWp:'自在枪',
                    icon: null,
                    message: '武器动作发动时，敌人的攻击会被无效化',
                    maxlevel: 1,
                    level: null
                },{
                    name: 'ヴォルグラプター/爆裂追击',
                    type: false,
                    restrict: false,
                    restrictWp:'长枪',
                    icon: null,
                    message: '通过长按武器动作，射出可蓄积伤害的光子枪。光子枪经过一定时间或蓄积一定伤害后爆发',
                    maxlevel: 1,
                    level: [
                        {
                            name: '伤害蓄积率',
                            unit: "%",
                            data: [50]
                        },{
                            name: '冷却时间',
                            unit: "秒",
                            data: [60]
                        }
                    ]
                },{
                    name: 'アサルトチャージ/充能突刺',
                    type: false,
                    restrict: false,
                    restrictWp:'长枪',
                    icon: null,
                    message: 'PA发动后，在特定时机按下武器动作，则发动可蓄力的突刺攻击',
                    maxlevel: 1,
                    level: null
                },{
                    name: 'アサルトチャージアヴェンジ/充能突刺反击',
                    type: false,
                    restrict: false,
                    restrictWp:'长枪',
                    icon: null,
                    message: 'Hu战技反击成功时，由该PA发动的充能突刺的威力上升',
                    maxlevel: 1,
                    level:  [
                        {
                            name: '威力',
                            unit: "%",
                            data: [150]
                        }
                    ]
                },{
                    name: 'ハンターアーツアヴェンジPPゲイン/Hu战技反击PP恢复',
                    type: false,
                    restrict: false,
                    restrictWp:'Hu武器',
                    icon: null,
                    message: 'Hu战技反击成功时，恢复PP',
                    maxlevel: 1,
                    level: [{
                        name: 'PP恢复量',
                        unit: "",
                        data: ['+10']
                    }]
                },{
                    name: 'セイムアーツスキップアタックHu/重复战技省略攻击Hu',
                    type: false,
                    restrict: false,
                    restrictWp:'Hu武器',
                    icon: null,
                    message: '同一武器，连续使用相同PA后的通常攻击变成第3段',
                    maxlevel: 1,
                    level: null
                },{
                    name: 'アナザーアーツスキップアタックHu/花式战技省略攻击Hu',
                    type: false,
                    restrict: false,
                    restrictWp:'Hu武器',
                    icon: null,
                    message: '同一武器，连续使用不同PA后的通常攻击变成第4段。当通常攻击最大段数在3段及以下时，变为最终段',
                    maxlevel: 1,
                    level: null
                },{
                    name: 'スローランディングチャージHu/蓄力落地减缓Hu',
                    type: false,
                    restrict: false,
                    restrictWp:'Hu武器',
                    icon: null,
                    message: 'PA蓄力过程中，下坠速度减缓',
                    maxlevel: 1,
                    level: null
                },]
        },
        {
            occu: 'fi',
            data: []
        },
        {occu: 'ra', data: [
                {
                    name: 'ウィークバレット/脆化弹（WB）',
                    type: true,
                    restrict: true,
                    restrictWp: '步枪',
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%AF%E3%83%A9%E3%82%A4.png',
                    message: '发射脆化弹，被脆化弹命中的部位所承受的伤害增加',
                    maxlevel: 5,
                    level: [{
                        name: '威力',
                        unit: "%",
                        data: [120,120,120,120,120]
                    }, {
                        name: '存储次数上限',
                        unit: "次",
                        data: [3,3,3,3,3]
                    }, {
                        name: '持续时间',
                        unit: "秒",
                        data: [15,15,15,15,15]
                    }, {
                        name: '冷却时间',
                        unit: "秒",
                        data: [30,25,20,15,10]
                    }]
                },{
                    name: 'ウィークバレットリインフォース/脆化弹强化',
                    type: false,
                    restrict: true,
                    restrictWp: null,
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%AF%E3%83%A9%E3%82%A4.png',
                    message: '对脆化弹命中的部位攻击一定次数后，造成的伤害增加，技能的效果时间延长',
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
                },{
                    name: 'バッドコンディションレジスト/逆境抵抗',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%AF%E3%83%A9%E3%82%A4.png',
                    message: '不容易陷入异常状态',
                    maxlevel: 10,
                    level: [{
                        name: '状态异常蓄积率（主职业）',
                        unit: "%",
                        data: [75,71,67,64,61,58,56,54,52,50]
                    }, {
                        name: '状态异常蓄积率（副职业）',
                        unit: "%",
                        data: [95,93,91,89,87,85,83,81,78,75]
                    }]
                },{
                    name: 'バッドコンディションリデュース/缩短逆境',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%AF%E3%83%A9%E3%82%A4.png',
                    message: '减少异常状态的持续时间',
                    maxlevel: 10,
                    level: [{
                        name: '状态异常时间（主职业）',
                        unit: "%",
                        data: [50,46,44,42,40,38,36,34,32,30]
                    }, {
                        name: '状态异常时间（副职业）',
                        unit: "%",
                        data: [95,90,85,80,75,70,65,60,55,50]
                    }]
                },{
                    name: 'スプレッドショット/扩域射击',
                    type: false,
                    restrict: false,
                    restrictWp: null,
                    icon: 'https://image.swiki.jp/img1/?host=pso2ngs&page=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC&src=%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%AF%E3%83%A9%E3%82%A4.png',
                    message: '通过消耗由攻击蓄积的能量槽，发射特殊的近距离散弹',
                    maxlevel: 1,
                    level: null
                },
            ]},
        {occu: 'gu', data: []},
        {occu: 'fo', data: []},
        {occu: 'te', data: []},
    ]
    return effectTable
}
