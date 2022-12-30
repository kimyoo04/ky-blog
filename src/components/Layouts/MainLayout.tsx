import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";

export default function MainLayout({children}) {
  return (
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
