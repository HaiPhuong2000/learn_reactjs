import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Chạm: Những Con Số Tình Yêu",
      thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/d/2/7/6d277f04ab005c7ee4f8d364710d898d.jpg",
    },
    {
      id: 2,
      name: "Ballad Việt Ngày Nay",
      thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/3/f/a/03facf5aa69e3f469128cb3030ff1c22.jpg",
    },
    {
      id: 3,
      name: "Indie Việt",
      thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/b/7/f/eb7fdc1f8d726c5cb30868562215b807.jpg",
    },
    {
      id: 4,
      name: "K-Pop Solo",
      thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/6/5/2/b652d3912b1ae4edf9fc9269e56125f8.jpg",
    },
    {
      id: 5,
      name: "Nhạc Phim Âu Mỹ Vui Nhộn",
      thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/b/1/8/2b18e75cc9e06df7a191be1cd19c0760.jpg",
    },
  ];
  return (
    <div>
      <h3>Có thể bạn sẽ thích:</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
