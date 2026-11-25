export default function StoryItem({ story }) {
  return (
    <div className="flex w-[92px] shrink-0 flex-col items-center">
      <div className="h-[80x] w-[80px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-fuchsia-600 p-[2px]">
        <div className="h-full w-full rounded-full bg-white p-[2px]">
          <img
            src={story.image}
            alt={`Foto de perfil de ${story.name}`}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>

      <span className="mt-1 w-full truncate text-center text-xs">
        {story.name}
      </span>
    </div>
  );
}
