import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  const { title, body, user, comments, userId } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo key={userId} user={user} />
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      <CommentList comments={comments} />
    </div>
  );
};
