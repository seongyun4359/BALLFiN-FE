import BotButton from "@/components/chat/BotButton";
import MarketOverview from "@/components/home/MarketOverview";
import PopularStocks from "@/components/home/PopularStocks";
import TrendingKeywords from "@/components/home/TrendingKeywords";
import TrendingNews from "@/components/home/TrendingNews";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 환영 메시지 및 실시간 인기 뉴스 */}
      <div className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="pl-20 lg:col-span-2">
          <h1 className="text-2xl font-bold text-gray-900">
            안녕하세요, Barbell님!{" "}
            <span className="text-[#0A5C2B]">AI 투자 인사이트</span>가
            준비되었습니다.
          </h1>
          <button className="mt-4 px-6 py-2 bg-[#0A5C2B] w-40 text-white rounded-lg hover:bg-[#0A5C2B]/90 transition-colors">
            투자 시작하기
          </button>
        </div>
        <div>
          <TrendingNews />
        </div>
      </div>

      {/* 시장 개요 */}
      <div className="mb-8">
        <MarketOverview />
      </div>

      {/* 인기 종목 및 키워드 */}
      <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-2">
        <PopularStocks />
        <TrendingKeywords />
      </div>

      {/* 챗봇 버튼 */}
      <BotButton />
    </div>
  );
};

export default Home;
