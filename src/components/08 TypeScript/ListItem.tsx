import type { Comment } from "../../interfaces/comment";

export const ListItem = (props: Comment) => {
  const { id, name, email } = props;
  return (
    <p>
      {id}: {name}({email})
    </p>
  );
};
