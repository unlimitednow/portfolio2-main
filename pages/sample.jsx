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
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <h1 className="h1">
              <p>With Lillie Dashboard</p>
            </h1>
            <div className="div-4">Select an option below</div>
            <div className="div-5">
              <a href="https://developers.unlimitednow.me/about" className="a">
                <div className="div-6">
                  <p>View Docs</p>
                </div>
              </a>
              <a href="https://feed.unlimitpotential.com/" className="a-2">
                <div className="div-7">
                  <p>Get Started</p>
                </div>
              </a>
            </div>
          </div>
          <div className="div-8">
            <RawImg
              loading="lazy"
              alt=""
              image="https://s3.amazonaws.com/appforest_uf/f1623580069971x921886834731931400/technology%20devices-0IYN.png"
              className="raw-img"
            />
            <div className="div-9" lockAspectRatio={false}>
              <picture>
                <source
                  srcset="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
                  srcset="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
                  className="image"
                />
              </picture>
              <div className="builder-image-sizer image-sizer" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          width: 100vw;
          margin-left: auto;
          padding-left: 85px;
          padding-right: 85px;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          background-color: rgba(255, 255, 255, 1);
        }
        @media (max-width: 640px) {
          .div {
            width: 100vw;
            align-self: center;
            margin-left: calc(50% - 50vw);
            padding-left: 20px;
          }
        }
        .div-2 {
          border-bottom: 0px;
          border-bottom-color: rgb(92, 98, 120);
          border-color: rgb(92, 98, 120);
          border-left: 0px;
          border-left-color: rgb(92, 98, 120);
          border-right: 0px;
          border-right-color: rgb(92, 98, 120);
          border-top: 0px;
          border-top-color: rgb(92, 98, 120);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 27px;
          align-items: center;
          block-size: 762px;
          border-block-color: rgb(92, 98, 120);
          border-block-end-color: rgb(92, 98, 120);
          border-block-start-color: rgb(92, 98, 120);
          border-inline-color: rgb(92, 98, 120);
          border-inline-end-color: rgb(92, 98, 120);
          border-inline-start-color: rgb(92, 98, 120);
          caret-color: rgb(92, 98, 120);
          color: rgb(92, 98, 120);
          column-rule-color: rgb(92, 98, 120);
          display: flex;
          inline-size: 1165px;
          justify-content: space-between;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(92, 98, 120);
          perspective-origin: 582.5px 381px;
          text-decoration: none solid rgb(92, 98, 120);
          text-decoration-color: rgb(92, 98, 120);
          text-size-adjust: 100%;
          width: 100vw;
          margin-left: auto;
          margin-right: auto;
          max-width: 1200px;
          max-height: 599px;
          padding-left: 65px;
          padding-right: 100px;
        }
        @media (max-width: 991px) {
          .div-2 {
            width: auto;
            align-self: center;
          }
        }
        @media (max-width: 640px) {
          .div-2 {
            width: auto;
            align-self: center;
          }
        }
        .div-3 {
          border-bottom: 0px;
          border-bottom-color: rgb(92, 98, 120);
          border-color: rgb(92, 98, 120);
          border-left: 0px;
          border-left-color: rgb(92, 98, 120);
          border-right: 0px;
          border-right-color: rgb(92, 98, 120);
          border-top: 0px;
          border-top-color: rgb(92, 98, 120);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 27px;
          block-size: 461.375px;
          border-block-color: rgb(92, 98, 120);
          border-block-end-color: rgb(92, 98, 120);
          border-block-start-color: rgb(92, 98, 120);
          border-inline-color: rgb(92, 98, 120);
          border-inline-end-color: rgb(92, 98, 120);
          border-inline-start-color: rgb(92, 98, 120);
          caret-color: rgb(92, 98, 120);
          color: rgb(92, 98, 120);
          column-rule-color: rgb(92, 98, 120);
          inline-size: 470px;
          max-inline-size: 470px;
          max-width: 470px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(92, 98, 120);
          perspective-origin: 235px 230.688px;
          text-decoration: none solid rgb(92, 98, 120);
          text-decoration-color: rgb(92, 98, 120);
          text-size-adjust: 100%;
          transform-origin: 235px 230.688px;
          margin-top: auto;
          margin-bottom: auto;
          padding-top: 50px;
        }
        @media (max-width: 640px) {
          .div-3 {
            width: auto;
            flex-grow: 0;
            display: flex;
            flex-direction: column;
          }
        }
        .h1 {
          border-bottom: 0px;
          border-bottom-color: rgb(51, 51, 51);
          border-color: rgb(51, 51, 51);
          border-left: 0px;
          border-left-color: rgb(51, 51, 51);
          border-right: 0px;
          border-right-color: rgb(51, 51, 51);
          border-top: 0px;
          border-top-color: rgb(51, 51, 51);
          font-family: "Play", sans-serif;
          font-size: 64px;
          font-weight: 900;
          line-height: 81.6px;
          margin-bottom: 30px;
          block-size: 244.781px;
          border-block-color: rgb(51, 51, 51);
          border-block-end-color: rgb(51, 51, 51);
          border-block-start-color: rgb(51, 51, 51);
          border-inline-color: rgb(51, 51, 51);
          border-inline-end-color: rgb(51, 51, 51);
          border-inline-start-color: rgb(51, 51, 51);
          caret-color: rgb(51, 51, 51);
          color: rgba(22, 11, 54, 1);
          column-rule-color: rgb(51, 51, 51);
          inline-size: 470px;
          margin: 0px 0px 30px;
          margin-block: 0px 30px;
          margin-block-end: 30px;
          outline-color: rgb(51, 51, 51);
          perspective-origin: 235px 122.391px;
          text-decoration: none solid rgb(51, 51, 51);
          text-decoration-color: rgb(51, 51, 51);
          text-size-adjust: 100%;
          transform-origin: 235px 122.391px;
          height: auto;
          flex-grow: 0;
        }
        @media (max-width: 991px) {
          .h1 {
            font-family: "Play", sans-serif;
            font-weight: 900;
          }
        }
        @media (max-width: 640px) {
          .h1 {
            width: auto;
            align-self: center;
            margin-top: -70px;
            padding-right: 129px;
            padding-left: 5px;
          }
        }
        .div-4 {
          border-bottom: 0px;
          border-bottom-color: rgb(102, 102, 102);
          border-color: rgb(102, 102, 102);
          border-left: 0px;
          border-left-color: rgb(102, 102, 102);
          border-right: 0px;
          border-right-color: rgb(102, 102, 102);
          border-top: 0px;
          border-top-color: rgb(102, 102, 102);
          font-family: Colfax, sans-serif;
          font-size: 24px;
          line-height: 33.6px;
          margin-bottom: 50px;
          block-size: 33.5938px;
          border-block-color: rgb(102, 102, 102);
          border-block-end-color: rgb(102, 102, 102);
          border-block-start-color: rgb(102, 102, 102);
          border-inline-color: rgb(102, 102, 102);
          border-inline-end-color: rgb(102, 102, 102);
          border-inline-start-color: rgb(102, 102, 102);
          caret-color: rgb(102, 102, 102);
          color: rgb(102, 102, 102);
          column-rule-color: rgb(102, 102, 102);
          inline-size: 470px;
          margin-block-end: 50px;
          outline-color: rgb(102, 102, 102);
          perspective-origin: 235px 16.7969px;
          text-decoration: none solid rgb(102, 102, 102);
          text-decoration-color: rgb(102, 102, 102);
          text-size-adjust: 100%;
          transform-origin: 235px 16.7969px;
        }
        @media (max-width: 640px) {
          .div-4 {
            width: auto;
            align-self: center;
            margin-left: -106px;
            margin-bottom: 20px;
          }
        }
        .div-5 {
          border-bottom: 0px;
          border-bottom-color: rgb(92, 98, 120);
          border-color: rgb(92, 98, 120);
          border-left: 0px;
          border-left-color: rgb(92, 98, 120);
          border-right: 0px;
          border-right-color: rgb(92, 98, 120);
          border-top: 0px;
          border-top-color: rgb(92, 98, 120);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 27px;
          margin-bottom: 40px;
          margin-top: 40px;
          align-items: center;
          block-size: 63px;
          border-block-color: rgb(92, 98, 120);
          border-block-end-color: rgb(92, 98, 120);
          border-block-start-color: rgb(92, 98, 120);
          border-inline-color: rgb(92, 98, 120);
          border-inline-end-color: rgb(92, 98, 120);
          border-inline-start-color: rgb(92, 98, 120);
          caret-color: rgb(92, 98, 120);
          color: rgb(92, 98, 120);
          column-rule-color: rgb(92, 98, 120);
          display: flex;
          inline-size: 420px;
          justify-content: space-between;
          margin: 40px 0px;
          margin-block: 40px;
          margin-block-end: 40px;
          margin-block-start: 40px;
          max-inline-size: 420px;
          max-width: 420px;
          outline-color: rgb(92, 98, 120);
          perspective-origin: 210px 31.5px;
          text-decoration: none solid rgb(92, 98, 120);
          text-decoration-color: rgb(92, 98, 120);
          text-size-adjust: 100%;
          transform-origin: 210px 31.5px;
        }
        @media (max-width: 640px) {
          .div-5 {
            width: auto;
            align-self: center;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            margin-left: 80px;
            margin-right: auto;
          }
        }
        .a {
          color: rgb(255, 255, 255);
          text-decoration: none rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          border-bottom: 0px;
          border-bottom-color: rgb(255, 255, 255);
          border-color: rgb(255, 255, 255);
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
          block-size: 61px;
          border-block-color: rgb(255, 255, 255);
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          caret-color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          cursor: pointer;
          display: inline-block;
          inline-size: 200px;
          max-inline-size: 100%;
          max-width: 100%;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(255, 255, 255);
          perspective-origin: 100px 30.5px;
          text-size-adjust: 100%;
          transform-origin: 100px 30.5px;
          pointer-events: auto;
        }
        .div-6 {
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
          padding-bottom: 16px;
          padding-left: 28px;
          padding-right: 28px;
          padding-top: 18px;
          align-items: center;
          background-color: rgba(22, 11, 54, 1);
          block-size: 27px;
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
          border-radius: 10px;
          border-start-end-radius: 10px;
          border-start-start-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          cursor: pointer;
          display: flex;
          inline-size: 99.6016px;
          justify-content: center;
          outline-color: rgb(255, 255, 255);
          padding: 18px 28px 16px;
          padding-block: 18px 16px;
          padding-block-end: 16px;
          padding-block-start: 18px;
          padding-inline: 28px;
          padding-inline-end: 28px;
          padding-inline-start: 28px;
          perspective-origin: 49.7969px 13.5px;
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          text-size-adjust: 100%;
          transform-origin: 49.8008px 13.5px;
          width: 200px;
          border-width: 1px;
          border-color: rgb(255, 255, 255);
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
        }
        @media (max-width: 991px) {
          .div-6 {
            padding-top: 28px;
            padding-bottom: 28px;
            padding-right: 28px;
          }
        }
        .a-2 {
          color: rgb(255, 255, 255);
          text-decoration: none rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          border-bottom: 0px;
          border-bottom-color: rgb(255, 255, 255);
          border-color: rgb(255, 255, 255);
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
          block-size: 63px;
          border-block-color: rgb(255, 255, 255);
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          caret-color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          cursor: pointer;
          display: inline-block;
          inline-size: 200px;
          max-inline-size: 100%;
          max-width: 100%;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(255, 255, 255);
          perspective-origin: 100px 31.5px;
          text-size-adjust: 100%;
          transform-origin: 100px 31.5px;
          pointer-events: auto;
        }
        @media (max-width: 640px) {
          .a-2 {
            margin-top: 29px;
          }
        }
        .div-7 {
          border-bottom: 0px;
          border-bottom-color: rgb(51, 51, 51);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgb(51, 51, 51);
          border-left: 0px;
          border-left-color: rgb(51, 51, 51);
          border-left-style: solid;
          border-left-width: 1px;
          border-right: 0px;
          border-right-color: rgb(51, 51, 51);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgb(51, 51, 51);
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          font-family: Colfax, sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 27px;
          padding-bottom: 16px;
          padding-left: 28px;
          padding-right: 28px;
          padding-top: 18px;
          align-items: center;
          background-color: rgb(255, 255, 255);
          block-size: 27px;
          border-block: 1px solid rgb(51, 51, 51);
          border-block-color: rgb(51, 51, 51);
          border-block-end: 1px solid rgb(51, 51, 51);
          border-block-end-color: rgb(51, 51, 51);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(51, 51, 51);
          border-block-start-color: rgb(51, 51, 51);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-end-end-radius: 10px;
          border-end-start-radius: 10px;
          border-inline: 1px solid rgb(51, 51, 51);
          border-inline-color: rgb(51, 51, 51);
          border-inline-end: 1px solid rgb(51, 51, 51);
          border-inline-end-color: rgb(51, 51, 51);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(51, 51, 51);
          border-inline-start-color: rgb(51, 51, 51);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-radius: 10px;
          border-start-end-radius: 10px;
          border-start-start-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          caret-color: rgb(51, 51, 51);
          color: rgb(51, 51, 51);
          column-rule-color: rgb(51, 51, 51);
          display: flex;
          inline-size: 126.453px;
          justify-content: center;
          outline-color: rgb(51, 51, 51);
          padding: 18px 28px 16px;
          padding-block: 18px 16px;
          padding-block-end: 16px;
          padding-block-start: 18px;
          padding-inline: 28px;
          padding-inline-end: 28px;
          padding-inline-start: 28px;
          perspective-origin: 63.2266px 13.5px;
          text-decoration: none solid rgb(51, 51, 51);
          text-decoration-color: rgb(51, 51, 51);
          text-size-adjust: 100%;
          transform-origin: 63.2266px 13.5px;
          width: 200px;
          pointer-events: auto;
          cursor: pointer;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          text-align: center;
        }
        @media (max-width: 991px) {
          .div-7 {
            text-align: center;
          }
        }
        .div-8 {
          border-bottom: 0px;
          border-bottom-color: rgb(92, 98, 120);
          border-color: rgb(92, 98, 120);
          border-left: 0px;
          border-left-color: rgb(92, 98, 120);
          border-right: 0px;
          border-right-color: rgb(92, 98, 120);
          border-top: 0px;
          border-top-color: rgb(92, 98, 120);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 27px;
          block-size: 762px;
          border-block-color: rgb(92, 98, 120);
          border-block-end-color: rgb(92, 98, 120);
          border-block-start-color: rgb(92, 98, 120);
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border-end-end-radius: 5px;
          border-end-start-radius: 5px;
          border-inline-color: rgb(92, 98, 120);
          border-inline-end-color: rgb(92, 98, 120);
          border-inline-start-color: rgb(92, 98, 120);
          border-radius: 5px;
          border-start-end-radius: 5px;
          border-start-start-radius: 5px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          caret-color: rgb(92, 98, 120);
          color: rgb(92, 98, 120);
          column-rule-color: rgb(92, 98, 120);
          display: flex;
          height: auto;
          inline-size: 621px;
          max-inline-size: 621px;
          max-width: 621px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(92, 98, 120);
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          perspective-origin: 310.5px 381px;
          text-decoration: none solid rgb(92, 98, 120);
          text-decoration-color: rgb(92, 98, 120);
          text-size-adjust: 100%;
          transform-origin: 310.5px 381px;
          margin-right: auto;
          align-self: center;
        }
        .raw-img {
          border-bottom: 0px;
          border-bottom-color: rgb(92, 98, 120);
          border-color: rgb(92, 98, 120);
          border-left: 0px;
          border-left-color: rgb(92, 98, 120);
          border-right: 0px;
          border-right-color: rgb(92, 98, 120);
          border-top: 0px;
          border-top-color: rgb(92, 98, 120);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 27px;
          vertical-align: middle;
          block-size: 762px;
          border-block-color: rgb(92, 98, 120);
          border-block-end-color: rgb(92, 98, 120);
          border-block-start-color: rgb(92, 98, 120);
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border-end-end-radius: 5px;
          border-end-start-radius: 5px;
          border-inline-color: rgb(92, 98, 120);
          border-inline-end-color: rgb(92, 98, 120);
          border-inline-start-color: rgb(92, 98, 120);
          border-radius: 5px;
          border-start-end-radius: 5px;
          border-start-start-radius: 5px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          caret-color: rgb(92, 98, 120);
          color: rgb(92, 98, 120);
          column-rule-color: rgb(92, 98, 120);
          display: none;
          height: 762px;
          inline-size: 621px;
          max-inline-size: 100%;
          max-width: 100%;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          object-fit: contain;
          outline-color: rgb(92, 98, 120);
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          perspective-origin: 310.5px 381px;
          text-decoration: none solid rgb(92, 98, 120);
          text-decoration-color: rgb(92, 98, 120);
          text-size-adjust: 100%;
          transform-origin: 310.5px 381px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .raw-img {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .raw-img {
            display: none;
          }
        }
        .div-9 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-left: 20px;
          width: 100%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
        }
        .image {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer {
          width: 100%;
          padding-top: 70.41%;
          pointer-events: none;
          font-size: 0;
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
