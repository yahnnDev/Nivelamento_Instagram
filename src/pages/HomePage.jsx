// #region IMPORTS
// import dos icones da sidebar
import {
  FiInstagram,
  FiHome,
  FiVideo,
  FiSend,
  FiSearch,
  FiHeart,
  FiPlusSquare,
  FiUser,
  FiMenu,
} from "react-icons/fi";

import SidebarNavigation from "../components/SidebarNavigation"; // importação do componente da sidebar
import { stories } from "../data/stories"; // importação dos dados dos stories
import StoriesBar from "../components/StoriesBar"; // importação do com ponente da barra de stories

// #endregion IMPORTS

// #region CONSTANTS
// itens do menu principal
const mainMenuItems = [
  { id: "home", label: "Página inicial", icon: <FiHome size={24} /> },
  { id: "reels", label: "Reels", icon: <FiVideo size={24} /> },
  { id: "messages", label: "Mensagens", icon: <FiSend size={24} /> },
  { id: "search", label: "Pesquisa", icon: <FiSearch size={24} /> },
  { id: "notifications", label: "Notificações", icon: <FiHeart size={24} /> },
  { id: "profile", label: "Perfil", icon: <FiUser size={24} /> },
];

// ícone de criação de novo post/storie , etc
const createMenuItem = {
  id: "create",
  label: "Criar publicação",
  icon: <FiPlusSquare size={24} />,
};

// ícone do menu, mais
const moreMenuItem = {
  id: "more",
  label: "Mais",
  icon: <FiMenu size={24} />,
};
// #endregion CONSTANTS

export default function HomePage() {
  return (
    <div className="grid min-h-screen grid-cols-[minmax(240px,1fr)_minmax(0,1000px)_minmax(240px,1fr)] bg-white text-slate-900">
      <SidebarNavigation
        brandIcon={<FiInstagram size={28} />}
        items={mainMenuItems}
        createItem={createMenuItem}
        moreItem={moreMenuItem}
      />

      <div
        className="
        mx-auto grid w-full 
        max-w-[1000px] 
        grid-cols-[minmax(0,3fr)_minmax(0,2fr)] 
        gap-8 pl-12 pr-6 py-6"
      >
        {/* conteúdo principal da página */}
        <main className="space-y-6">
          {/* stories da página */}
          <section aria-label="Stories">
            <StoriesBar stories={stories} />
          </section>
          {/* posts da página */}
          <section aria-label="Feed de publicações">
            {/* Posts serão inseridos aqui */}
          </section>
        </main>

        <aside className="space-y-4">
          <section aria-label="Perfil conectado">
            {/* Perfil conectado será inserido aqui */}
          </section>

          <section aria-label="Sugestões de usuários">
            {/* Sugestões de usuários serão inseridas aqui */}
          </section>
        </aside>
      </div>

      <div aria-hidden="true" />
    </div>
  );
}
