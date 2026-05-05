import type { Episode } from './types';

export const episode1: Episode = {
  id: '1',
  title: '第1話：はじまりの花',
  firstSceneId: 'scene-intro',
  scenes: [
    {
      id: 'scene-intro',
      messages: [
        {
          id: 'intro-1',
          speaker: 'narrator',
          text: '春の終わり、東京。\n葬儀社「セガワ式典」の事務所に、朝日が差し込んでいた。',
        },
        {
          id: 'intro-2',
          speaker: 'player',
          text: '（また書類が増えてる……今週は依頼が重なってしまった）',
        },
        {
          id: 'intro-3',
          speaker: 'narrator',
          text: '電話を切ったとき、玄関のチャイムが鳴った。',
        },
      ],
      nextSceneId: 'scene-1',
    },
    {
      id: 'scene-1',
      messages: [
        {
          id: 's1-1',
          speaker: 'other',
          characterName: '木下 蒼',
          text: '失礼します。フラワーショップ「木の花」です。今週の供花をお届けに参りました。',
        },
      ],
      choices: [
        {
          id: 'c1-a',
          text: '「ありがとうございます。すぐに開けますね」',
          effects: { affection: 3, trust: 3 },
          nextSceneId: 'scene-2a',
        },
        {
          id: 'c1-b',
          text: '「あ、いつもの方ですか？」（聞き覚えのある声だ）',
          effects: { affection: 5 },
          nextSceneId: 'scene-2b',
        },
        {
          id: 'c1-c',
          text: '「……はい、少しお待ちください」（書類を片付けながら）',
          effects: { trust: 2 },
          nextSceneId: 'scene-2c',
        },
      ],
    },
    {
      id: 'scene-2a',
      messages: [
        {
          id: 's2a-1',
          speaker: 'player',
          text: 'ありがとうございます。搬入口はこちらへどうぞ。',
        },
        {
          id: 's2a-2',
          speaker: 'other',
          characterName: '木下 蒼',
          text: '（微笑みながら）失礼します。今日はリリーとカーネーションのご注文でしたね。',
        },
        {
          id: 's2a-3',
          speaker: 'player',
          text: '（いつも書類を確認してから話しかけてくる。几帳面な人だな）',
        },
      ],
      nextSceneId: 'scene-3',
    },
    {
      id: 'scene-2b',
      messages: [
        {
          id: 's2b-1',
          speaker: 'player',
          text: 'あ、いつもの方ですか？お待ちしていました。',
        },
        {
          id: 's2b-2',
          speaker: 'other',
          characterName: '木下 蒼',
          text: '（少し驚いた様子で）はい、木下です。声、覚えていてくださったんですね。',
        },
        {
          id: 's2b-3',
          speaker: 'player',
          text: '（なんとなく、声が落ち着いてて……聞き取りやすい）',
        },
      ],
      nextSceneId: 'scene-3',
    },
    {
      id: 'scene-2c',
      messages: [
        {
          id: 's2c-1',
          speaker: 'player',
          text: '……はい、少しお待ちください。',
        },
        {
          id: 's2c-2',
          speaker: 'other',
          characterName: '木下 蒼',
          text: 'もちろんです。お急ぎなら、搬入口の前に置いておきましょうか？',
        },
        {
          id: 's2c-3',
          speaker: 'player',
          text: '（急いでいるのに気を遣ってくれた。なんか、すまない）',
        },
      ],
      nextSceneId: 'scene-3',
    },
    {
      id: 'scene-3',
      messages: [
        {
          id: 's3-1',
          speaker: 'narrator',
          text: '木下 蒼は、手慣れた動きで花を並べ始めた。白いリリー、深紅のカーネーション。葬儀に使う花は、どれも静かに咲いていた。',
        },
        {
          id: 's3-2',
          speaker: 'other',
          characterName: '木下 蒼',
          text: '……葬儀社のお仕事って、慣れますか？',
        },
        {
          id: 's3-3',
          speaker: 'player',
          text: 'えっ、急に。……まあ、いつの間にかそうなっていた感じです。',
        },
        {
          id: 's3-4',
          speaker: 'other',
          characterName: '木下 蒼',
          text: 'そうですか。（花を一輪、丁寧に置きながら）花屋も似てるかもしれない。',
        },
      ],
      nextSceneId: 'scene-4',
    },
    {
      id: 'scene-4',
      messages: [
        {
          id: 's4-1',
          speaker: 'other',
          characterName: '木下 蒼',
          text: '毎日、たくさんの花が最後にどこへ行くか知りながら選んでいます。',
        },
        {
          id: 's4-2',
          speaker: 'player',
          text: '（なんだろう、この人の話し方。静かなのに、すごく重みがある）',
        },
        {
          id: 's4-3',
          speaker: 'other',
          characterName: '木下 蒼',
          text: '変なことを言いましたね。すみません。',
        },
      ],
      choices: [
        {
          id: 'c4-a',
          text: '「いえ、好きです。そういう話」',
          effects: { affection: 5, disclosure: 5 },
          nextSceneId: 'scene-5a',
        },
        {
          id: 'c4-b',
          text: '「……花屋さんも、辛くなることはありますか？」',
          effects: { trust: 5, affection: 3 },
          nextSceneId: 'scene-5b',
        },
        {
          id: 'c4-c',
          text: '（首を横に振る）「変じゃないです」',
          effects: { trust: 3 },
          nextSceneId: 'scene-5c',
        },
      ],
    },
    {
      id: 'scene-5a',
      messages: [
        {
          id: 's5a-1',
          speaker: 'player',
          text: 'いえ、好きです。そういう話。',
        },
        {
          id: 's5a-2',
          speaker: 'other',
          characterName: '木下 蒼',
          text: '（少し目が丸くなる）……そうですか。',
        },
        {
          id: 's5a-3',
          speaker: 'player',
          text: '葬儀って、誰かの最後の時間に関わる仕事なので。軽く考えたくなくて。',
        },
        {
          id: 's5a-4',
          speaker: 'other',
          characterName: '木下 蒼',
          text: '（ゆっくりとうなずいて）……わかります。',
        },
      ],
      nextSceneId: 'scene-6',
    },
    {
      id: 'scene-5b',
      messages: [
        {
          id: 's5b-1',
          speaker: 'player',
          text: '……花屋さんも、辛くなることはありますか？',
        },
        {
          id: 's5b-2',
          speaker: 'other',
          characterName: '木下 蒼',
          text: '（少し間を置いて）あります。でも、花が悲しんでいる人の傍にいると思うと、それでいいって思えて。',
        },
        {
          id: 's5b-3',
          speaker: 'player',
          text: '……それ、すごく、いい考え方ですね。',
        },
        {
          id: 's5b-4',
          speaker: 'other',
          characterName: '木下 蒼',
          text: '（少し照れたように）葬儀屋さんに言われると、嬉しいです。',
        },
      ],
      nextSceneId: 'scene-6',
    },
    {
      id: 'scene-5c',
      messages: [
        {
          id: 's5c-1',
          speaker: 'player',
          text: '（首を横に振る）変じゃないです。',
        },
        {
          id: 's5c-2',
          speaker: 'other',
          characterName: '木下 蒼',
          text: '（優しく笑う）ありがとうございます。',
        },
        {
          id: 's5c-3',
          speaker: 'narrator',
          text: '二人の間に、短い沈黙が流れた。でも、それは居心地が悪くはなかった。',
        },
      ],
      nextSceneId: 'scene-6',
    },
    {
      id: 'scene-6',
      isEnding: true,
      messages: [
        {
          id: 's6-1',
          speaker: 'narrator',
          text: '花を置き終え、蒼は帰り支度をし始めた。',
        },
        {
          id: 's6-2',
          speaker: 'other',
          characterName: '木下 蒼',
          text: 'では、また来週お届けします。',
        },
        {
          id: 's6-3',
          speaker: 'player',
          text: 'ありがとうございました。あの……',
        },
        {
          id: 's6-4',
          speaker: 'other',
          characterName: '木下 蒼',
          text: '（振り返る）はい？',
        },
        {
          id: 's6-5',
          speaker: 'player',
          text: '花、いつもきれいで。……助かっています。',
        },
        {
          id: 's6-6',
          speaker: 'other',
          characterName: '木下 蒼',
          text: '（笑顔になって）ありがとうございます。来週も、丁寧に選んで来ますね。',
        },
        {
          id: 's6-7',
          speaker: 'narrator',
          text: '扉が閉まった後、優はしばらく玄関に立っていた。\n花の香りだけが、静かに残っていた。',
        },
      ],
    },
  ],
};
