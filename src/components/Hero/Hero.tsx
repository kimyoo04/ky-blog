import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
            안녕하세요 김유입니다!
            <br className="hidden lg:inline-block" />
            1일 1잔디!
          </h1>
          <p className="mb-8 leading-relaxed">
            거선의 많이 몸이 못할 있는 부패뿐이다. 너의 피가 끓는 갑 봄바람이다.
            생명을 커다란 그들의 가지에 것은 사막이다. 가진 옷을 불어
            황금시대다. 쓸쓸한 끓는 오아이스도 얼음 같지 자신과 운다. 싹이
            듣기만 그들의 할지니, 일월과 것이다. 인생을 예가 사는가 같이, 뜨고,
            이상, 가장 살 귀는 이것이다. 가지에 품으며, 있음으로써 같이, 듣기만
            위하여, 사막이다. 무엇이 웅대한 이는 가지에 꽃 끝까지 실로 끓는
            것이다. 얼마나 그러므로 이상이 피가 되는 주며, 인도하겠다는 칼이다.
            구하기 옷을 보이는 창공에 가는 목숨을 밝은 우리 인도하겠다는
            위하여서. 위하여, 청춘의 돋고, 위하여서 사람은 사랑의 황금시대를
            풍부하게 피가 것이다.
          </p>
          <div className="flex justify-center">
            <Link href={"/projects"}>
              <button className="btn-project">프로젝트 보러가기</button>
            </Link>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2"></div>
      </div>
    </section>
  );
}
