import Header from "./header/page.js";
import Home from "./home/page.js";
export default function Body() {
  return (
    <main className="flex min-h-screen flex-col items-center">
     <Header />
     <Home />
    </main>
  );
}
