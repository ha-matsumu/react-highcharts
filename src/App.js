import React from 'react';
import ReactHighcharts from 'react-highcharts';
import styled from 'styled-components';

function App() {
  const config = {
    chart: {
      type: 'area', // チャートの種類
      spacing: [0, 0, 0, 0],  // チャートの周りのスペース幅
      backgroundColor: '#fff' // チャートの背景色
    },
    // チャートのタイトル
    title: {
      text: 'DEMO HIGHCHARTS',
    },
    // 各typeの設定を行うことができる
    plotOptions: {
      // typeがareaのものにかかる
      area: {
        states: {
          // ホバー時のオプション
          hover: {
            lineWidth: 1, // hover時のlineの太さ
          }
        },
        threshold: 0, // この値(y軸)と線の間が塗り潰される
        // 塗り潰す色
        fillColor: {
          // (x1, y1) から (x2, y2) にグラデーションがかかる
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          // linearGradientの値によって色を変えられる
          stops: [[0, 'rgba(10, 141, 255, 0.3)'], [1, 'rgba(10, 141, 255, 0.12)']],
        },
      },
      // 全てのtypeの設定
      series: {
        lineColor: '#0a8dff',  // 線の色
        // 点の設定
        marker: {
          fillColor: '#111',  // 点の色
          radius: 3,  // 点の大きさ
        },
        states: {
          hover: {
            // enabled: !false,  // ホバー可能かどうか
          },
        },
      }
    },
    // y軸の設定
    yAxis: {
      title: {
        text: 'y軸',
      },
      allowDecimals: true,  // 目盛に少数を許可するか
      lineColor: 'rgba(47,63,84, .1)', // y軸の色
      gridLineColor: 'rgba(47,63,84, .1)', // プロットエリア全体の目盛りを延長するグリッド線の色
      // y軸の目盛の設定
      labels: {
        style: {
          color: '#111',  // 色
          fontSize: 12, // フォントサイズ
          fontFamily: 'HelveticaNeue',  // フォントの種類
        },
        // フォーマットの指定（数値に3桁区切りカンマをつけるなど）
        // formatter() {
        //   return format_number(this.value);
        // },
      },
      floor: 0, //　最低許容値
      min: 0, // 最小値
      minRange: 100,  // 最小範囲
    },
    // x軸の設定
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // 目盛の値
      minRange: 1, // 最小範囲
      tickWidth: 0, // 主目盛のピクセル幅
      gridLineWidth: 0,  // グリッド線の幅
      lineColor: 'rgba(47,63,84, .1)', // x軸上の色
      gridLineColor: 'rgba(47,63,84, .1)', // x軸のグリッドの色
      tickInterval: 1,  // 目盛同士の間隔幅
    },
    // x軸の目盛の設定
    labels: {
      align: 'center',  // 文字の位置
      x: 0, // オフセット値
      y: 0, // オフセット値
      style: {
        color: '#111', // x軸のラベルの色
        fontSize: 12,
        fontFamily: 'HelveticaNeue',
      },
    },
    // ユーザーがシリーズまたはポイントにカーソルを合わせたときに表示されるツールチップのオプション
    tooltip: {
      useHTML: true, // HTMLによるレンダリングの許可
      headerFormat: `<span class="tooltip-area">{point.key}${''}</span><br />`,
      // pointFormat: format_number('{point.y}'), // ・の値をどのように表示するか
      borderColor: 'none',  // ボーダーの色
      backgroundColor: '#1b8ff8', // 背景色
      shadow: false,  // 影
      style: {
        color: '#fff',
        fontSize: '13px;',
        fontWeight: 'bold',
      },
      // enabled: false,  // ツールチップを表示するかどうか
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false, // 各線の名前を表示するかどうか
    },
    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    }]
  };

  return (
    <AppComponent>
      <ReactHighcharts config = {config}></ReactHighcharts>
    </AppComponent>
  );
}

const AppComponent = styled.div`
  margin: 50px 16px ;
`

export default App;
