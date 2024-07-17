"use client";

import { genThresholds } from "@/utils";
import Image from "next/image";
import React from "react";

export default function Home() {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((targets) => {
      if (targets[0].isIntersecting)
        window.addEventListener("scroll", () => {
          const windowHeight = window.innerHeight;
          const distanceToTopOfViewport =
            ref.current?.getBoundingClientRect().top ?? 0;
          const scrolled =
            (windowHeight - distanceToTopOfViewport) / windowHeight;

          ref.current?.style.setProperty("--percentage", scrolled * -0.5 + "s");
        });
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Section One */}
      <div className="h-dvh text-white relative flex justify-center items-center">
        <video
          className="absolute h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-example.mp4" type="video/mp4" />
        </video>

        <div className="container px-10 space-y-5">
          <h1 className="text-4xl font-bold relative text-center">
            關愛與舒適的家園
          </h1>
          <h2 className="text-3xl font-medium relative text-center ">
            Where Care Meets Comfort
          </h2>

          <p
            className="relative animate-text-blur blur"
            style={{
              animationFillMode: "forwards",
            }}
          >
            我們致力於為長者提供安全、舒適、和關懷備至的生活環境。我們的目標是讓每位長者在這裡感受到家的溫暖，享受有尊嚴、有品質的生活。我們相信，每一位長者都值得擁有快樂和安心的晚年生活。
          </p>
        </div>
      </div>

      {/* Section Two */}
      <div className="grid-cols-2 container grid mx-auto py-20 gap-y-10">
        <header className="col-span-2 space-y-3 ">
          <h2 className="text-center text-green-700 text-3xl font-bold">
            石忍寺起流勿步長助
          </h2>
          <h3 className="text-center text-green-600 text-2xl font-medium">
            五尼念休寫牛晚苦，告時反那說什。
          </h3>
        </header>

        <div className="px-10 space-y-5">
          <p className="font-medium text-green-700"> 太足目呢姊良怪從尺刀</p>
          <p>
            司更校父；反童造、汁哥老現叫書詞共向己用昌功日定裏。兩主還子青樹洋英送采乾，故馬八重。五尼念休寫牛晚苦，告時反那說什。
            着要現穿亭七燈采吧神汁買門蝸邊何？斥後了，買豆花浪娘包未女月百遠物羊小四。右長躲戶耳耍院園古水、老也活冒，勿害兌直。
            錯姐央國意姐陽馬爸見枝穴巴，帽高兌言遠犬；姊友壯土飛姐候何孝綠從晚昌。松秋進衣，壯首想尺世童坡追黑兆尺送、頭躲食犬。
            寺新地嗎「紅告」教喝二朱長母婆過尺；親媽好位一汁雞坐自，什毛娘苗行每乞步她交都道常百澡他河；魚胡免園晚畫蝴力書鳥即看，把金可文。
            蝴手哪虎皮國消犬蛋松月着青放澡您王，皮外共巴士左結課借記乍怎貫陽刀男教呀？以青因一福中兆犬，旦彩花寸帽方寺回貓從吃七。
          </p>
        </div>
        <div className="relative">
          <Image
            fill
            className="w-full object-contain "
            src="/golf1.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Section Three */}
      <div className="h-[768px] relative overflow-hidden" ref={ref}>
        <div
          className="absolute w-full h-[120%] bg-center bg-cover "
          style={{
            backgroundImage: 'url("/mountainous.jpg")',
            animationPlayState: "paused",
            animationDelay: "var(--percentage)",
            animationName: "bg-scroll",
            animationFillMode: "both",
            animationDuration: "1s",
          }}
        />

        <div className="w-full bg-gradient-to-r from-sky-500 to-indigo-500/0 h-full relative  ">
          <div className="max-w-[660px] px-12 pt-20 text-white space-y-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">枝師錯牠經記坐它</h2>
              <p>
                抱高詞進山條拉。王清星五貝、乾品到半貓停戶成綠拍亭半常「請鴨假色」卜黑開年寫外哭道石己「友升筆」再點身原清洋坡坐植苦雨休掃書嗎樹方問北結。室唱巴坐種斗弓愛故？彩看古。
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold">央食看院意昔兆</h3>
              <p>
                北邊一向問圓鴨早。教公肖月扒學司者根邊申王。走兌乞孝要歡布完乍亭叫尾呢聽娘許但跟平方，神同讀馬了工昌；良尤元多南。
              </p>
              <p>
                牠固吃弟燈牠昔買文共采跑，三怎意經民裝友才！口多北路毛園坐亭汗？課進原鳥人澡西西而開免免得得房貓許，呢尾兩那苦裝園自立說「化」他蝶視澡動定兩跑。孝流間戊完竹有。
              </p>
            </div>

            <button className="border border-white px-4 py-2 ">瞭解更多</button>
          </div>
        </div>
      </div>
    </main>
  );
}
