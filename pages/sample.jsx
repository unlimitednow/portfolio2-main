import Hero 		from '../components/sections/index/hero'
import Looking 		from '../components/sections/index/looking'
import About 		from '../components/sections/index/about'
import Technical 	from '../components/sections/index/technical'
import Career 		from '../components/sections/index/career'
import FeaturedProjects	from '../components/sections/projects/featured'

import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'

//
export default function HomePage() {

	return (
		<>
			<Color colors={colors} />
			<Hero />
	 <>
      
      <style jsx>{`
        .div {
          justify-content: space-between;
          align-content: stretch;
          display: flex;
          width: 100vw;
          align-items: center;
          flex-wrap: wrap;
          content-visibility: auto;
          contain-intrinsic-size: 728px;
          background-color: rgba(252, 252, 252, 1);
          padding-top: 22px;
          padding-bottom: 40px;
          padding-left: 65px;
          margin-left: auto;
        }
        @media (max-width: 991px) {
          .div {
            flex-wrap: wrap-reverse;
            display: flex;
            content-visibility: auto;
            contain-intrinsic-size: 788px;
          }
        }
        @media (max-width: 640px) {
          .div {
            display: none;
          }
        }
        .div-2 {
          height: 595px;
          position: relative;
          width: 337px;
          pointer-events: unset;
          margin-left: 271px;
          margin-right: -500px;
        }
        .div-3 {
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          border-top-left-radius: 50%;
          height: auto;
          left: -253px;
          opacity: 0.15;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          position: absolute;
          top: -10px;
          width: 579px;
          will-change: transform;
          pointer-events: unset;
          background-image: radial-gradient(
            50% 50% at 50% 50%,
            rgb(55, 0, 87) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }
        .a {
          column-gap: 0px;
          gap: 0px;
          row-gap: 0px;
          align-content: center;
          align-items: center;
          background-color: rgba(22, 11, 54, 1);
          border-radius: 46px;
          border-top-left-radius: 46px;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 60px 0px,
            rgba(44, 24, 68, 0.1) 0px 20px 40px 0px;
          display: flex;
          height: min-content;
          justify-content: center;
          left: 50%;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          padding-bottom: 10px;
          padding-left: 10px;
          padding-right: 10px;
          padding-top: 10px;
          place-content: center;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 288px;
          will-change: transform;
          pointer-events: unset;
          cursor: pointer;
        }
        .div-4 {
          background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fa480daf8d0e34c12bcc3f48f0079ed71%2F71614f3a4b8c43f291a04b66048e8837);
          border-radius: 37px;
          border-top-left-radius: 37px;
          flex-basis: 0px;
          flex-grow: 1;
          height: 575px;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          position: relative;
          width: 1px;
          will-change: transform;
          pointer-events: unset;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        .div-5 {
          column-gap: 0px;
          gap: 0px;
          row-gap: 0px;
          align-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          flex-flow: column nowrap;
          height: min-content;
          justify-content: flex-start;
          left: 20px;
          place-content: center flex-start;
          position: absolute;
          right: 20px;
          top: 120px;
          pointer-events: unset;
        }
        .div-6 {
          column-gap: 0px;
          gap: 0px;
          row-gap: 0px;
          align-content: center;
          align-items: center;
          background-color: rgb(240, 240, 240);
          border-radius: 37px;
          border-top-left-radius: 37px;
          bottom: 0px;
          display: flex;
          height: min-content;
          justify-content: center;
          left: 0px;
          padding-bottom: 20px;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 20px;
          place-content: center;
          position: absolute;
          right: 0px;
          pointer-events: unset;
        }
        .div-7 {
          column-gap: 0px;
          gap: 0px;
          row-gap: 0px;
          align-content: center;
          align-items: center;
          background-color: rgb(255, 255, 255);
          border-radius: 50px;
          border-top-left-radius: 50px;
          display: flex;
          flex-basis: 0px;
          flex-grow: 1;
          height: 40px;
          justify-content: flex-start;
          padding-bottom: 14px;
          padding-left: 14px;
          padding-right: 14px;
          padding-top: 14px;
          place-content: center flex-start;
          position: relative;
          width: 1px;
          pointer-events: unset;
          margin-left: auto;
          margin-right: auto;
        }
        .div-8 {
          position: relative;
          white-space: pre;
          pointer-events: unset;
          flex-direction: column;
          display: flex;
          font-size: 15px;
          justify-content: flex-start;
          line-height: 1px;
          outline: none;
          margin-left: auto;
          margin-right: auto;
          font-family: "Play", sans-serif;
        }
        .span {
          pointer-events: unset;
          text-align: center;
          font-size: 0px;
          line-height: 0;
          tab-size: 4;
        }
        .span-2 {
          display: flex;
          pointer-events: unset;
          font-size: 0px;
          flex-direction: column;
        }
        .span-3 {
          color: rgb(87, 87, 87);
          font-family: "Play", sans-serif;
          font-size: 17px;
          font-style: normal;
          font-weight: 500;
          letter-spacing: normal;
          line-height: 19.5px;
          text-decoration: none solid rgb(87, 87, 87);
          text-transform: none;
          display: unset;
          pointer-events: unset;
          margin-left: auto;
          margin-right: auto;
        }
        .br {
          pointer-events: unset;
        }
        .div-9 {
          column-gap: 0px;
          gap: 0px;
          row-gap: 0px;
          align-content: center;
          align-items: center;
          display: flex;
          height: min-content;
          justify-content: flex-start;
          left: -44px;
          place-content: center flex-start;
          position: absolute;
          top: 145px;
          width: min-content;
          pointer-events: unset;
          opacity: 0;
          transform: translateX(0px) translateY(0px) scale(0.5) translateZ(0px);
        }
        .div-10 {
          column-gap: 0px;
          gap: 0px;
          row-gap: 0px;
          align-content: center;
          align-items: center;
          border-radius: 20px;
          border-top-left-radius: 20px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px 0px;
          display: flex;
          height: min-content;
          justify-content: flex-start;
          place-content: center flex-start;
          position: relative;
          width: min-content;
          pointer-events: unset;
        }
        .div-11 {
          aspect-ratio: 1 / 1;
          height: auto;
          position: relative;
          width: 40px;
          pointer-events: unset;
        }
        .div-12 {
          pointer-events: unset;
          display: contents;
        }
        .div-13 {
          height: 100%;
          width: 100%;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          position: relative;
          pointer-events: unset;
          background-color: rgb(255, 199, 15);
          border-bottom-left-radius: 60px;
          border-bottom-right-radius: 60px;
          border-radius: 60px;
          border-top-left-radius: 60px;
          border-top-right-radius: 60px;
          display: block;
        }
        .div-14 {
          column-gap: 10px;
          row-gap: 10px;
          pointer-events: unset;
          align-content: center;
          align-items: center;
          display: flex;
          height: 100%;
          justify-content: center;
          place-content: center;
          width: 100%;
        }
        .div-15 {
          pointer-events: unset;
          display: contents;
        }
        .div-16 {
          flex-basis: 0px;
          flex-grow: 1;
          height: 100%;
          position: relative;
          width: 1px;
          pointer-events: unset;
          border-bottom-left-radius: 60px;
          border-bottom-right-radius: 60px;
          border-radius: 60px;
          border-top-left-radius: 60px;
          border-top-right-radius: 60px;
        }
        .div-17 {
          pointer-events: none;
          bottom: 0px;
          inset: 0px;
          left: 0px;
          position: absolute;
          right: 0px;
          top: 0px;
          user-select: none;
        }
        .div-18 {
          pointer-events: none;
          display: contents;
        }
        .raw-img {
          pointer-events: none;
          display: block;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          user-select: none;
          width: 100%;
        }
        .div-19 {
          column-gap: 0px;
          gap: 0px;
          row-gap: 0px;
          align-content: center;
          align-items: center;
          background-color: rgb(255, 255, 255);
          border-radius: 4px 20px 20px;
          border-top-left-radius: 4px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px 0px;
          display: flex;
          height: min-content;
          justify-content: flex-start;
          padding-bottom: 12px;
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 12px;
          place-content: center flex-start;
          position: relative;
          width: 127px;
          pointer-events: unset;
        }
        .div-20 {
          height: 16px;
          position: relative;
          width: 16px;
          pointer-events: unset;
        }
        .div-21 {
          pointer-events: unset;
          display: contents;
        }
        .div-22 {
          background-color: rgb(87, 87, 87);
          border-radius: 500px;
          border-top-left-radius: 500px;
          flex-basis: 0px;
          flex-grow: 1;
          height: 3px;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          position: relative;
          width: 1px;
          will-change: transform;
          pointer-events: unset;
        }
        .div-23 {
          opacity: 0.8;
          position: relative;
          white-space: pre;
          pointer-events: unset;
          flex-direction: column;
          display: flex;
          font-size: 0px;
          justify-content: flex-start;
          line-height: 1px;
          outline: none;
        }
        .span-4 {
          display: block;
          pointer-events: unset;
          font-size: 0px;
        }
        .span-5 {
          color: rgb(0, 0, 0);
          font-family: Outfit, serif;
          font-size: 13px;
          font-style: normal;
          font-weight: 500;
          letter-spacing: normal;
          line-height: 19.5px;
          text-decoration: none solid rgb(0, 0, 0);
          text-transform: none;
          display: unset;
          pointer-events: unset;
        }
        .div-24 {
          bottom: -31px;
          height: 72px;
          left: 0px;
          position: absolute;
          width: 33px;
          pointer-events: unset;
          background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2033%2072%22%3E%3Cpath%20d%3D%22M%2018.931%2054.707%20C%2020.743%2052.056%2022.447%2049.428%2024.304%2046.908%20C%2024.97%2046.006%2025.925%2045.255%2026.885%2044.646%20C%2028.222%2043.802%2029.692%2043.798%2031.044%2044.7%20C%2032.445%2045.63%2033.003%2047.025%2032.675%2048.629%20C%2032.454%2049.691%2032.009%2050.739%2031.504%2051.71%20C%2030.201%2054.23%2028.717%2056.657%2027.483%2059.207%20C%2026.777%2060.664%2026.195%2062.249%2025.935%2063.833%20C%2025.553%2066.144%2026.229%2068.235%2028.208%2069.721%20C%2029.124%2070.409%2028.913%2070.892%2028.021%2071.369%20C%2025.857%2072.529%2022.565%2072.027%2020.767%2070.068%20C%2017.931%2066.982%2017.432%2063.238%2017.99%2059.26%20C%2018.049%2058.826%2018.151%2058.397%2018.23%2057.974%20C%2013.822%2056.755%2011.657%2054.342%2011.51%2049.784%20C%2011.436%2047.4%2012.088%2044.992%2012.441%2042.594%20C%2012.509%2042.126%2012.71%2041.673%2012.852%2041.2%20C%2012.661%2041.112%2012.553%2041.029%2012.431%2041.014%20C%203.491%2039.762%20-1.471%2032.888%200.46%2024.06%20C%201.115%2021.077%202.116%2018.18%203.442%2015.427%20C%205.632%2010.884%208.154%206.491%2010.653%202.104%20C%2011.113%201.295%2012.063%200.627%2012.94%200.227%20C%2014.082%20-0.289%2015.222%200.14%2016.1%201.046%20C%2017.069%202.045%2017.236%203.288%2016.751%204.508%20C%2016.134%206.067%2015.33%207.559%2014.591%209.07%20C%2012.646%2013.048%2010.574%2016.977%208.791%2021.023%20C%207.89%2023.065%207.268%2025.293%206.93%2027.502%20C%206.273%2031.811%2010.016%2035.891%2014.405%2035.847%20C%2014.865%2035.842%2015.516%2035.462%2015.747%2035.067%20C%2018.103%2030.953%2021.228%2027.438%2024.358%2023.924%20C%2025.822%2022.276%2027.713%2021.944%2029.237%2022.988%20C%2030.794%2024.055%2031.191%2026.039%2030.049%2027.96%20C%2028.756%2030.129%2027.321%2032.216%2025.95%2034.336%20C%2022.903%2039.04%2020.092%2043.856%2018.637%2049.326%20C%2018.142%2051.222%2018.108%2053.064%2018.931%2054.707%20Z%22%20fill%3D%22rgb(0%2C0%2C0)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
          background-size: 100% 100%;
          image-rendering: pixelated;
        }
        .div-25 {
          height: 48px;
          position: absolute;
          right: 0px;
          top: 0px;
          width: 24px;
          pointer-events: unset;
          background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2024%2048%22%3E%3Cpath%20d%3D%22M%204.679%2031.684%20C%204.929%2030.597%205.058%2029.465%205.448%2028.436%20C%208.431%2020.569%2010.61%2012.397%2014.184%204.757%20C%2014.551%203.972%2014.907%203.159%2015.4%202.453%20C%2016.794%200.461%2019.212%20-0.197%2021.255%200.777%20C%2023.313%201.76%2024.321%204.041%2023.741%206.422%20C%2023.642%206.826%2023.517%207.234%2023.35%207.616%20C%2021.043%2012.852%2018.848%2018.145%2016.362%2023.296%20C%2014.93%2026.267%2013.066%2029.029%2011.307%2031.822%20C%2010.704%2032.782%209.898%2033.649%209.052%2034.4%20C%207.241%2036.003%205.334%2035.271%204.883%2032.863%20C%204.811%2032.489%204.815%2032.1%204.781%2031.714%20C%204.747%2031.703%204.713%2031.691%204.679%2031.683%20Z%20M%204.448%2039.647%20C%206.58%2039.625%208.329%2041.36%208.358%2043.527%20C%208.397%2045.816%206.585%2047.734%204.387%2047.734%20C%202.106%2047.734%200.249%2045.997%200.222%2043.839%20C%200.192%2041.497%202.034%2039.67%204.448%2039.647%20Z%22%20fill%3D%22rgb(0%2C0%2C0)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
          background-size: 100% 100%;
          image-rendering: pixelated;
        }
        .div-26 {
          flex-basis: 41.67%;
          flex-grow: 1;
          padding-left: 295px;
          padding-right: 12px;
          text-align: right;
          display: flex;
          flex-direction: column;
          margin-right: auto;
        }
        @media (max-width: 991px) {
          .div-26 {
            flex-basis: 100%;
            padding-left: 20px;
            text-align: center;
            width: auto;
            flex-grow: 1;
          }
        }
        .div-27 {
          max-width: 550px;
          width: 100%;
          display: flex;
          flex-direction: column;
          padding-right: 100px;
          padding-top: 20px;
          padding-left: 50px;
          padding-bottom: 20px;
          margin-right: auto;
          margin-left: auto;
        }
        @media (max-width: 991px) {
          .div-27 {
            margin-bottom: 60px;
            margin-left: auto;
            margin-right: auto;
            max-width: 460px;
          }
        }
        .h2 {
          font-size: 64px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 32px;
          color: rgba(42, 42, 42, 1);
          font-family: "Play", sans-serif;
        }
        @media (max-width: 991px) {
          .h2 {
            font-size: 30px;
            line-height: 1.33;
            margin-bottom: 20px;
          }
        }
        .a-2 {
          max-width: 475px;
          font-size: 1rem;
          color: rgba(107, 114, 128, 1);
          margin-left: auto;
          margin-bottom: 36px;
          cursor: pointer;
          pointer-events: auto;
          display: flex;
        }
        .a-3 {
          all: unset;
          display: none;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          appearance: none;
          padding-top: 15px;
          padding-bottom: 15px;
          padding-left: 25px;
          padding-right: 25px;
          background-color: black;
          color: white;
          border-radius: 4px;
          text-align: center;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .a-3 {
            font-family: "Play", sans-serif;
            display: none;
          }
        }
        @media (max-width: 640px) {
          .a-3 {
            display: none;
          }
        }
        .a-4 {
          all: unset;
          display: flex;
          padding-top: 18px;
          padding-bottom: 16px;
          padding-left: 28px;
          padding-right: 28px;
          background-color: rgba(22, 11, 54, 1);
          color: rgb(255, 255, 255);
          border-radius: 10px;
          cursor: pointer;
          border-bottom: 0px;
          border-bottom-color: rgb(255, 255, 255);
          border-left: 0px;
          border-left-color: rgb(255, 255, 255);
          border-right: 0px;
          border-right-color: rgb(255, 255, 255);
          border-top: 0px;
          border-top-color: rgb(255, 255, 255);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 27px;
          align-items: center;
          block-size: 61px;
          border-block-color: rgb(255, 255, 255);
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-end-end-radius: 10px;
          border-end-start-radius: 10px;
          border-inline-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          border-start-end-radius: 10px;
          border-start-start-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          caret-color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          inline-size: 200px;
          justify-content: center;
          outline-color: rgb(255, 255, 255);
          padding: 18px 28px 16px;
          padding-block: 18px 16px;
          padding-block-end: 16px;
          padding-block-start: 18px;
          padding-inline: 28px;
          padding-inline-end: 28px;
          padding-inline-start: 28px;
          perspective-origin: 100px 30.5px;
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          text-size-adjust: 100%;
          transform-origin: 100px 30.5px;
          width: 200px;
          border-width: 1px;
          min-width: 400px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 19px;
        }
        @media (max-width: 991px) {
          .a-4 {
            padding-top: 28px;
            padding-bottom: 28px;
            padding-right: 28px;
          }
        }
        .a-5 {
          all: unset;
          display: flex;
          margin-top: 19px;
          padding-top: 18px;
          padding-bottom: 16px;
          padding-left: 28px;
          padding-right: 28px;
          background-color: rgba(22, 11, 54, 1);
          color: rgb(255, 255, 255);
          border-radius: 10px;
          cursor: pointer;
          border-bottom: 0px;
          border-bottom-color: rgb(255, 255, 255);
          border-left: 0px;
          border-left-color: rgb(255, 255, 255);
          border-right: 0px;
          border-right-color: rgb(255, 255, 255);
          border-top: 0px;
          border-top-color: rgb(255, 255, 255);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 27px;
          align-items: center;
          block-size: 61px;
          border-block-color: rgb(255, 255, 255);
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-end-end-radius: 10px;
          border-end-start-radius: 10px;
          border-inline-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          border-start-end-radius: 10px;
          border-start-start-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          caret-color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          inline-size: 200px;
          justify-content: center;
          outline-color: rgb(255, 255, 255);
          padding: 18px 28px 16px;
          padding-block: 18px 16px;
          padding-block-end: 16px;
          padding-block-start: 18px;
          padding-inline: 28px;
          padding-inline-end: 28px;
          padding-inline-start: 28px;
          perspective-origin: 100px 30.5px;
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          text-size-adjust: 100%;
          transform-origin: 100px 30.5px;
          width: 200px;
          border-width: 1px;
          min-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 991px) {
          .a-5 {
            padding-top: 28px;
            padding-bottom: 28px;
            padding-right: 28px;
          }
        }
        .a-6 {
          all: unset;
          display: flex;
          margin-top: 19px;
          padding-top: 18px;
          padding-bottom: 16px;
          padding-left: 28px;
          padding-right: 28px;
          background-color: rgba(22, 11, 54, 1);
          color: rgb(255, 255, 255);
          border-radius: 10px;
          cursor: pointer;
          border-bottom: 0px;
          border-bottom-color: rgb(255, 255, 255);
          border-left: 0px;
          border-left-color: rgb(255, 255, 255);
          border-right: 0px;
          border-right-color: rgb(255, 255, 255);
          border-top: 0px;
          border-top-color: rgb(255, 255, 255);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 27px;
          align-items: center;
          block-size: 61px;
          border-block-color: rgb(255, 255, 255);
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-end-end-radius: 10px;
          border-end-start-radius: 10px;
          border-inline-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          border-start-end-radius: 10px;
          border-start-start-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          caret-color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          inline-size: 200px;
          justify-content: center;
          outline-color: rgb(255, 255, 255);
          padding: 18px 28px 16px;
          padding-block: 18px 16px;
          padding-block-end: 16px;
          padding-block-start: 18px;
          padding-inline: 28px;
          padding-inline-end: 28px;
          padding-inline-start: 28px;
          perspective-origin: 100px 30.5px;
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          text-size-adjust: 100%;
          transform-origin: 100px 30.5px;
          width: 200px;
          border-width: 1px;
          min-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 991px) {
          .a-6 {
            padding-top: 28px;
            padding-bottom: 28px;
            padding-right: 28px;
          }
        }
        .a-7 {
          all: unset;
          display: none;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          appearance: none;
          padding-top: 15px;
          padding-bottom: 15px;
          padding-left: 25px;
          padding-right: 25px;
          background-color: black;
          color: white;
          border-radius: 4px;
          text-align: center;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .a-7 {
            font-family: "Play", sans-serif;
            display: none;
          }
        }
        @media (max-width: 640px) {
          .a-7 {
            display: none;
          }
        }
        .a-8 {
          all: unset;
          display: flex;
          margin-top: 19px;
          padding-top: 18px;
          padding-bottom: 16px;
          padding-left: 28px;
          padding-right: 28px;
          background-color: rgba(22, 11, 54, 1);
          color: rgb(255, 255, 255);
          border-radius: 10px;
          cursor: pointer;
          border-bottom: 0px;
          border-bottom-color: rgb(255, 255, 255);
          border-left: 0px;
          border-left-color: rgb(255, 255, 255);
          border-right: 0px;
          border-right-color: rgb(255, 255, 255);
          border-top: 0px;
          border-top-color: rgb(255, 255, 255);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 27px;
          align-items: center;
          block-size: 61px;
          border-block-color: rgb(255, 255, 255);
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-end-end-radius: 10px;
          border-end-start-radius: 10px;
          border-inline-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          border-start-end-radius: 10px;
          border-start-start-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          caret-color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          inline-size: 200px;
          justify-content: center;
          outline-color: rgb(255, 255, 255);
          padding: 18px 28px 16px;
          padding-block: 18px 16px;
          padding-block-end: 16px;
          padding-block-start: 18px;
          padding-inline: 28px;
          padding-inline-end: 28px;
          padding-inline-start: 28px;
          perspective-origin: 100px 30.5px;
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          text-size-adjust: 100%;
          transform-origin: 100px 30.5px;
          width: 200px;
          border-width: 1px;
          min-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 991px) {
          .a-8 {
            padding-top: 28px;
            padding-bottom: 28px;
            padding-right: 28px;
          }
        }
      `}</style>
    </>
			{/* <Looking /> */}
			<FeaturedProjects />
			<About />
			<Technical />
			{/* <Career /> */}
		</>
	);
}
