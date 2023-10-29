import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex bg-[url('/images/background.png')] min-h-screen flex-col relative items-center justify-between">
      <Navbar />
    </main>
  );
}
