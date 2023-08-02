import React from "react";
import { HomePageVideos } from "../Types";
import { Link } from "react-router-dom";

export default function Card({ data }: { data: HomePageVideos }) {
  return (
    <div className="w-90 h-100 flex gap-3 flex-col">
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="thumbnail"
            width={475}
          />
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="min-w-fit">
          <a href="#">
            <img
              src={data.channelInfo.image}
              alt="channel"
              className="h-14 w-14 rounded-full"
            />
          </a>
        </div>
        <div>
          <h3>
            <a href="#" className="text-2xl line-clamp-2">
              {data.videoTitle}
            </a>
          </h3>
          <div className="text-xl text-gray-400">
            <div>
              <a href="#" className="text-xl hover:text-white">
                {data.channelInfo.name}
              </a>
            </div>
            <div>
              <span className="text-md after:content-['•'] after:mx-1">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
