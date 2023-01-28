import Footer from "@layouts/Footer/Footer";
import Header from "@layouts/Header/Header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="fixed top-0 w-full">
        <Header />
      </div>

      <div className="mt-24 md:mt-16">{children}</div>

      <Footer />
    </div>
  );
}
