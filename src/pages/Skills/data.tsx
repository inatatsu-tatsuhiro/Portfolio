import {
  SiJavascript,
  SiTypescript,
  SiJava,
  SiPython,
  SiDiscord,
  SiReact,
  SiExpress,
  SiRuby,
  SiRubyonrails,
  SiDocker,
  SiNginx,
  SiMysql,
  SiAmazonaws,
  SiFirebase,
  SiUnity,
  SiGo,
  SiDeno,
} from 'react-icons/si'

import NemLogo from '../../components/atoms/Icons/SVG/Nem/Component'


export const data = {
  json: [
    {
      name: 'JavaScript',
      logo: <SiJavascript />,
      since: '2017/08',
      discription:
        '初めて触ったプログラミング言語。普段のWeb開発や研究で作成しているブラウザ拡張機能開発に使用している。Webでは最近はTypeScriptが多い。',
    },
    {
      name: 'TypeSctipr',
      logo: <SiTypescript />,
      since: '2019/10',
      discription:
        'ReactやExpressを用いたWeb開発で主に使用している。型は正義。',
    },
    {
      name: 'Java',
      logo: <SiJava />,
      since: '2018/04',
      discription: '大学の授業で使用。GoFデザインパターンやOOPを履修。',
    },
    {
      name: 'Golang',
      logo: <SiGo />,
      since: '2019/10',
      discription: 'サーバー書くときに雑に使う。DDDとかすき。',
    },
    {
      name: 'Python',
      logo: <SiPython />,
      since: '2018/08',
      discription:
        'bot開発やIoT周りのハッカソン等で使用。講義動画の画面変化量からスライド生成するプログラムとかが簡単につくれて助かった。',
    },
    {
      name: 'Discord',
      logo: <SiDiscord />,
      since: '2018/12',
      discription:
        'discord.pyでbot開発。オンラインで活動する際に必要となる機能とかを自在に作れた。',
    },
    {
      name: 'React',
      logo: <SiReact />,
      since: '2019/01',
      discription:
        'フロントエンドの開発は9割がReact、たまにVueを使うこともあるが、Reactが圧倒的に好き。Nextは微妙。',
    },
    {
      name: 'Express',
      logo: <SiExpress />,
      since: '2018/08',
      discription:
        'とりあえずサーバーを立てたい時に使いがち、複数人で開発するときには採用しやすい。一人ならTypeScriptで書く。',
    },
    {
      name: 'Deno',
      logo: <SiDeno />,
      since: '2018/08',
      discription:
        'ハッカソンでWebSocketサーバーたてたりした。TS対応とかがよくて好き。本格的に使いたい。',
    },
    {
      name: 'Ruby',
      logo: <SiRuby />,
      since: '2019/02',
      discription: 'HackU Kindaiで使用。3日くらいの勉強',
    },
    {
      name: 'Ruby on Rails',
      logo: <SiRubyonrails />,
      since: '2019/02',
      discription:
        'HackU Kindaiで使用。APIサーバー構築をした。たまにハッカソンで登場する。',
    },
    {
      name: 'Docker',
      logo: <SiDocker />,
      since: '2019/08',
      discription:
        '今や手放せない開発のお供。これがなかったら何も開発できない(ホストに環境が一切ない。)',
    },
    {
      name: 'Nginx',
      logo: <SiNginx />,
      since: '2019/08',
      discription: 'CORS回避にリバースプロキシで使うことが多い。',
    },
    {
      name: 'MySQL',
      logo: <SiMysql />,
      since: '2019/08',
      discription: 'Web開発でのDBは基本MySQL',
    },
    {
      name: 'Firebase',
      logo: <SiFirebase />,
      since: '2021/01',
      discription:
        '手頃に認証したり、ストレージがほしい際に使用。雑に使えて気が楽。',
    },
    {
      name: 'AWS',
      logo: <SiAmazonaws />,
      since: '2021/04',
      discription:
        'インターンで作成したアプリケーションで使用。VPC, EC2, Route53, RDS, S3等を使った。',
    },
    {
      name: 'Unity',
      logo: <SiUnity />,
      since: '2017/08',
      discription:
        '初めてプログラミングというものに触れた場所。はじめはJavaScript(UnityScript)を使っていた。学祭等の展示用に3DゲームやVRゲームを作ったりする。BeatSaberがしたすぎてBeatSaberを作成したりした。(完成後購入しました)',
    },
    {
      name: 'Nem Symbol',
      logo: <NemLogo />,
      since: '2019/06',
      discription:
        '近畿大学で開催されたBlockChainハッカソンで初めて触れる。現在はOpenigLine社でのインターンで使用中。',
    },
  ],
}
