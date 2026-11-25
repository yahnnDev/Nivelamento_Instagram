import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import StoryItem from "./StoryItem";

const STORIES_PER_PAGE = 6;
const STORIES_STEP = 2;

export default function StoriesBar({ stories }) {
  const [startIndex, setStartIndex] = useState(0);

  // constante com o
  const maxStartIndex = Math.max(0, stories.length - STORIES_PER_PAGE);
  const visibleStories = stories.slice(
    startIndex,
    startIndex + STORIES_PER_PAGE,
  );

  function showNextStories() {
    setStartIndex((currentIndex) =>
      Math.min(currentIndex + STORIES_STEP, maxStartIndex),
    );
  }

  function showPreviousStories() {
    setStartIndex((currentIndex) => Math.max(currentIndex - STORIES_STEP, 0));
  }

  return (
    <div className="w-full">
      <div className="flex w-full justify-between gap-2">
        {visibleStories.map((story, index) => {
          const isFirstStory = index === 0;
          const isLastStory = index === visibleStories.length - 1;

          return (
            <div key={story.id} className="relative shrink-0">
              <StoryItem story={story} />

              {startIndex === 0 && isLastStory && maxStartIndex > 0 && (
                <button
                  type="button"
                  aria-label="Ver próximos Stories"
                  onClick={showNextStories}
                  className="absolute right-0 top-5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md"
                >
                  <FiChevronRight size={18} />
                </button>
              )}

              {startIndex > 0 && isFirstStory && (
                <button
                  type="button"
                  aria-label="Voltar aos Stories anteriores"
                  onClick={showPreviousStories}
                  className="absolute -left-3 top-5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md"
                >
                  <FiChevronLeft size={18} />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
