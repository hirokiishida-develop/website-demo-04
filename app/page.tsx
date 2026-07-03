import Image from "next/image";
import Link from "next/link";
import FvSlider from "@/components/FvSlider";
import FvCard from "@/components/FvCard";
import Section from "@/components/Section";
import SectionLine from "@/components/SectionLine";
import SectionTitle from "@/components/SectionTitle";
import SectionMain from "@/components/SectionMain";
import SectionLabel from "@/components/SectionLabel";
import FullScreenWrapper from "@/components/FullScreenWrapper";
import NewsCard from "@/components/NewsCard";
import BoxButton from "@/components/BoxButton";
import RoundedButton from "@/components/RoundedButton";
import CategoryButton from "@/components/CategoryButton";
import ParallaxItem from "@/components/ParallaxItem";
import FacilityCard from "@/components/FacilityCard";

export default function Home() {
  return (
    <>
      <div className="px-1.25">
        <div className="relative w-full h-[calc(100svh-33.3333vw-0.33334rem)] pt-1.25">
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="flex absolute bottom-0 left-2">
              <p className="order-2 text-white text-[10px] leading-[1.4] writing-vertical-rl">
                <span>（</span>
                LIVING, ART AND SCENERY
                <span>）</span>
              </p>
              <p className="order-1 text-white text-[38px] tracking-[0.07em] leading-[1.1] writing-vertical-rl">生活と、<br />アートと、<br />風景。</p>
            </div>
          </div>
          <div className="relative w-full h-full rounded-[5px] overflow-hidden">
            <div className="absolute top-[-5px] left-0 w-full h-[calc(100%+10px)]">
              <div className="w-full h-full translate-y-[0lvh] transition-[transform 2s cubic-bezier(.19,1,.22,1) 0.5s]">
                <FvSlider />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-1.25 mt-1.25">
          <FvCard title="生活美術館" url="#" img="museum" />
          <FvCard title="未来食堂" url="#" img="restaurant" />
          <FvCard title="cafe mirai" url="#" img="cafe" />
        </div>
      </div>

      <Section>
        <SectionLine>
          <SectionTitle text="お知らせ" />
        </SectionLine>
        <SectionMain>
          <div className="order-2">
            <SectionLabel className="left-2.5" text="NEWS" />
            <ul className="flex flex-wrap items-start justify-center gap-1.25 w-[calc(100%-80px)] my-5 mx-auto">
              <CategoryButton url="#" text="お知らせ" />
              <CategoryButton url="#" text="生活美術館" />
              <CategoryButton url="#" text="未来食堂" />
              <CategoryButton url="#" text="cafe mirai" />
              <CategoryButton url="#" text="企画展情報" />
              <CategoryButton url="#" text="メディア掲載" />
            </ul>
            <div className="max-w-33.75 mx-auto">
              <BoxButton url="" text="一覧へ" />
            </div>
          </div>
          <div className="flex flex-row gap-x-1.25 overflow-x-auto order-1 scrollbar-none">
            <NewsCard url="#" img="info_01" date="2026.04.01" category="お知らせ" title="【2026年度　春の展示替え～会期はじまり】" views="599" />
            <NewsCard url="#" img="info_02" date="2026.06.17" category="お知らせ" title="せきがはら人間村文化講演会2026が開催されました。" views="72" />
            <NewsCard url="#" img="info_03" date="2026.03.27" category="お知らせ" title="2026年6⽉13⽇（⼟）  ～せきがはら人間村文化講演会〜" views="690" />
          </div>
        </SectionMain>
      </Section>

      <Section>
        <SectionLine>
          <SectionTitle className="justify-end" text="せきがはら人間村とは" />
        </SectionLine>
        <SectionMain>
          <ParallaxItem className="rounded-1.25 aspect-square overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src="/images/home/about_img01.jpg"
              alt="せきがはら人間村とは"
              width={365}
              height={365}
            />
          </ParallaxItem>
          <div className="flex flex-row flex-wrap justify-start mt-7.25 px-2.5">
            <SectionLabel className="right-2.5" text="ABOUT" />
            <div className="flex flex-row justify-start items-start relative top-0 left-auto right-auto">
              <p className="order-2 text-[10px] leading-[1.4] writing-vertical-rl">
                <span>（</span>
                &nbsp;ABOUT&nbsp;
                <span>）</span>
              </p>
              <p className="order-1 text-[24px] tracking-[0.07em] leading-[1.3] writing-vertical-rl ml-0.75">ここにしかない<br />景色とアートと食体験で<br />豊かな時間を</p>
            </div>
            <div className="order-[-1] w-52.5 mt-12.5 mr-auto">
              <p className="text-sm leading-[1.71]">せきがはら人間村は1980年代後半に、機械メーカーの関ケ原製作所が社員主体で取り組んだ環境整備に端を発しています。それは「限りなく人間ひろばを求めて」という理念から。四季折々の美しい自然とアートが溶け合う「工場公園」を作り、社員同士が愉しさや、つながり、やりがいを感じながら社会に対して新たな価値を創造していく。挑戦はやがて、美術館、レストラン、カフェの展開へと翼を広げ、どこにもない特別な風景、そして地域との交流が生まれていきました。</p>
              <p className="text-sm leading-[1.71] mt-6">現在は一企業の取り組みの枠を超え、広く一般の方々にもご利用いただける場所として開放しています。ここにしかない景色とアートと食体験で、豊かな時間をお過ごしください。</p>
            </div>
            <div className="w-full mt-10">
              <div className="max-w-33.75 mx-auto">
                <BoxButton url="" text="一覧へ" />
              </div>
            </div>
          </div>
        </SectionMain>
      </Section>

      <Section>
        <FullScreenWrapper>
          <div className="absolute top-[-10px] left-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)]">
            <div className="relative w-full h-full overflow-hidden film-layer">
              <ParallaxItem className="w-full h-full">
                <video className="block relative w-full h-full object-cover" src="/video/p10_movie.mp4" muted autoPlay loop playsInline poster="/images/home/p10_movie.jpg"></video>
              </ParallaxItem>
              <div className="flex flex-row items-start justify-self-start absolute top-5 left-3.75 z-5">
                <p className="order-2 text-white text-[10px] leading-[1.4] writing-vertical-rl">
                  <span>（</span>
                  &nbsp;MOVIE&nbsp;
                  <span>）</span>
                </p>
                <p className="order-1 text-white text-[24px] tracking-[0.07em] leading-[1.1] writing-vertical-rl">あるく、<br />はばたく、<br />めぐる。</p>
              </div>
            </div>
          </div>
          <RoundedButton className="absolute top-1/2 left-1/2 -translate-1/2 z-5" url="#" text="動画を見る" />
        </FullScreenWrapper>
        {/* movie */}
        <FullScreenWrapper>
          <div className="absolute top-[-10px] left-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)]">
            <div className="relative w-full h-full overflow-hidden film-layer">
              <ParallaxItem className="w-full h-full">
                <Image
                  className="w-full h-full object-cover"
                  src="/images/home/museum_bg.jpg"
                  alt=""
                  width={1420}
                  height={1372}
                />
              </ParallaxItem>
              <div className="flex flex-row items-start justify-self-start absolute top-5 right-3.75 z-5">
                <p className="order-2 text-white text-[10px] leading-[1.4] writing-vertical-rl ">
                  <span>（</span>
                  &nbsp;MUSEUM&nbsp;
                  <span>）</span>
                </p>
                <p className="order-1 text-white text-[24px] tracking-[0.07em] leading-[1.1] writing-vertical-rl">せきがはら人間村<br className="hidden" />生活美術館</p>
              </div>
            </div>
          </div>
          {/* content */}
          <div className="absolute top-1/2 left-1/2 -translate-1/2 w-56.25 h-auto pt-1.25 pb-5 px-1.25 bg-white rounded-[5px] z-2">
            <ParallaxItem className="w-full h-53.75 rounded-[5px] overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="/images/home/museum_img.jpg"
                alt="せきがはら人間村生活美術館"
                width={580}
                height={386}
              />
            </ParallaxItem>
            <p className="text-sm leading-[1.7] text-center mt-2.5">365日いつでも散策を<br />楽しめる緑地エリアと、<br />ガイドツアー形式（予約制）で<br />見学できるエリアがあります。</p>
            <div className="w-33.75 mt-3.75 mx-auto">
              <BoxButton url="#" text="詳細へ" />
            </div>
          </div>
        </FullScreenWrapper>
        {/* movie */}
        <FullScreenWrapper>
          <div className="absolute top-[-10px] left-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)]">
            <div className="relative w-full h-full overflow-hidden film-layer">
              <ParallaxItem className="w-full h-full">
                <Image
                  className="w-full h-full object-cover"
                  src="/images/home/restaurant_bg.jpg"
                  alt=""
                  width={1420}
                  height={1372}
                />
              </ParallaxItem>
              <div className="flex flex-row items-start justify-self-start absolute top-5 left-3.75 z-5">
                <p className="order-2 text-white text-[10px] leading-[1.4] writing-vertical-rl ">
                  <span>（</span>
                  &nbsp;Restaurant&nbsp;
                  <span>）</span>
                </p>
                <p className="order-1 text-white text-[24px] tracking-[0.07em] leading-[1.1] writing-vertical-rl">未来食堂</p>
              </div>
            </div>
          </div>
          {/* content */}
          <div className="absolute top-1/2 left-1/2 -translate-1/2 w-56.25 h-auto pt-1.25 pb-5 px-1.25 bg-white rounded-[5px] z-2">
            <ParallaxItem className="w-full h-53.75 rounded-[5px] overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="/images/home/restaurant_img.jpg"
                alt="未来食堂"
                width={580}
                height={386}
              />
            </ParallaxItem>
            <p className="text-sm leading-[1.7] text-center mt-2.5">関ケ原の自然とアートが織りなす<br />豊かな景色の中で、お食事を。<br /> 社員によるおもてなしも<br />お楽しみください。</p>
            <div className="w-33.75 mt-3.75 mx-auto">
              <BoxButton url="#" text="詳細へ" />
            </div>
          </div>
        </FullScreenWrapper>
        {/* restaurant */}
        <FullScreenWrapper>
          <div className="absolute top-[-10px] left-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)]">
            <div className="relative w-full h-full overflow-hidden film-layer">
              <ParallaxItem className="w-full h-full">
                <Image
                  className="w-full h-full object-cover"
                  src="/images/home/cafe_bg.jpg"
                  alt=""
                  width={1420}
                  height={1372}
                />
              </ParallaxItem>
              <div className="flex flex-row items-start justify-self-start absolute top-5 right-3.75 z-5">
                <p className="order-2 text-white text-[10px] leading-[1.4] writing-vertical-rl ">
                  <span>（</span>
                  &nbsp;Cafe&nbsp;
                  <span>）</span>
                </p>
                <p className="order-1 text-white text-[24px] tracking-[0.07em] leading-[1.1] writing-vertical-rl">cafe mirai</p>
              </div>
            </div>
          </div>
          {/* content */}
          <div className="absolute top-1/2 left-1/2 -translate-1/2 w-56.25 h-auto pt-1.25 pb-5 px-1.25 bg-white rounded-[5px] z-2">
            <ParallaxItem className="w-full h-53.75 rounded-[5px] overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="/images/home/cafe_img.jpg"
                alt="cafe mirai"
                width={580}
                height={386}
              />
            </ParallaxItem>
            <p className="text-sm leading-[1.7] text-center mt-2.5">こだわりの自家製スイーツと<br />一杯立ての珈琲などをご用意。<br /> 史跡巡りの合間に<br />ぜひお立ち寄りください。</p>
            <div className="w-33.75 mt-3.75 mx-auto">
              <BoxButton url="#" text="詳細へ" />
            </div>
          </div>
        </FullScreenWrapper>
        {/* cafe */}
      </Section>

      <Section>
        <SectionLine>
          <SectionTitle text="ご利用案内" />
        </SectionLine>
        <SectionMain className="mt-7.5 pt-22.5">
          <div className="flex flex-row flex-wrap justify-start gap-[1px] rounded-[5px] overflow-hidden">
            <FacilityCard text="生活美術館" img="facility_img1" />
            <FacilityCard text="ガイドツアー" img="facility_img2" />
            <FacilityCard text="未来食堂" img="facility_img3" />
            <FacilityCard text="cafe mirai" img="facility_img4" />
          </div>
          <SectionLabel className="left-2.5" text="FACILITY GUIDE" />
          <div className="flex flex-row justify-start items-start relative top-0 left-auto right-auto">
            <p className="order-2 text-[10px] leading-[1.4] writing-vertical-rl">
              <span>（</span>
              &nbsp;ABOUT&nbsp;
              <span>）</span>
            </p>
            <p className="order-1 text-[24px] tracking-[0.07em] leading-[1.3] writing-vertical-rl ml-0.75">ここにしかない<br />景色とアートと食体験で<br />豊かな時間を</p>
          </div>
        </SectionMain>
      </Section>


    </>


  );
}
