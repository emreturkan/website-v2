import GameActivity from "./activity/game-activity";
import MovieActivity from "./activity/movie-activity";
import { Suspense } from "react";
import Loading from "./activity/loading";

const Activity = async () => {
  return (
    <div className="mt-8 grid md:grid-cols-2 gap-4">
      <Suspense fallback={<Loading />}>
        <GameActivity />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <MovieActivity />
      </Suspense>
    </div>
  );
};

export default Activity;
