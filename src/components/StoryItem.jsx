export default function StoryItem({ story }) {
  return (
    <div className="flex w-[80px] shrink-0 flex-col items-center">
      <div className="h-[68px] w-[68px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-fuchsia-600 p-[2px]">
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
