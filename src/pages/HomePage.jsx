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

// importação do componente da sidebar
import SidebarNavigation from "../components/SidebarNavigation";
// importação dos dados e do componente dos stories
import { stories } from "../data/stories";
import StoriesBar from "../components/StoriesBar";
// importação dos dados e do componente de posts
import { posts } from "../data/posts";
import PostList from "../components/PostsList";

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
      {/* carrega o menu lateral de navegação da página do instagram */}
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
        grid-cols-[minmax(0,4fr)_minmax(0,2fr)] 
        gap-8 pr-6 py-6"
      >
        {/* conteúdo principal da página: stories e posts, separados por um espço horizontal: tailwind - space-y-6 */}
        <main className="space-y-6">
          {/* div para centralizar os stories e os posts*/}
          <div className="mx-auto w-full max-w-[600px] space-y-6">
            {/* chama o primeiro componente do stories, que monta a barra, passando os dados mocados carregafos no arquivo js stories.js: <stroriesBar /> */}
            <section aria-label="Stories">
              <StoriesBar stories={stories} />
            </section>

            {/* chama o primeiro componente dos posts, que recebe os dados mocados */}
            <section aria-label="Feed de publicações">
              <PostList posts={posts} />
            </section>
          </div>
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
