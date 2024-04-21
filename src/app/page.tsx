import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[150vh]">
      <div className="h-[65vh] w-screen" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1531907700752-62799b2a3e84?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundPosition: "center",
        backgroundSize: "cover" }}>

      </div>

    </div>
  );
}
