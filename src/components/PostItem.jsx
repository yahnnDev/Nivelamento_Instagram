import {
  FiHeart,
  FiMessageCircle,
  FiRepeat,
  FiSend,
  FiBookmark,
} from "react-icons/fi";

export default function PostItem({ post }) {
  {
    /* função do cabeçalho onde controla onde os dados do usuário será colocado, dentro ou fora da imagem */
  }
  const postHeader = (
    <div
      className={`flex items-center gap-3 ${
        post.headerPlacement === "overlay" ? "text-white" : "text-slate-900"
      }`}
    >
      <img
        src={post.user.avatar}
        alt={`Foto de perfil de ${post.user.displayName}`}
        className="h-8 w-8 rounded-full object-cover"
      />

      <span className="font-semibold">{post.user.displayName}</span>

      <span
        className={
          post.headerPlacement === "overlay"
            ? "text-sm text-white/80"
            : "text-sm text-gray-500"
        }
      >
        {post.postedAt}
      </span>
    </div>
  );

  return (
    <article className="w-full mx-auto max-w-[470px]">
      {post.headerPlacement === "outside" && (
        <div className="mb-3">{postHeader}</div>
      )}

      <div className="relative">
        <img
          src={post.media.src}
          alt={post.media.alt}
          className="block w-full rounded object-cover"
        />

        {post.headerPlacement === "overlay" && (
          <div className="absolute left-3 top-3">{postHeader}</div>
        )}
      </div>
    </article>
  );
}
