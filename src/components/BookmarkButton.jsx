import React from 'react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

export default function BookmarkButton({ bookmark, onClick }) {
  const ICON_CLASS = 'w-5 h-5 cursor-pointer';

  return (
    <div onClick={onClick}>
      {bookmark ? (
        <BsFillBookmarkFill className={ICON_CLASS} />
      ) : (
        <BsBookmark className={ICON_CLASS} />
      )}
    </div>
  );
}
