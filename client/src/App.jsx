import Authpage from "./pages/Authpage";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Authpage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chat/:id" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
